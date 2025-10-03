export const site = {
  meta: {
    title: "Budi Permana - Academic Portfolio",
    description: "Bioinformatician specializing in microbial genomics research and web-based visualization tools",
    author: "Budi Permana",
    keywords: [
      "bioinformatics",
      "microbial genomics", 
      "data visualization",
      "academic research",
      "computational biology",
      "web development"
    ],
    url: "https://nalarbp.github.io",
    image: "/images/profile.png"
  },

  contact: {
    email: "budi.permana@uq.edu.au", // Update with actual email
    googleScholar: "https://scholar.google.com/citations?user=vOlW2g4AAAAJ&hl=en",
    orcid: "", // Add if available
    linkedin: "", // Add if available
    twitter: "", // Add if available
    github: "" // Add if available
  },

  assets: {
    baseUrl: "/",
    images: "/images",
    files: "/files",
    cv: "/files/pdf/Budi_Permana_CV.pdf"
  },

  features: {
    googleScholar: {
      enabled: true,
      userId: "vOlW2g4AAAAJ"
    },
    themes: {
      enabled: true,
      default: "light"
    },
    analytics: {
      enabled: false, // Can be enabled later
      trackingId: "" // Add when needed
    }
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Budi Permana. All rights reserved.`,
    builtWith: "Built with React, Vite, Tailwind CSS, and Daisy UI",
    lastUpdated: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
  }
}