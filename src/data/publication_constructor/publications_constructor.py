#!/usr/bin/env python3
"""
Google Scholar Publications Scraper
Scrapes publication data from Google Scholar and formats it for publications.js
Author: Budi Permana
"""

import requests
from bs4 import BeautifulSoup
import json
import re
from datetime import datetime
import sys
import time
from urllib.parse import urlencode

class ScholarScraper:
    def __init__(self, scholar_url):
        self.scholar_url = scholar_url
        self.session = requests.Session()
        # Set headers to mimic a real browser
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        
    def fetch_all_publications(self):
        """Fetch all pages of publications"""
        all_publications = []
        start = 0
        page_size = 20  # Google Scholar shows 20 publications per page
        
        while True:
            print(f"Fetching publications {start + 1}-{start + page_size}...")
            
            # Construct URL with pagination
            if start == 0:
                url = self.scholar_url
            else:
                # Parse the original URL to add pagination parameters
                base_url = self.scholar_url.split('?')[0]
                params = {}
                if '?' in self.scholar_url:
                    for param in self.scholar_url.split('?')[1].split('&'):
                        if '=' in param:
                            key, value = param.split('=', 1)
                            params[key] = value
                params['cstart'] = start
                params['pagesize'] = page_size
                url = f"{base_url}?{urlencode(params)}"
            
            html_content = self.fetch_page(url)
            if not html_content:
                break
                
            page_publications = self.extract_publications_from_page(html_content, start)
            
            if not page_publications:
                print("No more publications found.")
                break
                
            all_publications.extend(page_publications)
            print(f"Found {len(page_publications)} publications on this page")
            
            # Check if there are more pages
            soup = BeautifulSoup(html_content, 'html.parser')
            next_button = soup.find('button', {'aria-label': 'Next'})
            if not next_button or next_button.get('disabled'):
                print("Reached last page.")
                break
                
            start += page_size
            time.sleep(2)  # Be respectful to Google's servers
            
        return all_publications
        
    def fetch_page(self, url=None):
        """Fetch a Google Scholar page"""
        try:
            target_url = url or self.scholar_url
            response = self.session.get(target_url)
            response.raise_for_status()
            return response.text
        except requests.RequestException as e:
            print(f"Error fetching page: {e}")
            return None
    
    def extract_publications_from_page(self, html_content, start_index=0):
        """Extract publication data from a single page"""
        soup = BeautifulSoup(html_content, 'html.parser')
        publications = []
        
        # Find all publication entries
        pub_elements = soup.find_all('tr', class_='gsc_a_tr')
        
        for i, pub in enumerate(pub_elements):
            try:
                # Extract title and link
                title_link = pub.find('a', class_='gsc_a_at')
                if not title_link:
                    continue
                    
                title = title_link.get_text(strip=True)
                detail_link = "https://scholar.google.com" + title_link['href']
                
                # Extract authors and venue from the second td
                details_td = pub.find_all('td')[0]
                author_venue = details_td.find('div', class_='gs_gray')
                
                authors = ""
                venue = ""
                if author_venue:
                    # Authors are usually in the first gs_gray div
                    authors = author_venue.get_text(strip=True)
                    
                    # Venue is usually in the second gs_gray div (sibling)
                    venue_div = author_venue.find_next_sibling('div', class_='gs_gray')
                    if venue_div:
                        venue = venue_div.get_text(strip=True)
                
                # Extract year
                year_td = pub.find_all('td')[2]  # Year is typically in the 3rd column
                year = ""
                if year_td:
                    year_text = year_td.get_text(strip=True)
                    if year_text.isdigit():
                        year = year_text
                
                # Generate ID (year_month_day format, using global index for uniqueness)
                global_index = start_index + i + 1
                if year:
                    pub_id = f"{year}_{global_index:02d}_01"
                    date = f"{year}-{(global_index % 12) + 1:02d}-01" if int(year) > 2000 else f"{year}-01-01"
                else:
                    pub_id = f"unknown_{global_index:02d}"
                    date = "Unknown"
                
                # Try to get more details from the individual publication page
                print(f"  Processing: {title[:50]}...")
                abstract, pub_url = self.get_publication_details(detail_link)
                
                # Determine publication type (basic heuristic)
                pub_type = self.determine_publication_type(venue, title)
                
                publication = {
                    "id": pub_id,
                    "title": title,
                    "authors": authors,
                    "venue": venue,
                    "date": date,
                    "type": pub_type,
                    "abstract": abstract,
                    "url": pub_url
                }
                
                publications.append(publication)
                
                # Add delay to be respectful to Google's servers
                time.sleep(1.5)
                
            except Exception as e:
                print(f"Error processing publication {i}: {e}")
                continue
        
        return publications
    
    def get_publication_details(self, detail_url):
        """Get additional details from individual publication page"""
        try:
            response = self.session.get(detail_url)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Extract abstract
            abstract = ""
            abstract_div = soup.find('div', class_='gsh_small')
            if abstract_div:
                abstract = abstract_div.get_text(strip=True)
            
            # Extract publication URL - enhanced detection
            pub_url = ""
            
            # Method 1: Look for direct links in the page
            url_links = soup.find_all('a')
            for link in url_links:
                href = link.get('href', '')
                text = link.get_text(strip=True).lower()
                
                # Skip Google Scholar internal links
                if 'scholar.google.com' in href or 'javascript:' in href:
                    continue
                    
                # Look for DOI links
                if 'doi.org' in href:
                    pub_url = href
                    break
                    
                # Look for journal/publisher links
                elif any(domain in href for domain in [
                    'pubmed.ncbi.nlm.nih.gov', 'ncbi.nlm.nih.gov',
                    'nature.com', 'springer.com', 'sciencedirect.com',
                    'wiley.com', 'tandfonline.com', 'bmj.com',
                    'academic.oup.com', 'journals.asm.org',
                    'frontiersin.org', 'biorxiv.org', 'arxiv.org',
                    'github.com', 'plos.org', 'cell.com'
                ]):
                    pub_url = href
                    break
                    
                # Look for text indicators
                elif any(keyword in text for keyword in [
                    'full text', 'pdf', 'article', 'publisher',
                    'journal', 'paper', 'read', 'download'
                ]) and href.startswith('http'):
                    if not pub_url:  # Use as fallback
                        pub_url = href
            
            # Method 2: Look for DOI in the text content
            if not pub_url:
                page_text = soup.get_text()
                
                # Look for DOI patterns
                doi_patterns = [
                    r'doi[:\s]*([10]\.[0-9]+/[^\s,\)]+)',
                    r'DOI[:\s]*([10]\.[0-9]+/[^\s,\)]+)',
                    r'https?://doi\.org/([10]\.[0-9]+/[^\s,\)]+)',
                    r'dx\.doi\.org/([10]\.[0-9]+/[^\s,\)]+)'
                ]
                
                for pattern in doi_patterns:
                    doi_match = re.search(pattern, page_text, re.IGNORECASE)
                    if doi_match:
                        doi = doi_match.group(1)
                        pub_url = f"https://doi.org/{doi}"
                        break
                
                # Look for PubMed ID
                if not pub_url:
                    pmid_match = re.search(r'PMID[:\s]*([0-9]+)', page_text, re.IGNORECASE)
                    if pmid_match:
                        pmid = pmid_match.group(1)
                        pub_url = f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/"
            
            # Method 3: Look in the sidebar for external links
            if not pub_url:
                sidebar = soup.find('div', {'id': 'gsc_oci_sidebar'})
                if sidebar:
                    sidebar_links = sidebar.find_all('a')
                    for link in sidebar_links:
                        href = link.get('href', '')
                        if href.startswith('http') and 'scholar.google.com' not in href:
                            pub_url = href
                            break
            
            return abstract, pub_url
            
        except Exception as e:
            print(f"Error getting publication details: {e}")
            return "", ""
    
    def determine_publication_type(self, venue, title):
        """Determine publication type based on venue and title"""
        venue_lower = venue.lower()
        title_lower = title.lower()
        
        if any(word in venue_lower for word in ['conference', 'symposium', 'workshop', 'meeting']):
            if any(word in title_lower for word in ['poster', 'abstract']):
                return "Poster Presentation"
            else:
                return "Conference Paper"
        elif any(word in venue_lower for word in ['journal', 'nature', 'science', 'cell', 'plos', 'bmc']):
            return "Research Article"
        elif 'book' in venue_lower or 'press' in venue_lower:
            return "Book"
        elif 'preprint' in venue_lower or 'arxiv' in venue_lower or 'biorxiv' in venue_lower:
            return "Preprint"
        else:
            return "Publication"
    
    def format_for_js(self, publications):
        """Format publications data for JavaScript export"""
        js_content = "export const publications = [\n"
        
        for i, pub in enumerate(publications):
            js_content += "  {\n"
            for key, value in pub.items():
                # Escape quotes and handle multiline text
                if isinstance(value, str):
                    value = value.replace('"', '\\"').replace('\n', ' ').strip()
                js_content += f'    {key}: "{value}",\n'
            js_content += "  }"
            if i < len(publications) - 1:
                js_content += ","
            js_content += "\n"
        
        js_content += "]\n"
        return js_content
    
    def save_publications(self, publications, filename="publications.js"):
        """Save publications to JavaScript file"""
        js_content = self.format_for_js(publications)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        print(f"Publications saved to {filename}")
        print(f"Total publications: {len(publications)}")

