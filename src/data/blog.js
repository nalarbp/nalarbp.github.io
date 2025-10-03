export const blog = {
  meta: {
    title: "Blog",
    description: "Thoughts on bioinformatics, research, and technology"
  },

  status: {
    type: "migration",
    message: "Blog posts will be migrated from Jekyll soon.",
    migrationNote: "Previous blog posts from the Jekyll site are being converted and will be available shortly."
  },

  // Placeholder for future blog posts - can be populated later
  posts: [
    // Example structure for when posts are added:
    // {
    //   id: "post-1",
    //   title: "Getting Started with Bioinformatics",
    //   slug: "getting-started-bioinformatics",
    //   excerpt: "An introduction to the world of bioinformatics...",
    //   content: "Full post content here...",
    //   author: "Budi Permana",
    //   publishedDate: "2024-01-15",
    //   tags: ["bioinformatics", "tutorial", "beginners"],
    //   featured: true,
    //   readTime: "5 min read"
    // }
  ],

  categories: [
    "Bioinformatics",
    "Research",
    "Technology", 
    "Academia",
    "Tools",
    "Tutorials"
  ],

  featuredTopics: [
    {
      title: "Microbial Genomics",
      description: "Insights from bacterial genome analysis and epidemiology",
      icon: "🧬"
    },
    {
      title: "Visualization Tools",
      description: "Development of interactive tools for genomic data",
      icon: "📊"
    },
    {
      title: "Web Development",
      description: "Building modern applications for scientific research",
      icon: "💻"
    },
    {
      title: "Research Methods",
      description: "Best practices in computational biology research",
      icon: "🔬"
    }
  ]
}