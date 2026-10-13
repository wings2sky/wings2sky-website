import {
  Bot,
  Building2,
  Code,
  Factory,
  GraduationCap,
  HeartHandshake,
  Home,
  Hotel,
  Rocket,
  Search,
  Share2,
  ShoppingBag,
  Smile,
  Stethoscope,
  Store,
  Target,
  Wrench,
  type LucideIcon,
} from "lucide-react"

// Lightweight menu structure shared by the header, footer and listing pages.
// Long-form page content lives in services-catalog.ts and industries-data.ts.

export interface ServiceLink {
  slug: string
  label: string
  href: string
}

export interface ServiceCategory {
  slug: string
  name: string
  tagline: string
  icon: LucideIcon
  /** Existing overview page for the whole category, when there is one */
  hubHref?: string
  services: ServiceLink[]
}

const service = (slug: string, label: string, href = `/services/${slug}`): ServiceLink => ({ slug, label, href })

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "seo",
    name: "SEO",
    tagline: "Be found on Google and in AI answers",
    icon: Search,
    hubHref: "/services/seo",
    services: [
      service("aeo", "AEO"),
      service("geo", "GEO"),
      service("technical-seo", "Technical SEO"),
      service("on-page-seo", "On-Page SEO"),
      service("local-seo", "Local SEO"),
      service("keyword-research", "Keyword Research"),
      service("link-building", "Link Building"),
      service("seo-audit", "SEO Audit"),
      service("content-marketing", "Content Marketing"),
    ],
  },
  {
    slug: "paid-media",
    name: "Paid Media",
    tagline: "Ads that pay for themselves",
    icon: Target,
    hubHref: "/services/paid-ads",
    services: [
      service("google-ads", "Google Ads"),
      service("meta-ads", "Meta Ads"),
      service("linkedin-ads", "LinkedIn Ads"),
      service("youtube-ads", "YouTube Ads"),
      service("tiktok-ads", "TikTok Ads"),
      service("remarketing", "Remarketing"),
      service("chatgpt-ads", "ChatGPT Ads"),
    ],
  },
  {
    slug: "social-media",
    name: "Social Media",
    tagline: "Build a brand people follow",
    icon: Share2,
    hubHref: "/services/social-media",
    services: [
      service("influencer-marketing", "Influencer Marketing"),
      service("personal-branding", "Personal Branding"),
      service("content-creation", "Content Creation"),
      service("brand-management", "Brand Management"),
      service("social-media-strategy", "Social Media Strategy Development"),
      service("viral-meme-marketing", "Viral and Meme Marketing"),
    ],
  },
  {
    slug: "content-web",
    name: "Content & Web",
    tagline: "Websites built to convert",
    icon: Code,
    hubHref: "/services/website-development",
    services: [
      service("custom-development", "Custom Development"),
      service("web-design", "Web Design"),
      service("website-development", "Web Development"),
      service("landing-pages", "Landing Pages"),
    ],
  },
  {
    slug: "lifecycle-reputation",
    name: "Lifecycle & Reputation",
    tagline: "Keep customers and protect your name",
    icon: HeartHandshake,
    services: [
      service("email-marketing", "Email Marketing"),
      service("whatsapp-marketing", "WhatsApp Marketing"),
      service("marketing-automation", "Marketing Automation"),
      service("online-reputation-management", "Online Reputation (ORM)"),
      service("review-management", "Review Management"),
    ],
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    tagline: "Put AI to work in your business",
    icon: Bot,
    services: [
      service("ai-automation", "AI Automation"),
      service("ai-chatbots", "AI Chatbots"),
      service("ai-content", "AI Content"),
      service("ai-analytics", "AI Analytics"),
      service("ai-consulting", "AI Consulting"),
      service("voice-sales-agents", "Voice & Sales Agents"),
    ],
  },
]

// Wings2Sky's core e-commerce offering, highlighted alongside the catalogue
export const featuredServices = [
  {
    label: "E-Commerce Account Management",
    description: "Complete marketplace account management for scalable growth.",
    href: "/services/ecommerce-management",
  },
  {
    label: "Product Photoshoot",
    description: "High-quality product images that drive conversions.",
    href: "/photoshoot",
  },
  {
    label: "Digital Marketing",
    description: "Strategies built to deliver consistent growth across all digital channels.",
    href: "/services/digital-marketing",
  },
]

export interface IndustryLink {
  slug: string
  name: string
  href: string
  icon: LucideIcon
}

const industry = (slug: string, name: string, icon: LucideIcon): IndustryLink => ({
  slug,
  name,
  href: `/industries/${slug}`,
  icon,
})

export const industryLinks: IndustryLink[] = [
  industry("healthcare", "Healthcare", Stethoscope),
  industry("education", "Education", GraduationCap),
  industry("corporate-b2b", "Corporate / B2B", Building2),
  industry("ecommerce", "E-commerce", ShoppingBag),
  industry("real-estate", "Real Estate", Home),
  industry("tech-startups", "Tech Startups", Rocket),
  industry("manufacturing-logistics", "Manufacturing and Logistics", Factory),
  industry("retail", "Retail", Store),
  industry("hospitality", "Hospitality", Hotel),
  industry("consumer-services", "Consumer Services", Smile),
  industry("technical-services", "Technical Services", Wrench),
]