def main():
    # Google Scholar URL
    scholar_url = "https://scholar.google.com/citations?user=vOlW2g4AAAAJ&hl=en"
    
    print("Starting Google Scholar scraping...")
    print(f"URL: {scholar_url}")
    print("This will fetch ALL publications across multiple pages...")
    
    scraper = ScholarScraper(scholar_url)
    
    # Fetch all publications across all pages
    publications = scraper.fetch_all_publications()
    
    if not publications:
        print("No publications found")
        sys.exit(1)
    
    print(f"\nTotal publications found: {len(publications)}")
    
    # Save to file
    scraper.save_publications(publications, "publications.js")
    
    # Also save as JSON for backup
    with open("publications_backup.json", 'w', encoding='utf-8') as f:
        json.dump(publications, f, indent=2, ensure_ascii=False)
    
    print("Scraping completed successfully!")
    print(f"\nTotal publications scraped: {len(publications)}")
    print("\nFirst few publications:")
    for pub in publications[:3]:
        print(f"- {pub['title']} ({pub['date']})")
        if pub['url']:
            print(f"  URL: {pub['url']}")
    
    # Show statistics
    with_urls = sum(1 for pub in publications if pub['url'])
    print(f"\nStatistics:")
    print(f"- Publications with URLs: {with_urls}/{len(publications)} ({with_urls/len(publications)*100:.1f}%)")

if __name__ == "__main__":
    main()