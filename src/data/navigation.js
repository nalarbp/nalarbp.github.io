import { FaGoogleScholar, FaOrcid, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

export const navigation = {
  brand: {
    name: "Budi Permana, PhD",
    href: "/",
    avatar: "/images/profile.png",
    profileLinks: [
      {
        id: "google-scholar",
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=vOlW2g4AAAAJ&hl=en",
        icon: FaGoogleScholar
      },
      {
        id: "orcid",
        name: "ORCID",
        url: "https://orcid.org/0000-0002-9953-113X",
        icon: FaOrcid
      },
      {
        id: "linkedin",
        name: "LinkedIn",
        url: "https://au.linkedin.com/in/budi-permana-nalarbp",
        icon: FaLinkedin
      },
      {
        id: "twitter",
        name: "Twitter/X",
        url: "https://x.com/nalarbudi",
        icon: FaXTwitter
      }
    ]
  },

  menuItems: [
    {
      id: "home",
      label: "Home",
      href: "/",
      description: "About me and career overview"
    },
    {
      id: "publications",
      label: "Publications",
      href: "/publications",
      description: "Research publications and Google Scholar profile"
    },
    {
      id: "resume",
      label: "Resume",
      href: "/resume",
      description: "Curriculum Vitae and professional experience"
    },
    {
      id: "scifr",
      label: "SCIFR",
      href: "/scifr",
      description: "Scientific tools and resources"
    },
    {
      id: "haiviz",
      label: "HAIviz",
      href: "https://nalarbp.github.io/haiviz",
      description: "Healthcare-Associated Infection Visualization Tool v1"
    }
  ],

  themes: [
    { id: "light", name: "Light", default: true },
    { id: "dark", name: "Dark" },
    { id: "cupcake", name: "Cupcake" },
    { id: "corporate", name: "Corporate" },
    { id: "synthwave", name: "Synthwave" },
    { id: "retro", name: "Retro" },
    { id: "cyberpunk", name: "Cyberpunk" },
    { id: "valentine", name: "Valentine" },
    { id: "halloween", name: "Halloween" },
    { id: "garden", name: "Garden" },
    { id: "forest", name: "Forest" },
    { id: "aqua", name: "Aqua" },
    { id: "lofi", name: "Lo-Fi" },
    { id: "pastel", name: "Pastel" },
    { id: "fantasy", name: "Fantasy" },
    { id: "wireframe", name: "Wireframe" },
    { id: "black", name: "Black" },
    { id: "luxury", name: "Luxury" },
    { id: "dracula", name: "Dracula" },
    { id: "cmyk", name: "CMYK" },
    { id: "autumn", name: "Autumn" },
    { id: "business", name: "Business" },
    { id: "acid", name: "Acid" },
    { id: "lemonade", name: "Lemonade" },
    { id: "night", name: "Night" },
    { id: "coffee", name: "Coffee" },
    { id: "winter", name: "Winter" }
  ]
}