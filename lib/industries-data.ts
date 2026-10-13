import { industryLinks, type IndustryLink } from "./site-menu"

export interface IndustryContent {
  /** One line used on cards and as the meta description */
  summary: string
  intro: string
  challenges: string[]
  approach: { title: string; description: string }[]
  /** Slugs from the services catalogue most relevant to this industry */
  services: string[]
  faqs: { question: string; answer: string }[]
}

export const industryContent: Record<string, IndustryContent> = {
  healthcare: {
    summary: "Patient-first digital marketing for hospitals, clinics, diagnostic centres and wellness brands.",
    intro:
      "Patients research symptoms, doctors and clinics online long before they book. We help healthcare providers show up in those searches with accurate, trustworthy information, and make it simple for patients to take the next step.",
    challenges: [
      "Patients choose based on trust, reviews and reputation",
      "Strict advertising policies for medical services",
      "Heavy competition in local search for every speciality",
      "Enquiries lost to slow responses and missed calls",
    ],
    approach: [
      { title: "Local visibility for every speciality", description: "Google Business Profiles and location pages for each doctor, department and branch." },
      { title: "Credible medical content", description: "Clear, reviewed content that answers patient questions without making claims you cannot support." },
      { title: "Policy-compliant advertising", description: "Campaigns built within platform rules for healthcare, so ads keep running." },
      { title: "Faster appointment booking", description: "Chatbots, WhatsApp and call handling that turn enquiries into confirmed appointments." },
    ],
    services: ["local-seo", "online-reputation-management", "google-ads", "content-marketing", "ai-chatbots", "review-management"],
    faqs: [
      {
        question: "Can healthcare providers advertise online?",
        answer:
          "Yes, within the rules. Advertising platforms and medical regulators restrict certain claims and treatments, so we plan campaigns around what is permitted for your speciality and location.",
      },
      {
        question: "How do you handle patient reviews?",
        answer:
          "We help you request genuine reviews from patients and respond to feedback professionally, without disclosing any personal or medical information.",
      },
    ],
  },
  education: {
    summary: "Admissions-focused marketing for schools, colleges, coaching institutes and edtech brands.",
    intro:
      "Students and parents compare many options before applying. We help institutes and edtech brands reach them early, answer their questions clearly and keep in touch through the long decision period until enrolment.",
    challenges: [
      "Enquiries concentrated in short admission seasons",
      "Long decision cycles involving both students and parents",
      "Rising cost per lead on crowded ad platforms",
      "Leads going cold without timely follow-up",
    ],
    approach: [
      { title: "Seasonal campaign planning", description: "Budgets and messaging timed to admission cycles, results and exam calendars." },
      { title: "Course and programme pages", description: "Search-optimised pages that answer fees, eligibility, outcomes and placement questions." },
      { title: "Lead nurturing", description: "Automated email and WhatsApp sequences that keep applicants engaged until they enrol." },
      { title: "Student stories", description: "Social content and testimonials that show real campus life and results." },
    ],
    services: ["google-ads", "meta-ads", "local-seo", "marketing-automation", "whatsapp-marketing", "content-creation"],
    faqs: [
      {
        question: "When should we start marketing for admissions?",
        answer:
          "Well before the admission window opens. Students begin researching months ahead, so early visibility and steady follow-up usually cost less than a last-minute push.",
      },
      {
        question: "Do you work with online course providers as well?",
        answer:
          "Yes. For edtech and online programmes we focus on performance campaigns, landing pages and automated nurturing that lead to sign-ups.",
      },
    ],
  },
  "corporate-b2b": {
    summary: "Lead generation and brand building for B2B companies with longer, multi-person buying decisions.",
    intro:
      "B2B buyers research carefully, involve several people and take time to decide. We help you reach the right companies and roles, earn their trust with useful content and give your sales team better-qualified conversations.",
    challenges: [
      "Long sales cycles with several decision-makers",
      "Small, specific audiences that are hard to reach",
      "Proving that marketing contributes to revenue",
      "Complex offerings that are difficult to explain simply",
    ],
    approach: [
      { title: "Account-focused targeting", description: "LinkedIn and search campaigns aimed at the industries, companies and job titles you want." },
      { title: "Thought leadership content", description: "Guides, case studies and articles that demonstrate expertise and answer buyer questions." },
      { title: "Lead nurturing and scoring", description: "Automated follow-up that warms up leads and flags the ones ready for sales." },
      { title: "Founder and leadership branding", description: "Personal brands for your leaders that open doors for the company." },
    ],
    services: ["linkedin-ads", "content-marketing", "marketing-automation", "personal-branding", "technical-seo", "email-marketing"],
    faqs: [
      {
        question: "How do you measure B2B marketing success?",
        answer:
          "Beyond clicks and form fills, we track lead quality and progress through your pipeline wherever your CRM data allows, so marketing is judged on its contribution to sales.",
      },
      {
        question: "Our product is very technical. Can you write about it?",
        answer:
          "Yes. We work closely with your subject experts and turn their knowledge into content that is accurate and easy for buyers to follow.",
      },
    ],
  },
  ecommerce: {
    summary: "End-to-end growth for online stores and marketplace sellers on Amazon, Flipkart, Myntra and Meesho.",
    intro:
      "E-commerce is at the heart of what Wings2Sky does. We manage marketplace accounts, listings, ads and product photoshoots, and grow your own store through SEO, performance marketing and retention, so every channel works together.",
    challenges: [
      "Rising ad costs and thinner margins",
      "Low visibility among thousands of similar listings",
      "Abandoned carts and one-time buyers",
      "Managing several marketplaces with different rules",
    ],
    approach: [
      { title: "Marketplace account management", description: "Listings, catalogue, ads, orders and account health handled across Amazon, Flipkart, Myntra and Meesho." },
      { title: "Performance advertising", description: "Shopping, catalogue and remarketing campaigns built around your margins." },
      { title: "Conversion-ready content", description: "Product photoshoots, A+ content and descriptions that help shoppers decide." },
      { title: "Retention", description: "Email and WhatsApp flows that recover carts and bring customers back." },
    ],
    services: ["google-ads", "meta-ads", "remarketing", "email-marketing", "whatsapp-marketing", "review-management"],
    faqs: [
      {
        question: "Do you manage marketplace seller accounts?",
        answer:
          "Yes. Marketplace account management is a core Wings2Sky service, covering listings, advertising, catalogue and day-to-day account operations.",
      },
      {
        question: "Should I sell on marketplaces or my own website?",
        answer:
          "Most brands benefit from both. Marketplaces bring ready demand, while your own store builds margin and customer relationships. We help you balance the two.",
      },
    ],
  },
  "real-estate": {
    summary: "Qualified buyer and investor leads for developers, brokers and property consultants.",
    intro:
      "Property is a high-value, high-consideration purchase. We help developers and brokers generate genuine enquiries, filter out casual browsers and stay in touch with serious buyers until they are ready to visit and decide.",
    challenges: [
      "High volumes of low-quality or duplicate leads",
      "Long decision periods before a site visit or booking",
      "Intense competition on property portals",
      "Slow follow-up that lets interested buyers go elsewhere",
    ],
    approach: [
      { title: "Project-specific landing pages", description: "Dedicated pages for each project with clear pricing, location and amenities." },
      { title: "Location-targeted campaigns", description: "Search and social ads focused on the cities, areas and investor profiles that matter." },
      { title: "Lead qualification", description: "Forms, chatbots and voice agents that capture budget, timeline and requirements up front." },
      { title: "Consistent follow-up", description: "Automated WhatsApp and email reminders through to site visit and booking." },
    ],
    services: ["landing-pages", "google-ads", "meta-ads", "whatsapp-marketing", "voice-sales-agents", "local-seo"],
    faqs: [
      {
        question: "How do you improve lead quality?",
        answer:
          "By tightening targeting, asking qualifying questions at the enquiry stage and reviewing which sources produce site visits, not just form fills.",
      },
      {
        question: "Can you market to NRI buyers?",
        answer:
          "Yes. We run country-specific campaigns for overseas buyers and investors, with messaging and timing adapted to each market.",
      },
    ],
  },
  "tech-startups": {
    summary: "Go-to-market and growth marketing for SaaS products, apps and early-stage tech companies.",
    intro:
      "Startups need traction quickly and cannot afford to waste budget. We help you sharpen your positioning, test channels with discipline and build the organic foundations that keep acquisition costs down as you scale.",
    challenges: [
      "Limited budgets and pressure to show growth",
      "Explaining a new product or category to the market",
      "Finding which channels actually bring paying users",
      "Building credibility as a young brand",
    ],
    approach: [
      { title: "Sharp positioning", description: "Clear messaging about who the product is for and why it is different." },
      { title: "Disciplined channel testing", description: "Small, measured experiments across paid channels before committing budget." },
      { title: "SEO and AI search foundations", description: "Content and technical work that brings in users without ongoing ad spend." },
      { title: "High-converting pages", description: "Landing pages and onboarding flows that turn visitors into sign-ups." },
    ],
    services: ["geo", "content-marketing", "landing-pages", "linkedin-ads", "ai-automation", "technical-seo"],
    faqs: [
      {
        question: "We are pre-revenue. Is it too early for marketing?",
        answer:
          "Not for the basics. Positioning, a clear website and early content cost little and compound over time. We keep paid spend small until you find what converts.",
      },
      {
        question: "Can you support an international launch?",
        answer:
          "Yes. We plan keyword research, content and campaigns separately for each target market.",
      },
    ],
  },
  "manufacturing-logistics": {
    summary: "Digital lead generation for manufacturers, exporters, distributors and logistics providers.",
    intro:
      "Industrial buyers now start their supplier search online. We help manufacturers and logistics companies get found for the products and capabilities they offer, present themselves professionally and convert website visits into RFQs.",
    challenges: [
      "Heavy reliance on referrals, trade shows and existing accounts",
      "Outdated websites that undersell real capabilities",
      "Technical products that are hard to present online",
      "Reaching procurement teams in new regions and export markets",
    ],
    approach: [
      { title: "Product and capability pages", description: "Detailed, search-optimised pages for each product line, specification and service." },
      { title: "B2B lead generation", description: "Search and LinkedIn campaigns targeting procurement and operations roles." },
      { title: "A modern industrial website", description: "A professional site with clear enquiry and RFQ paths." },
      { title: "Automated enquiry handling", description: "Instant acknowledgement, routing and follow-up for every enquiry." },
    ],
    services: ["technical-seo", "linkedin-ads", "web-design", "content-marketing", "marketing-automation", "ai-automation"],
    faqs: [
      {
        question: "Our buyers are few and specialised. Does digital marketing still make sense?",
        answer:
          "Yes. With a small audience, precise targeting matters even more. A handful of well-qualified enquiries can justify the whole effort.",
      },
      {
        question: "Can you help us reach export markets?",
        answer:
          "Yes. We research how buyers search in each country and build pages and campaigns for those markets.",
      },
    ],
  },
  retail: {
    summary: "More footfall and repeat customers for retail stores, chains and franchises.",
    intro:
      "Shoppers check online before they step out. We help retailers appear in local searches, run offers that bring people through the door and stay in touch with customers after they leave, online and in store.",
    challenges: [
      "Driving consistent footfall to physical stores",
      "Competing with online marketplaces on convenience",
      "Keeping information consistent across many locations",
      "Turning one-time shoppers into regulars",
    ],
    approach: [
      { title: "Store-level local SEO", description: "Accurate, optimised listings and pages for every outlet." },
      { title: "Offer and festive campaigns", description: "Geo-targeted ads for launches, sales and seasonal peaks." },
      { title: "Loyalty and re-engagement", description: "WhatsApp and email programmes that bring customers back." },
      { title: "Reviews and ratings", description: "A steady flow of genuine reviews for each store." },
    ],
    services: ["local-seo", "meta-ads", "whatsapp-marketing", "review-management", "content-creation", "influencer-marketing"],
    faqs: [
      {
        question: "Can online ads really bring people into a physical store?",
        answer:
          "Yes. Location-targeted ads, local search and store-specific offers are designed for exactly that, and store visits and offer redemptions help measure the effect.",
      },
      {
        question: "We have many outlets. Can you manage them all?",
        answer:
          "Yes. We manage listings, reviews and campaigns for each location under one coordinated plan.",
      },
    ],
  },
  hospitality: {
    summary: "More direct bookings and better reviews for hotels, resorts, restaurants and travel brands.",
    intro:
      "Guests choose with their eyes and their trust in reviews. We help hospitality brands look their best online, win more direct bookings and reservations, and build the reputation that keeps occupancy high.",
    challenges: [
      "High commissions paid to booking platforms",
      "Seasonal swings in demand",
      "Guest decisions driven by ratings and reviews",
      "Standing out in a visually competitive category",
    ],
    approach: [
      { title: "Direct booking campaigns", description: "Search and social ads that send guests to your own website instead of third parties." },
      { title: "Visual storytelling", description: "Photography, reels and creator content that show the experience." },
      { title: "Reputation management", description: "Active monitoring of and response to reviews on every major platform." },
      { title: "Guest communication", description: "WhatsApp and email for confirmations, upsells and repeat visits." },
    ],
    services: ["local-seo", "influencer-marketing", "online-reputation-management", "meta-ads", "content-creation", "whatsapp-marketing"],
    faqs: [
      {
        question: "How can we reduce our dependence on booking platforms?",
        answer:
          "By making your own website easy to find and book on, running direct booking campaigns and giving returning guests a reason to book with you directly.",
      },
      {
        question: "Do you market restaurants and cafes too?",
        answer:
          "Yes. Local search, social content, creator collaborations and review management work especially well for food and beverage businesses.",
      },
    ],
  },
  "consumer-services": {
    summary: "A steady flow of local enquiries for salons, fitness studios, home services and other consumer businesses.",
    intro:
      "Consumer service businesses run on bookings and repeat customers. We help you get found when people nearby search for what you do, make booking effortless and keep customers coming back.",
    challenges: [
      "Depending on word of mouth for new customers",
      "Competing with aggregator apps and platforms",
      "Uneven demand through the week and year",
      "Customers who never return after a first visit",
    ],
    approach: [
      { title: "Local search presence", description: "Top visibility in Google Maps and local results for your services and area." },
      { title: "Booking-focused advertising", description: "Campaigns that lead straight to a call, WhatsApp chat or booking form." },
      { title: "Instant responses", description: "Chatbots and WhatsApp automation so no enquiry waits for an answer." },
      { title: "Repeat business", description: "Reminders, offers and review requests after every visit." },
    ],
    services: ["local-seo", "google-ads", "meta-ads", "whatsapp-marketing", "review-management", "ai-chatbots"],
    faqs: [
      {
        question: "I have a small budget. Where should I start?",
        answer:
          "With your Google Business Profile and reviews. They cost little and usually deliver the quickest improvement in local enquiries.",
      },
      {
        question: "Can you help me rely less on aggregator platforms?",
        answer:
          "Yes. Building your own search presence, customer list and direct booking channel gradually reduces that dependence.",
      },
    ],
  },
  "technical-services": {
    summary: "Qualified project enquiries for IT, engineering, repair, installation and other specialist service firms.",
    intro:
      "Technical service buyers look for proof of expertise before they make contact. We help specialist firms explain what they do clearly, demonstrate their experience and attract enquiries for the kind of projects they want.",
    challenges: [
      "Complex services that are hard to describe simply",
      "Buyers who want evidence of expertise before calling",
      "Irregular project pipelines",
      "Competing on price with less qualified providers",
    ],
    approach: [
      { title: "Clear service pages", description: "Each service explained in plain language, with scope, process and typical use cases." },
      { title: "Proof of expertise", description: "Case studies, certifications and project galleries presented prominently." },
      { title: "Search-led lead generation", description: "SEO and Google Ads targeting people searching for your specific services." },
      { title: "Enquiry and quote workflows", description: "Structured forms and automated follow-up so quotes go out quickly." },
    ],
    services: ["local-seo", "google-ads", "technical-seo", "content-marketing", "web-design", "marketing-automation"],
    faqs: [
      {
        question: "Our work is highly specialised. Will people search for it?",
        answer:
          "Usually yes, though in smaller numbers. Specialised searches tend to come from serious buyers, so a modest volume of traffic can still produce valuable projects.",
      },
      {
        question: "Can you help us win larger contracts?",
        answer:
          "We can strengthen how you present your capabilities and experience online, which supports tender and vendor evaluations alongside your sales effort.",
      },
    ],
  },
}

export interface Industry extends IndustryContent, IndustryLink {}

export function getIndustry(slug: string): Industry | undefined {
  const link = industryLinks.find((item) => item.slug === slug)
  const content = industryContent[slug]
  if (!link || !content) return undefined

  return { ...link, ...content }
}

export const industries: Industry[] = industryLinks
  .map((link) => getIndustry(link.slug))
  .filter((item): item is Industry => Boolean(item))
