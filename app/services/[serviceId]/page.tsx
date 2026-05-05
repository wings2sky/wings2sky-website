// app/services/[serviceId]/page.tsx
import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { notFound } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

// Service data - match with the IDs from ServicesSection
const serviceData: Record<string, any> = {
  "digital-marketing": {
    title: "Digital Marketing Services",
    icon: "📊",
    description: "Strategies built to deliver consistent growth across all digital channels.",
    detailedDescription: "At Wings2Sky, we don't believe in vanity metrics. Likes, impressions, and traffic only matter when they convert into leads, sales, and long-term brand value. Our digital marketing services are built to help businesses grow consistently using data, strategy, and execution that actually works. Whether you're a startup trying to build visibility or an established brand looking to scale, we design digital strategies aligned with your business goals.",
    approach: {
      title: "Our Digital Marketing Approach",
      description: "We start with understanding your business, audience, and competition. From there, we create a custom digital roadmap focused on acquisition, engagement, and conversion.",
      principles: [
        "Strategy first, tools later",
        "Performance over promises",
        "Continuous optimization, not one-time setup"
      ]
    },
    subServices: [
      {
        name: "Search Engine Optimization (SEO)",
        description: "We help your website rank higher on Google and attract high-intent organic traffic. Our SEO process includes keyword research, on-page optimization, technical SEO, content strategy, and link building. The goal is not just rankings, but qualified traffic that converts."
      },
      {
        name: "Pay-Per-Click Advertising (PPC)",
        description: "From Google Ads to social media ads, we create and manage paid campaigns that deliver measurable ROI. We focus on targeting the right audience, writing compelling ad copies, optimizing landing pages, and continuously improving cost per lead and conversions."
      },
      {
        name: "Social Media Marketing",
        description: "We help brands build a strong and consistent presence on platforms like Instagram, Facebook, LinkedIn, and more. Our social media strategies are designed to increase reach, engagement, and trust while supporting your overall marketing funnel."
      },
      {
        name: "Content Marketing",
        description: "Content is the backbone of digital growth. We create blogs, landing page content, ad creatives, and website copy that educates, builds authority, and drives action. Every piece of content is aligned with SEO and business intent."
      },
      {
        name: "Conversion Rate Optimization (CRO)",
        description: "Traffic is useless if it doesn't convert. We analyze user behavior, improve website structure, optimize CTAs, and refine landing pages to turn visitors into leads and customers."
      },
      {
        name: "Analytics & Performance Tracking",
        description: "We track what matters. From traffic sources and user behavior to leads and conversions, we provide clear insights so you always know how your digital marketing is performing."
      }
    ],
    whyChoose: [
      "Result-driven digital strategies",
      "Transparent reporting and communication",
      "Customized plans, not templates",
      "Experienced team focused on growth",
      "SEO, paid, and content under one roof"
    ],
    industries: ["E-commerce", "Education", "Healthcare", "Real estate", "Local businesses", "B2B services"],
    whatWeDo: [
      "Digital marketing strategy & planning",
      "Lead generation and funnel optimization",
      "Brand positioning and online visibility",
      "Conversion rate optimization",
      "Monthly reporting and performance analysis"
    ],
    whoFor: "Startups trying to build visibility or established brands looking to scale their digital presence.",
    results: [
      "Stronger brand presence",
      "Higher engagement and conversions",
      "Scalable growth backed by data",
      "Clear ROI tracking"
    ]
  },
  "seo": {
    title: "Search Engine Optimization (SEO)",
    icon: "🔍",
    description: "Rank higher on Google with ethical, long‑term SEO practices that deliver sustainable organic growth.",
    detailedDescription: "SEO is not about quick wins. It is about building long-term visibility, trust, and consistent organic growth. At Wings2Sky, we help brands rank higher on search engines by focusing on what really matters: search intent, technical strength, and content that converts. Our SEO strategies are designed to bring the right users to your website, not just more traffic.",
    whatIsSEO: {
      title: "What is Search Engine Optimization?",
      description: "Search Engine Optimization (SEO) is the process of improving your website's visibility on search engines like Google through organic (non-paid) results. When done correctly, SEO helps your website attract users who are actively searching for your products or services.",
      benefits: [
        "Sustainable traffic growth",
        "High-intent users",
        "Strong brand credibility",
        "Long-term ROI"
      ]
    },
    approach: {
      title: "Our SEO Approach at Wings2Sky",
      description: "We follow a structured, data-driven SEO framework that focuses on growth, not shortcuts.",
      steps: [
        "Website & SEO Audit - We start with a deep audit of your website to identify technical issues, content gaps, and ranking opportunities. This includes site structure, speed, indexing, and existing keyword performance.",
        "Keyword & Search Intent Research - We research keywords based on user intent, search volume, and competition. Our focus is on keywords that bring qualified traffic and real business results.",
        "On-Page SEO Optimization - We optimize your website pages for: Meta titles and descriptions, Headings and content structure, URL structure and internal linking, Image optimization and schema markup. Every page is optimized to align with both search engines and user experience.",
        "Technical SEO - A strong technical foundation is critical for rankings. We work on: Site speed optimization, Mobile responsiveness, Crawlability and indexing, Core Web Vitals improvements, Fixing errors and broken links.",
        "Content Strategy & Optimization - Content drives SEO success. We create and optimize SEO-friendly content that answers user queries, builds authority, and supports conversions. This includes: Blog strategy and topic planning, Service page optimization, Content updates for existing pages.",
        "Link Building & Authority Growth - We build high-quality backlinks from relevant and trusted sources to improve your website's authority and rankings, without using spammy tactics.",
        "Tracking, Reporting & Continuous Improvement - SEO is ongoing. We track rankings, traffic, and conversions, and refine strategies based on performance data and algorithm updates."
      ]
    },
    industries: [
      "Service-based businesses",
      "Local businesses",
      "Startups and SaaS brands",
      "E-commerce websites",
      "Corporate and enterprise websites"
    ],
    whyChoose: [
      "White-hat, sustainable SEO practices",
      "Clear strategy aligned with business goals",
      "Transparent reporting and insights",
      "Focus on conversions, not just rankings",
      "Experienced SEO specialists",
      "We do not chase vanity metrics. Every SEO decision is tied to growth and measurable outcomes."
    ],
    whatWeDo: [
      "In‑depth keyword research for Indian and global markets",
      "Technical SEO audits and fixes",
      "On‑page SEO optimization",
      "Content optimization and SEO copywriting",
      "Local SEO and Google Business Profile optimization",
      "Monthly SEO reports and tracking",
      "Link building and authority growth"
    ],
    whoFor: "E‑commerce, service‑based businesses, startups, local businesses, and international brands looking for sustainable organic growth.",
    results: [
      "Improved keyword rankings",
      "Consistent organic traffic growth",
      "Better user engagement",
      "Higher lead quality",
      "Stronger online authority"
    ],
    cta: {
      title: "Ready to Grow Organically?",
      description: "If you want SEO that delivers long-term results and real business growth, Wings2Sky is the right partner.",
      subDescription: "Get a free SEO audit today and discover how we can improve your rankings, traffic, and conversions organically.",
      buttonText: "Get a Free SEO Audit Today",
      buttonLink: "/contact"
    }
  },
  "paid-ads": {
    title: "Search Engine Marketing (Paid Ads)",
    icon: "🎯",
    description: "ROI‑focused paid advertising for immediate traffic and sales.",
    detailedDescription: "If you want instant visibility, qualified traffic, and measurable growth, Search Engine Marketing is where it starts. At Wings2Sky, we plan, launch, and optimize paid ad campaigns that put your brand in front of the right people at the exact moment they are searching for your product or service. This is not about spending more money. It is about spending smarter.",
    whatIsSEM: {
      title: "What is Search Engine Marketing?",
      description: "Search Engine Marketing (SEM) is the practice of running paid ads on search engines like Google to appear at the top of search results. These ads target users with clear intent, people who are already looking for solutions you offer.",
      benefits: [
        "Immediate traffic",
        "High-intent leads",
        "Clear ROI tracking",
        "Full control over budget and targeting"
      ]
    },
    approach: {
      title: "Our SEM Approach at Wings2Sky",
      description: "We follow a structured, performance-first process to ensure every rupee works hard for your business.",
      steps: [
        "Keyword & Intent Research - We identify high-converting keywords based on search intent, competition, and cost efficiency. Our focus is on keywords that bring leads, not just clicks.",
        "Campaign Strategy & Setup - From account structure to ad groups, match types, and bidding strategy, we build campaigns that are scalable and easy to optimize over time.",
        "High-Conversion Ad Copy - We write ad copies that are clear, relevant, and action-driven. Every headline and description is tested to improve click-through rate and quality score.",
        "Landing Page Alignment - Paid ads fail without the right landing page. We ensure message match between ads and landing pages to improve conversions and reduce cost per lead.",
        "Conversion Tracking & Analytics - We set up proper tracking for leads, calls, form submissions, and purchases so you always know what is working and what needs improvement.",
        "Continuous Optimization - SEM is not a one-time setup. We monitor performance daily, optimize bids, pause low-performing keywords, scale winners, and test new variations."
      ]
    },
    platforms: [
      "Google Search Ads",
      "Google Display Ads",
      "YouTube Ads",
      "Performance Max Campaigns",
      "Remarketing & Retargeting Ads"
    ],
    whyChoose: [
      "ROI-focused campaign planning",
      "Transparent reporting with real metrics",
      "Industry-relevant keyword targeting",
      "Data-driven optimizations, not guesswork",
      "Dedicated support and regular performance reviews",
      "We treat your ad budget like our own. Every decision is backed by data and aligned with your business goals."
    ],
    whatWeDo: [
      "Google Ads setup and management",
      "Search, display, and remarketing campaigns",
      "Landing page optimization",
      "Budget optimization and A/B testing",
      "Conversion tracking and reporting",
      "Daily performance monitoring and bid optimization"
    ],
    whoFor: "Startups looking for quick leads, local businesses targeting nearby customers, e-commerce brands aiming to scale sales, service-based businesses wanting qualified inquiries, and brands launching new products or offers.",
    results: [
      "Higher visibility on search results",
      "Increased qualified traffic",
      "Lower cost per lead over time",
      "Better conversion rates",
      "Clear and trackable ROI"
    ],
    cta: {
      title: "Let's Turn Clicks Into Customers",
      description: "If you are serious about growth and want paid ads that actually convert, Wings2Sky is ready to help.",
      subDescription: "Get a free SEM audit today and see how we can scale your results with smarter paid advertising.",
      buttonText: "Get a Free SEM Audit Today",
      buttonLink: "/contact"
    }
  },
  "website-development": {
    title: "Website Development Services",
    icon: "💻",
    description: "Fast, responsive, SEO‑friendly, and conversion‑focused websites that support business goals.",
    detailedDescription: "A website does much more than show up online. This one thing stands out as key in your digital world. Built right, it turns looks into leads. Wings2Sky shapes sites that work fast and push results. Growth gets a steady hand when every visit means something. Speed matters. So does how well a site handles traffic spikes - our builds stay steady under pressure. A phone screen fits less, yet everything still lines up right, because layout shifts get planned out ahead of time. When visitors arrive, they're met with clean paths forward, not cluttered detours. Security runs deep, not just layered on top like frosting. Some want online shops that track inventory without hiccups. Others need digital spaces shaped exactly to their workflow. Each version behaves predictably, no matter where it loads.",
    features: [
      "Speed and Performance Optimization - Fast loading websites that improve user experience and search rankings",
      "Mobile First Responsive Design - Running smooth on phones, yet just as solid with tablets or computers",
      "SEO Friendly Structure - Clean architecture that supports better visibility on search engines",
      "Scalable Development - As your company expands, it keeps up effortlessly - no constant overhauls needed. Scaling happens naturally, leaving old versions behind without disruption.",
      "Secure and Reliable Infrastructure - Protection against vulnerabilities with modern security practices",
      "Conversion Focused Design - Pages built so people who stop by become interested. Movement through each section guides toward signing up or buying."
    ],
    approach: {
      title: "Website Development Steps",
      description: "Starting off, our method stays organized so things remain clear. Efficiency shows up naturally because of how steps connect one after another.",
      steps: [
        "Discovery & Planning - Because we listen first, your goals shape our next steps. What matters to you guides how we move forward together. Our way of working fits what you need, not the other way around.",
        "UI/UX Design - Start with how people actually interact. Our screens feel natural because they mirror your brand's voice. Each tap flows into the next, pulling visitors deeper without confusion. Clarity comes first, no clutter, just purpose.",
        "Development & Integration - From scratch, we shape your site with up to date tools, fitting it to what you actually require whether that means a flexible CMS, a tailored setup, or something built ground up just for you.",
        "Testing & Optimization - From phones to tablets, testing happens everywhere. Smooth operation matters most. Performance gets sharpened along the way. Nothing runs unless it first passes every check.",
        "Launch and Ongoing Support - Your website goes live with our help, while we stick around to handle changes, growth, or tweaks over time."
      ]
    },
    coreServices: [
      "Business Website Development - Professional websites tailored for service based businesses and brands",
      "E-Commerce Website Development - Running an online shop that grows easily, payments stay safe. Smooth paths for visitors to browse, thanks to smart design choices. Each step feels natural, never forced.",
      "CMS Development with WordPress and Other Platforms - Easy to manage websites with flexibility and control",
      "Custom Web Development - Advanced solutions built for unique business requirements",
      "Progressive Web Apps (PWA) - App like experiences with fast performance and offline capabilities"
    ],
    whyChoose: [
      "Out of design, tech, and planning comes sites that actually work",
      "Not pretty pictures - more clicks, more signups, real returns",
      "A fresh eye meets every task, so your site fits the way you work while growing steadily over time"
    ],
    whatWeDo: [
      "Business and corporate websites",
      "E‑commerce websites",
      "Mobile‑friendly UI/UX design",
      "Website speed optimization",
      "SEO‑ready structure and clean code",
      "Progressive Web Apps (PWA)",
      "Custom web development"
    ],
    technologyFocus: "WordPress, custom development, and scalable frameworks.",
    results: [
      "Professional brand presence",
      "Better user experience",
      "Higher engagement and conversions",
      "Faster load times",
      "Improved search rankings"
    ],
    cta: {
      title: "Build a website that works for your business",
      description: "Ready to build something that works? Wings2Sky knows tech, sure, yet what matters more is how it lifts your business. They listen first, then deliver clean websites rooted in real goals.",
      subDescription: "Reach out now if you're ready to talk about your project, because creating a website that actually works begins with a conversation.",
      buttonText: "Start Your Project Today",
      buttonLink: "/contact"
    }
  },
  "social-media": {
    title: "Social Media Marketing",
    icon: "📱",
    description: "Build trust, engage audiences, and convert followers into customers.",
    detailedDescription: "Attention leads to engagement which can lead to conversions. Out there on social platforms, people hang out, find new products, spend money. Wings2Sky steps in guiding companies to shape their online activity into something steady, something that brings attention, sparks interaction, shows clear outcomes. Out here, plans start before the first post even exists. Because fitting your brand's rhythm matters, so does speaking to the right people, hitting targets that count. Each move ties back to something actual, nothing floats without purpose.",
    features: [
      "Strategic Content Planning - Plans that match what your company aims to do, shaped by how people respond. Timing shifts when habits shift. Goals guide each post. What works shows up again, differently.",
      "Platform Specific Optimization - On Instagram, plans fit just right. Through Facebook, steps match the scene. For LinkedIn, moves line up clean. Each platform gets its own path forward.",
      "Audience Focus and Expansion - People who matter will show up when you speak clearly. Those paying attention tend to stay. Interest grows where relevance exists. Visitors become participants without pushing.",
      "Consistent Brand Communication - Maintain a clear, professional, and recognizable brand voice.",
      "Track Performance and Gain Insights - Choices shaped by how people interact, how far messages spread, then what turns into results.",
      "Lead Generation and Conversion Focus - Questions matter more than applause. Curiosity drives results instead of shallow nods. Interest builds momentum where approval falls short."
    ],
    approach: {
      title: "How We Handle Social Media Marketing",
      description: "Performance stays steady because we stick to clear steps that work. Each move fits what comes before it, keeping things running without surprises.",
      steps: [
        "Research & Strategy - Starting with your market, we dig into rivals and customers to shape a path forward. Then insights emerge, guiding steps that fit where you stand.",
        "Plan and make content - Start with a blank page, shaping visuals one step at a time. Words come next, built slowly to match the image. Each post finds its place through careful timing and thought.",
        "Posting & Management - Each day unfolds with fresh posts appearing online. Through steady interaction, connections grow stronger over time. Managing your profile stays smooth because attention never wavers.",
        "Paid Campaigns If Needed - Focused advertising helps us connect with more people, spark interest, then turn that into results. A wider audience comes through deliberate placement, followed by steady follow up.",
        "Monitoring & Optimization - Better outcomes come when we keep checking how things go while adjusting our approach along the way."
      ]
    },
    coreServices: [
      "Social Media Account Management - From start to finish, your profiles get steady updates along with active interaction",
      "Content Creation and Creative Design - High quality visuals and copy that align with your brand identity",
      "Social Media Advertising - Performance driven campaigns for lead generation and sales",
      "Brand Building and Positioning - Strengthening your brand presence across platforms",
      "Influencer Collaboration Support - Connecting with the right creators to expand reach and credibility",
      "Analytics & Reporting - What's clicking becomes obvious. Where things fall short shows up fast. Gaps stand out once patterns emerge."
    ],
    whyChoose: [
      "A different path begins by shaping systems instead of chasing short bursts",
      "Long wins come from steady identity work, sharp audience connections, one step at a time showing real progress",
      "Knowing the way content moves alongside ads and what people do online shapes every move. This kind of insight guides choices that tie directly to what your company needs."
    ],
    whatWeDo: [
      "Social media strategy and planning",
      "Content calendars and creatives",
      "Instagram, Facebook, LinkedIn management",
      "Paid social media campaigns",
      "Community engagement and growth",
      "Influencer collaboration support",
      "Analytics and reporting"
    ],
    whoFor: "Brands looking to build awareness, credibility, and long‑term engagement that actually boosts their business.",
    results: [
      "Consistent brand voice",
      "Increased reach and engagement",
      "Better audience trust",
      "Lead generation and conversion",
      "Stronger brand presence"
    ],
    cta: {
      title: "Grow Your Brand on Social Media",
      description: "Should you aim for a solid social media footprint that actually boosts your business, Wings2Sky can step in. Not just visibility but results guide their approach.",
      subDescription: "Start now by reaching out so we can build a plan for your brand on social platforms. This path opens doors to more attention, interaction, stronger presence.",
      buttonText: "Start Building Your Social Presence",
      buttonLink: "/contact"
    }
  },
  "ecommerce-photoshoot": {
    title: "E‑Commerce Photoshoot Services",
    icon: "📸",
    description: "High‑quality product images that drive conversions and clicks.",
    detailedDescription: "Picture quality shapes choices online. With us, crisp visuals bring your brand forward gaining confidence from buyers while lifting performance on sites and stores worldwide. Picture perfect shots, everyday scenes each one built to highlight what you sell. Not just seen, but noticed more clearly. Every image works harder so your items catch eyes without trying too hard.",
    features: [
      "High Resolution Product Images - Pictures come crisp, tidy, ready for sale. Crisp visuals fit Amazon without hiccups. Flipkart displays them smoothly too. Your site benefits just the same. Sharpness stays intact across platforms.",
      "Conversion Focused Styling - Images designed to highlight key product features and benefits",
      "Platform Specific Requirements - Shoots aligned with marketplace guidelines and image standards",
      "Consistent Brand Aesthetic - Maintain a uniform look across your product catalog",
      "Fast Turnaround Time - Efficient execution without compromising quality",
      "Image Optimization for Performance - Picking the right size helps pages load quicker. Images that fit well make things smoother to use. Formats matter just as much as dimensions do."
    ],
    approach: {
      title: "Our Photoshoot Process",
      description: "Starting each task the same way helps keep results steady. One step follows another without skipping ahead because mistakes slow everything down.",
      steps: [
        "Requirement Understanding - Your product makes sense to us, also the group it serves. The market space feels familiar too, since we've seen similar paths before. People who might buy? We get them just as clearly.",
        "Shoot Planning - Start with what you want to achieve. Shape the look around those aims instead of trends. Build a sequence of shots that follow naturally from each idea.",
        "Product Photography Execution - A well lit scene shapes how eyes move across the frame. Lighting shifts mood without warning. Angles tilt perception off balance. Setup choices anchor the whole image quietly.",
        "Editing & Retouching - Start with clearing the backdrop. Then shift into adjusting tones. Wrap up by fine tuning every detail.",
        "Delivery & Support - Images come fully prepared, matching every platform's format needs. Delivered straight away, tailored through exact specs. Each file fits where it goes without extra steps."
      ]
    },
    coreServices: [
      "Catalog Photoshoot (White Background) - Clean, compliant images ideal for marketplaces",
      "Lifestyle Product Photography - Real world usage visuals to improve engagement",
      "E-Commerce Listing Images - Pictures that explain stuff pop up first. Some bits grab your attention right away instead of waiting around.",
      "Model Based Shoots (If Required) - Showcase products in real life scenarios",
      "Bulk Product Photoshoots - Handling big collections gets easier with systems that grow as needed",
      "Image Editing and Enhancement - Pictures get fixed by experts so everything looks just right. One thing matches the next, thanks to careful adjustments."
    ],
    whyChoose: [
      "We get what it takes to balance art and results online",
      "Not only do our photo sessions look good, they're built to boost how many people click and buy",
      "From one marketplace to another, through different kinds of products, our work keeps your images aligned with what each site demands and what shoppers look for. Starting fresh every time, yet always hitting the right notes: clarity, consistency, fit."
    ],
    whatWeDo: [
      "Professional product photography",
      "Image editing, retouching, and color correction",
      "Marketplace‑compliant images",
      "Lifestyle and white‑background shots",
      "Bulk product photoshoots",
      "Model based shoots"
    ],
    platforms: "Amazon, Flipkart, Meesho, Shopify, and website product listings.",
    results: [
      "Higher click‑through rates",
      "Improved product presentation",
      "Better conversion performance",
      "Increased customer trust",
      "Consistent brand aesthetic"
    ],
    cta: {
      title: "Make your products look ready to sell",
      description: "Looking for standout visuals that pull interest? Wings2Sky steps in without delay. Not just clear pictures - these are sharp, focused shots built to move product fast.",
      subDescription: "Reach out now if you're ready to arrange an e-commerce photo session that shows off your products just right.",
      buttonText: "Book Your Photoshoot Today",
      buttonLink: "/contact"
    }
  },
  "ecommerce-management": {
    title: "E‑Commerce Account Management",
    icon: "🛒",
    description: "Complete marketplace account management for scalable growth and steady sales.",
    detailedDescription: "Something happens when brands work with Wings2Sky - their quiet marketplace accounts start growing with clear direction. A shift occurs, not through luck, but by building systems that allow steady expansion. Instead of scattered efforts, there is now a rhythm, an order guiding each step forward. Growth becomes predictable because structure replaces guesswork. What once barely made noise now holds space with purpose. When sales jump around, advertising seems too costly, yet products stay buried online, hard work isn't the issue. What's missing lives in planning, how things get done, fine-tuning along the way.",
    barriers: [
      "Low product visibility on marketplaces",
      "High ad spend with poor ROI",
      "Clunky product pages drag down results. Meanwhile, fewer visitors actually buy anything",
      "Catalog errors and suppressed listings",
      "Lack of data-driven decision making"
    ],
    howWeWork: [
      "Revenue-Focused Optimization - What you do connects straight to better sales, never just numbers that look good. Success shows up in real results, not empty stats.",
      "Marketplace Expertise - Platform Strategies That Work For Amazon, Flipkart, Myntra, Nykaa and many more.",
      "Data-Driven Decisions - Precision rules here. Each tweak draws strength from real results.",
      "Full-Funnel Approach - One step leads to another, starting with being seen. After that comes interest, marked by visits to the page. Those visits turn into sales when choices are made."
    ],
    services: [
      "Track accounts and check financial status - Your whole seller account gets managed by us so everything stays compliant, steady, running smooth. Not just oversight - active control keeps things on track without hiccups.",
      "Optimize product listings for search engines - Strong titles packed with useful words help pages show up higher. These descriptions also push people to buy more often.",
      "Managing Ads and PPC - Smart ads built to lower costs while boosting returns. A sharp focus on performance keeps spending lean. Each move ties back to real results - no wasted effort.",
      "Catalog and Inventory Management - Missing out on sales? A clean catalog setup stops mistakes. Stock levels stay sharp when planned right. Mistakes fade when details are clear.",
      "Tracking Performance and Planning Growth - Keeping things running smoothly helps grow income without burning out resources. Watching performance closely leads to smarter adjustments over time."
    ],
    approach: {
      title: "Our Way of Growing",
      description: "We follow a systematic approach to ensure consistent growth and measurable results.",
      steps: [
        "Account Audit and Gap Analysis - Right now, something's holding back your progress - we find it. What keeps you stuck? That's what we uncover first. Growth hits a wall when unseen blocks stay hidden; spotting them changes everything.",
        "Plan and Path Forward - Built step by step, matching what you aim to do. Moving forward only when each piece fits right.",
        "Execution & Optimization - Items shown, promotions added, pages updated, plus sign-ins made better.",
        "Data Monitoring and Scaling - Sticking close to what gets results, while tossing out the rest. What stays proves its worth every time around."
      ]
    },
    whyChoose: [
      "Experience across multiple ecommerce platforms",
      "Focus on profitability, not just sales volume",
      "Transparent reporting and communication",
      "Your business shapes the approach, because one-size solutions miss the mark",
      "Our role fits alongside your progress, more than simply delivering tasks. While we handle services, think of us moving at your pace, built into your direction."
    ],
    whatWeDo: [
      "Product listing optimization",
      "Account health monitoring",
      "Ads and promotions management",
      "Inventory and performance tracking",
      "Sales growth strategy",
      "PPC campaign management",
      "Catalog management"
    ],
    platforms: "Amazon, Flipkart, Meesho, Myntra, Nykaa, and other marketplaces.",
    results: [
      "Increased product visibility and rankings",
      "Higher conversion rates on listings",
      "Reduced ad spend wastage",
      "Improved account health and stability",
      "Steady income gains that grow naturally over time"
    ],
    faqs: [
      {
        question: "How long does it take to see results?",
        answer: "Some changes show up in a couple of weeks, then get more noticeable after eight weeks or so. Progress builds slowly but keeps going through the third month."
      },
      {
        question: "Do you work with fresh sellers?",
        answer: "For sure, new labels and older ones too get support when launching or growing."
      },
      {
        question: "What platforms work with your service?",
        answer: "Big online stores like Amazon, then Flipkart, followed by Myntra, along with Nykaa - they're all part of the same crowded shopping scene."
      },
      {
        question: "Do you take care of advertising too?",
        answer: "True, full PPC setups are handled by us alongside natural search boosts."
      }
    ],
    cta: {
      title: "Free 15 Minute Ecommerce Audit",
      description: "Here's what you need to know about: What's limiting your sales, Money slips away here, What can be fixed immediately. Nothing extra. Only clear steps that work.",
      subDescription: "Scaling an ecommerce business? Should growth be on your mind for that online store, a smart plan could make all the difference.",
      buttonText: "Book Your Free Audit",
      buttonLink: "/contact"
    }
  }
}

