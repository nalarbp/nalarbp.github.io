# Publications Constructor

This directory contains a Python script to automatically scrape and update your publications from Google Scholar.

## Setup

1. Navigate to this directory:
```bash
cd src/data/publication_constructor/
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

1. Make sure you're in this directory:
```bash
cd src/data/publication_constructor/
```

2. Run the scraper:
```bash
python publications_constructor.py
```

3. The script will:
   - Scrape your Google Scholar page
   - Extract publication titles, authors, venues, and years
   - Generate a new `publications.js` file
   - Create a backup `publications_backup.json` file

4. Review the generated `publications.js` file and copy the content to replace the existing publications array in your main `publications.js` file.

## Notes

- The script includes delays between requests to be respectful to Google's servers
- Some abstracts and URLs might need manual verification
- Publication types are determined using heuristics based on venue names
- Run this monthly to keep your publications up to date

## Manual Review Needed

After running the script, please review:
- Publication abstracts (may need manual addition)
- Publication URLs (may need manual verification)
- Publication types (may need adjustment)
- Author name formatting
- Date formatting for older publications

## Customization

You can modify the `publications_constructor.py` script to:
- Adjust publication type detection logic
- Change ID generation format
- Modify output formatting
- Add additional fields