// Generate static params for better performance
export async function generateStaticParams() {
  return Object.keys(serviceData).map((id) => ({
    serviceId: id,
  }))
}

// Add metadata for better SEO - FIXED: params is now a Promise
export async function generateMetadata({ params }: { params: Promise<{ serviceId: string }> }) {
  const { serviceId } = await params
  const service = serviceData[serviceId]
  
  if (!service) {
    return {
      title: 'Service Not Found | Wings2Sky',
      description: 'The requested service page could not be found.'
    }
  }
  
  return {
    title: `${service.title} | Wings2Sky Digital Marketing Services`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
  const { serviceId } = await params
  const service = serviceData[serviceId]

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navigation />    
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/services" 
            className="inline-flex items-center text-primary hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>

          {/* Service Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{service.icon}</span>
              <div>
                <h1 className="text-4xl font-bold text-foreground">{service.title}</h1>
                <p className="text-xl text-muted-foreground mt-2">{service.description}</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-3xl">
              {service.detailedDescription}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Approach section */}
              {service.approach && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">{service.approach.title}</h2>
                  {service.approach.description && (
                    <p className="text-muted-foreground mb-4">{service.approach.description}</p>
                  )}
                  {service.approach.principles && (
                    <ul className="space-y-2">
                      {service.approach.principles.map((principle: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-foreground">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.approach.steps && (
                    <ol className="space-y-3 list-decimal list-inside">
                      {service.approach.steps.map((step: string, index: number) => (
                        <li key={index} className="text-foreground">{step}</li>
                      ))}
                    </ol>
                  )}
                </div>
              )}

              {/* What Is section for seo and paid-ads */}
              {service.whatIsSEO && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">{service.whatIsSEO.title}</h2>
                  <p className="text-muted-foreground mb-4">{service.whatIsSEO.description}</p>
                  <ul className="space-y-2">
                    {service.whatIsSEO.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.whatIsSEM && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">{service.whatIsSEM.title}</h2>
                  <p className="text-muted-foreground mb-4">{service.whatIsSEM.description}</p>
                  <ul className="space-y-2">
                    {service.whatIsSEM.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sub-services for digital marketing */}
              {service.subServices && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Digital Marketing Services</h2>
                  <div className="space-y-4">
                    {service.subServices.map((subService: any, index: number) => (
                      <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{subService.name}</h3>
                        <p className="text-muted-foreground">{subService.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features section */}
              {service.features && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                  <div className="space-y-3">
                    {service.features.map((feature: string, index: number) => {
                      const [title, ...descParts] = feature.split(" - ");
                      const description = descParts.join(" - ");
                      return (
                        <div key={index} className="border-b border-border last:border-0 pb-3 last:pb-0">
                          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                          {description && <p className="text-muted-foreground mt-1">{description}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Core Services section */}
              {service.coreServices && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Core Services</h2>
                  <div className="space-y-3">
                    {service.coreServices.map((coreService: string, index: number) => {
                      const [title, ...descParts] = coreService.split(" - ");
                      const description = descParts.join(" - ");
                      return (
                        <div key={index} className="border-b border-border last:border-0 pb-3 last:pb-0">
                          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                          {description && <p className="text-muted-foreground mt-1">{description}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Platforms section */}
              {service.platforms && Array.isArray(service.platforms) && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Platforms We Work With</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.platforms.map((platform: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground">{platform}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Choose section */}
              {service.whyChoose && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Wings2Sky?</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.whyChoose.map((reason: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-foreground">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Industries section */}
              {service.industries && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Industries We Work With</h2>
                  <p className="text-muted-foreground mb-3">We've helped businesses across multiple industries, including:</p>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {service.industries.map((industry: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground">{industry}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Barriers section */}
              {service.barriers && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Barriers to Ecommerce Growth?</h2>
                  <p className="text-muted-foreground mb-4">Most sellers struggle with:</p>
                  <ul className="space-y-2">
                    {service.barriers.map((barrier: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-destructive mt-1">⚠</span>
                        <span className="text-foreground">{barrier}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* How We Work section */}
              {service.howWeWork && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">How We Work Unlike Others</h2>
                  <div className="space-y-3">
                    {service.howWeWork.map((item: string, index: number) => {
                      const [title, ...descParts] = item.split(" - ");
                      const description = descParts.join(" - ");
                      return (
                        <div key={index} className="border-b border-border last:border-0 pb-3 last:pb-0">
                          <h3 className="text-lg font-semibold text-foreground">✔ {title}</h3>
                          {description && <p className="text-muted-foreground mt-1">{description}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Management Services section */}
              {service.services && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Ecommerce Management Services</h2>
                  <div className="space-y-3">
                    {service.services.map((item: string, index: number) => {
                      const [title, ...descParts] = item.split(" - ");
                      const description = descParts.join(" - ");
                      return (
                        <div key={index} className="border-b border-border last:border-0 pb-3 last:pb-0">
                          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                          {description && <p className="text-muted-foreground mt-1">{description}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* FAQs section */}
              {service.faqs && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq: any, index: number) => (
                      <div key={index} className="border-b border-border last:border-0 pb-3 last:pb-0">
                        <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                        <p className="text-muted-foreground mt-1">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What We Do section */}
              {service.whatWeDo && !service.subServices && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">What we do</h2>
                  <ul className="space-y-3">
                    {service.whatWeDo.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Who For / Technology / Platforms */}
              <div className="grid md:grid-cols-2 gap-6">
                {service.whoFor && (
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Who this is for</h3>
                    <p className="text-muted-foreground">{service.whoFor}</p>
                  </div>
                )}
                
                {service.technologyFocus && (
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Technology focus</h3>
                    <p className="text-muted-foreground">{service.technologyFocus}</p>
                  </div>
                )}
                
                {service.platforms && typeof service.platforms === 'string' && (
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Platforms we manage</h3>
                    <p className="text-muted-foreground">{service.platforms}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Results & CTA */}
            <div className="space-y-6">
              {/* Results */}
              {service.results && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Results you can expect</h3>
                  <ul className="space-y-3">
                    {service.results.map((result: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Service Specific CTA */}
              {service.cta && (
                <div className="bg-primary text-primary-foreground rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.cta.title}</h3>
                  <p className="mb-2 opacity-90">{service.cta.description}</p>
                  {service.cta.subDescription && (
                    <p className="text-sm opacity-80 mb-4">{service.cta.subDescription}</p>
                  )}
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    asChild
                  >
                    <Link href={service.cta.buttonLink}>
                      {service.cta.buttonText}
                    </Link>
                  </Button>
                  <p className="text-xs opacity-75 mt-3 text-center">
                    No commitment required
                  </p>
                </div>
              )}

              {/* Default CTA if no service-specific CTA */}
              {!service.cta && (
                <div className="bg-primary text-primary-foreground rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Get Started</h3>
                  <p className="mb-6 opacity-90">
                    Ready to transform your business with {service.title.toLowerCase()}?
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    asChild
                  >
                    <Link href="/contact">
                      Book Free Consultation
                    </Link>
                  </Button>
                  <p className="text-sm opacity-80 mt-4 text-center">
                    No commitment required
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold text-foreground mb-6">Explore Other Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(serviceData)
                .filter(([id]) => id !== serviceId)
                .slice(0, 3)
                .map(([id, serviceItem]: [string, any]) => (
                  <Link 
                    key={id}
                    href={`/services/${id}`}
                    className="block p-4 border border-border rounded-lg hover:border-primary transition-colors hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{serviceItem.icon}</span>
                      <h3 className="font-semibold text-foreground">{serviceItem.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{serviceItem.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}