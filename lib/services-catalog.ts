import { serviceCategories, type ServiceCategory } from "./site-menu"

export interface ServiceContent {
  name: string
  /** One line used on cards and as the meta description */
  summary: string
  intro: string
  includes: { title: string; description: string }[]
  outcomes: string[]
  faqs: { question: string; answer: string }[]
}

export interface CategoryContent {
  description: string
  process: { title: string; description: string }[]
}

export const categoryContent: Record<string, CategoryContent> = {
  seo: {
    description:
      "Organic visibility that compounds over time. We cover the full search picture: classic Google rankings, local results, and the AI-generated answers more buyers now rely on.",
    process: [
      { title: "Audit and baseline", description: "We review your site, current rankings and competitors to find what is holding you back." },
      { title: "Strategy and keyword map", description: "Every priority page gets a target topic, a search intent and a clear job to do." },
      { title: "Implementation", description: "Technical fixes, on-page improvements, content and authority building, in order of impact." },
      { title: "Reporting and iteration", description: "Monthly reports on rankings, traffic and leads, with the next actions agreed with you." },
    ],
  },
  "paid-media": {
    description:
      "Paid campaigns planned around your margins, not vanity metrics. We build, track and optimise ads across search, social and video so every rupee is accountable.",
    process: [
      { title: "Goals and tracking", description: "We agree on targets and set up conversion tracking so results can be measured properly." },
      { title: "Campaign build", description: "Audiences, keywords, creatives and landing pages are prepared before any budget is spent." },
      { title: "Launch and optimise", description: "We test, adjust bids and budgets, and cut what does not perform." },
      { title: "Report and scale", description: "Clear reporting on spend and returns, then more budget behind what works." },
    ],
  },
  "social-media": {
    description:
      "A consistent, recognisable presence on the platforms your customers use every day, built on a clear strategy rather than random posting.",
    process: [
      { title: "Brand and audience discovery", description: "We learn your voice, your customers and what your competitors are doing." },
      { title: "Content plan", description: "A monthly calendar of themes, formats and campaigns you approve in advance." },
      { title: "Create, publish, engage", description: "We produce the content, post it on schedule and respond to your community." },
      { title: "Measure and refine", description: "We track reach, engagement and enquiries, and adjust the plan each month." },
    ],
  },
  "content-web": {
    description:
      "Fast, responsive and search-friendly websites and landing pages, designed to turn visitors into enquiries and orders.",
    process: [
      { title: "Discovery and scope", description: "We define goals, pages, features and integrations before design starts." },
      { title: "Design", description: "Wireframes and visual designs for your review, on mobile and desktop." },
      { title: "Build and test", description: "Clean development, speed optimisation and testing across devices and browsers." },
      { title: "Launch and support", description: "We go live, set up analytics and stay available for updates and fixes." },
    ],
  },
  "lifecycle-reputation": {
    description:
      "Winning a customer is the expensive part. We help you keep them engaged through email and WhatsApp, and make sure what people find about your brand online builds trust.",
    process: [
      { title: "Review the journey", description: "We map how customers hear from you today and where they drop off." },
      { title: "Segment and plan", description: "Audiences, messages and timing are planned for each stage of the customer lifecycle." },
      { title: "Build and automate", description: "Templates, flows and integrations are set up and tested before going live." },
      { title: "Monitor and improve", description: "We track opens, replies, repeat orders and sentiment, and keep refining." },
    ],
  },
  "ai-solutions": {
    description:
      "Practical AI that saves time and answers customers faster. We start from the business problem, keep people in the loop, and only automate what is worth automating.",
    process: [
      { title: "Find the use cases", description: "We look at your workflows and pick the tasks where AI gives a real return." },
      { title: "Design and prototype", description: "A working prototype on your own data so you can judge it before committing." },
      { title: "Integrate and train", description: "We connect it to your tools and train your team to use and supervise it." },
      { title: "Monitor and improve", description: "Quality checks, human review and regular tuning after launch." },
    ],
  },
}

export const serviceContent: Record<string, ServiceContent> = {
  // ---------------------------------------------------------------- SEO
  aeo: {
    name: "Answer Engine Optimization (AEO)",
    summary: "Get your brand quoted in the direct answers people see on Google, voice assistants and AI search.",
    intro:
      "Search is moving from a list of links to a single direct answer. Answer Engine Optimization structures your content so featured snippets, People Also Ask boxes, voice assistants and AI overviews can pick it up as the answer, with your brand named as the source.",
    includes: [
      { title: "Question research", description: "We map the real questions your customers ask at each stage of buying." },
      { title: "Answer-first content", description: "Pages are rewritten to give a clear answer up front, with depth underneath." },
      { title: "Structured data", description: "FAQ, HowTo, Product and Organization schema so machines can read your content." },
      { title: "Entity and brand signals", description: "Consistent business information across your site and trusted third-party sources." },
      { title: "Snippet tracking", description: "We monitor which questions you own and which are worth going after next." },
    ],
    outcomes: [
      "More visibility in featured snippets and People Also Ask",
      "Content that voice assistants and AI overviews can cite",
      "Visitors who arrive better informed and closer to a decision",
    ],
    faqs: [
      {
        question: "How is AEO different from SEO?",
        answer:
          "SEO aims to rank your page. AEO aims to have your content chosen as the answer itself. They share the same foundations, so we usually run them together.",
      },
      {
        question: "Do I need new content for AEO?",
        answer:
          "Often your existing pages can be restructured to answer questions more directly. We add new content only where there is a clear gap.",
      },
    ],
  },
  geo: {
    name: "Generative Engine Optimization (GEO)",
    summary: "Make your brand part of the answers generated by ChatGPT, Gemini, Perplexity and other AI assistants.",
    intro:
      "Buyers increasingly ask AI assistants for recommendations before they ever open a search results page. Generative Engine Optimization improves the signals these systems rely on, so your brand is more likely to be mentioned, described accurately and linked.",
    includes: [
      { title: "AI visibility audit", description: "We check how AI assistants currently describe your brand and your competitors." },
      { title: "Citation-worthy content", description: "Clear definitions, original data and expert explanations that models prefer to quote." },
      { title: "Brand mentions and digital PR", description: "Earning coverage on the sources AI systems draw from most." },
      { title: "Technical accessibility", description: "Making sure your content is crawlable, structured and easy for AI crawlers to parse." },
      { title: "Prompt monitoring", description: "We track a fixed set of buyer prompts over time to measure progress." },
    ],
    outcomes: [
      "A clearer picture of how AI assistants present your brand",
      "More accurate and more frequent brand mentions in AI answers",
      "Content that works for both search engines and AI systems",
    ],
    faqs: [
      {
        question: "Can you guarantee my brand appears in ChatGPT answers?",
        answer:
          "No, and nobody honestly can. AI answers vary by prompt and change over time. What we can do is strengthen the content, structure and brand signals that make a mention more likely.",
      },
      {
        question: "Is GEO replacing SEO?",
        answer:
          "No. AI systems still lean heavily on well-ranked, well-structured web content, so strong SEO remains the base that GEO builds on.",
      },
    ],
  },
  "technical-seo": {
    name: "Technical SEO",
    summary: "Fix the speed, crawling and indexing problems that stop good pages from ranking.",
    intro:
      "Great content cannot rank if search engines struggle to crawl, render or index it. Our technical SEO work finds and fixes the issues under the surface, so the rest of your SEO effort is not wasted.",
    includes: [
      { title: "Crawl and index review", description: "We find pages that are blocked, duplicated, orphaned or missing from the index." },
      { title: "Site speed and Core Web Vitals", description: "Practical fixes for slow loading, layout shifts and poor responsiveness." },
      { title: "Mobile experience", description: "Checks that every template works properly on phones, where most visits happen." },
      { title: "Site architecture", description: "Cleaner URL structure, internal linking, sitemaps and redirects." },
      { title: "Structured data", description: "Schema markup added and validated so you are eligible for rich results." },
    ],
    outcomes: [
      "More of your pages crawled and indexed correctly",
      "Faster pages and a better experience on mobile",
      "A solid foundation for content and link building",
    ],
    faqs: [
      {
        question: "Do you make the fixes or only report them?",
        answer:
          "Both are possible. We can implement the fixes directly on your site, or hand your developers a prioritised list with clear instructions.",
      },
      {
        question: "Will technical SEO alone improve my rankings?",
        answer:
          "It removes the barriers. Sites with serious technical problems often improve quickly once they are fixed, but lasting growth also needs good content and authority.",
      },
    ],
  },
  "on-page-seo": {
    name: "On-Page SEO",
    summary: "Optimise every important page so search engines and visitors understand it instantly.",
    intro:
      "On-page SEO is the work done on the page itself: the title, headings, copy, images and internal links. We align each key page with what people are actually searching for, without making it read like it was written for a robot.",
    includes: [
      { title: "Titles and meta descriptions", description: "Written to earn the click as well as the ranking." },
      { title: "Heading and content structure", description: "A clear hierarchy that covers the topic and answers the searcher's intent." },
      { title: "Internal linking", description: "Links that guide visitors and pass authority to your priority pages." },
      { title: "Image optimisation", description: "Compressed images with descriptive file names and alt text." },
      { title: "Page-level schema", description: "Markup for products, services, FAQs and articles where it applies." },
    ],
    outcomes: [
      "Pages that match what your customers search for",
      "Higher click-through rates from search results",
      "Content that is easier to read and act on",
    ],
    faqs: [
      {
        question: "How many pages do you optimise?",
        answer:
          "We start with the pages that matter most to your revenue, usually the home page, key service or category pages and top products, then work outwards.",
      },
      {
        question: "Will you change my website's design?",
        answer:
          "Not usually. On-page SEO mostly changes text, structure and metadata. If a layout is hurting performance, we will recommend a change and explain why.",
      },
    ],
  },
  "local-seo": {
    name: "Local SEO",
    summary: "Show up in Google Maps and local results when nearby customers search for what you offer.",
    intro:
      "For clinics, stores, institutes and service businesses, the most valuable searches are local ones. We help you appear in Google Maps and the local pack for your area, with accurate information and reviews that give people a reason to choose you.",
    includes: [
      { title: "Google Business Profile", description: "Full setup and ongoing optimisation of categories, services, photos and posts." },
      { title: "Local citations", description: "Consistent name, address and phone number across directories and listings." },
      { title: "Location pages", description: "Dedicated pages for each city or area you serve." },
      { title: "Review strategy", description: "A simple process for earning more genuine reviews and responding to them." },
      { title: "Local rank tracking", description: "We monitor your visibility area by area, not just as a national average." },
    ],
    outcomes: [
      "Better visibility in Google Maps and the local pack",
      "More calls, direction requests and walk-ins",
      "Accurate business information everywhere customers look",
    ],
    faqs: [
      {
        question: "I serve customers at their location. Can local SEO still work?",
        answer:
          "Yes. Service-area businesses can rank locally without showing a street address. We set up your profile and pages around the areas you cover.",
      },
      {
        question: "Can you manage several branches?",
        answer:
          "Yes. Each branch gets its own profile and location page, managed under one consistent strategy.",
      },
    ],
  },
  "keyword-research": {
    name: "Keyword Research",
    summary: "Find the search terms your customers actually use, and the ones you can realistically win.",
    intro:
      "Every strong SEO and ads campaign starts with knowing what people search for. We research the terms your buyers use, how often they search and how hard each one is to win, then turn that into a plan your team can follow.",
    includes: [
      { title: "Seed and competitor analysis", description: "We study your offering and the keywords your competitors already rank for." },
      { title: "Search intent mapping", description: "Each keyword is labelled by what the searcher wants: to learn, compare or buy." },
      { title: "Opportunity scoring", description: "Volume, difficulty and business value combined into a clear priority." },
      { title: "Keyword-to-page map", description: "Every target keyword is assigned to one page, so pages do not compete with each other." },
      { title: "Content gap list", description: "Topics you should cover but currently do not." },
    ],
    outcomes: [
      "A prioritised keyword list tied to real business value",
      "A clear plan for which page targets what",
      "Content ideas backed by search demand",
    ],
    faqs: [
      {
        question: "Do you research for India only or other markets too?",
        answer:
          "Both. Search behaviour differs by country and language, so we research each target market separately.",
      },
      {
        question: "Can I use this research for Google Ads as well?",
        answer:
          "Yes. The same research feeds your paid search campaigns, and we mark which terms suit ads, organic or both.",
      },
    ],
  },
  "link-building": {
    name: "Link Building",
    summary: "Earn quality backlinks from relevant, trusted websites to grow your authority.",
    intro:
      "Links from other reputable websites remain one of the strongest signals of trust for search engines. We build your authority through relevant, earned links and avoid the shortcuts that put sites at risk.",
    includes: [
      { title: "Backlink audit", description: "A review of your existing links and how you compare with competitors." },
      { title: "Link-worthy content", description: "Guides, data and resources that other sites have a reason to reference." },
      { title: "Outreach", description: "Personal outreach to relevant publications, blogs and industry sites." },
      { title: "Digital PR", description: "Stories and expert comment that earn coverage and mentions." },
      { title: "Link monitoring", description: "Tracking of new and lost links, with every placement reported to you." },
    ],
    outcomes: [
      "Stronger domain authority over time",
      "Better rankings for competitive keywords",
      "Referral traffic from relevant websites",
    ],
    faqs: [
      {
        question: "Do you buy links or use link networks?",
        answer:
          "No. Paid link schemes and private networks violate search engine guidelines and can lead to penalties. We focus on links earned through content and outreach.",
      },
      {
        question: "How many links will I get each month?",
        answer:
          "It depends on your industry and the content we have to work with. We prioritise relevance and quality over raw numbers and report every link we earn.",
      },
    ],
  },
  "seo-audit": {
    name: "SEO Audit",
    summary: "A complete health check of your website with a prioritised plan to fix what matters most.",
    intro:
      "If you are not sure why your site is not ranking, an audit is the place to start. We examine your technical setup, content, backlinks and competitors, then give you a clear, prioritised list of what to fix and in what order.",
    includes: [
      { title: "Technical review", description: "Crawling, indexing, speed, mobile usability and site structure." },
      { title: "Content review", description: "Thin, duplicate or outdated pages, plus missed keyword opportunities." },
      { title: "Backlink review", description: "The quality of your link profile and any risky links." },
      { title: "Competitor benchmark", description: "Where competitors are ahead and what it would take to catch up." },
      { title: "Prioritised action plan", description: "Fixes ranked by impact and effort, written in plain language." },
    ],
    outcomes: [
      "A clear understanding of what is holding your site back",
      "A roadmap your team or ours can act on immediately",
      "Quick wins identified alongside longer-term work",
    ],
    faqs: [
      {
        question: "What do I receive at the end?",
        answer:
          "A written report with findings and a prioritised action plan, followed by a call to walk you through it and answer questions.",
      },
      {
        question: "Can you implement the recommendations too?",
        answer:
          "Yes. Many clients continue with us for implementation, but the audit is yours to use however you choose.",
      },
    ],
  },
  "content-marketing": {
    name: "Content Marketing",
    summary: "Blogs, guides and page copy that attract the right visitors and move them towards buying.",
    intro:
      "Content is how customers find you, learn to trust you and decide to buy. We plan and produce content around what your audience is searching for, so each piece has a purpose beyond filling a blog.",
    includes: [
      { title: "Content strategy", description: "Topics and formats chosen from keyword research and customer questions." },
      { title: "Editorial calendar", description: "A realistic publishing schedule you can see and approve in advance." },
      { title: "Blog and long-form writing", description: "Well-researched articles written for readers first and search engines second." },
      { title: "Website and landing page copy", description: "Clear, persuasive copy for the pages that drive enquiries and sales." },
      { title: "Content refresh", description: "Updating existing pages that have slipped or gone out of date." },
    ],
    outcomes: [
      "Steady growth in qualified organic traffic",
      "Authority in your niche that builds trust",
      "Content you can reuse across email, social and ads",
    ],
    faqs: [
      {
        question: "Who writes the content?",
        answer:
          "Our writers, working from a brief you approve. For specialist subjects we interview your team so the content reflects real expertise.",
      },
      {
        question: "Do you use AI to write?",
        answer:
          "We use AI tools to speed up research and outlining, but every piece is written, fact-checked and edited by a person before it reaches you.",
      },
    ],
  },

  // ---------------------------------------------------------------- Paid Media
  "google-ads": {
    name: "Google Ads Management",
    summary: "Search, Shopping, Display and Performance Max campaigns built around your cost per lead or sale.",
    intro:
      "Google Ads puts you in front of people at the moment they are searching for what you sell. We structure, write and manage your campaigns to bring in qualified leads and orders at a cost that makes sense for your margins.",
    includes: [
      { title: "Account structure and keywords", description: "Campaigns organised by intent, with negative keywords to stop wasted spend." },
      { title: "Search, Shopping and Performance Max", description: "The right campaign types for your goals, not every type available." },
      { title: "Ad copy and extensions", description: "Multiple ad variations tested against each other continuously." },
      { title: "Conversion tracking", description: "Calls, forms and purchases tracked properly so decisions are based on real results." },
      { title: "Bid and budget management", description: "Regular optimisation to move spend towards what is performing." },
    ],
    outcomes: [
      "Qualified traffic from high-intent searches",
      "Lower wasted spend through tighter targeting",
      "Clear reporting on cost per lead and return on ad spend",
    ],
    faqs: [
      {
        question: "How much should I spend on Google Ads?",
        answer:
          "It depends on your industry, location and goals. We recommend a starting budget after reviewing keyword costs in your market, and scale only once results justify it.",
      },
      {
        question: "Who owns the ad account?",
        answer:
          "You do. We work inside your account, so the data, history and billing always stay with you.",
      },
    ],
  },
  "meta-ads": {
    name: "Meta Ads (Facebook & Instagram)",
    summary: "Facebook and Instagram campaigns that reach the right audience with creatives worth stopping for.",
    intro:
      "Meta's platforms are where your customers scroll every day. We combine precise audience targeting with strong creative to generate demand, capture leads and drive sales across Facebook and Instagram.",
    includes: [
      { title: "Audience strategy", description: "Interest, lookalike and custom audiences built from your own customer data." },
      { title: "Creative production", description: "Static, carousel, reel and video ads designed for each placement." },
      { title: "Pixel and Conversions API", description: "Accurate tracking set up on your website and catalogue." },
      { title: "Catalogue and shopping ads", description: "Dynamic product ads for e-commerce brands." },
      { title: "Testing and optimisation", description: "Ongoing tests of audiences, creatives and offers to lower your cost per result." },
    ],
    outcomes: [
      "Consistent lead or sales volume from social",
      "Creative that reflects your brand and earns attention",
      "Clear visibility into what each campaign returns",
    ],
    faqs: [
      {
        question: "Do you create the ad creatives?",
        answer:
          "Yes. Design and copy are part of the service. If you have product shoots or video footage, we will put it to use as well.",
      },
      {
        question: "Is Meta better than Google Ads for my business?",
        answer:
          "They do different jobs. Google captures existing demand, Meta creates it. Most businesses benefit from both, and we will recommend the mix based on your goals.",
      },
    ],
  },
  "linkedin-ads": {
    name: "LinkedIn Ads",
    summary: "Reach decision-makers by job title, industry and company size for B2B lead generation.",
    intro:
      "When your buyer is a professional or a business, LinkedIn offers targeting no other platform can match. We run campaigns that reach the right job titles and companies, and turn that attention into qualified sales conversations.",
    includes: [
      { title: "Audience targeting", description: "Job title, seniority, industry, company size and account lists." },
      { title: "Sponsored content", description: "Single image, carousel, video and document ads in the feed." },
      { title: "Lead gen forms", description: "Pre-filled forms that capture leads without leaving LinkedIn." },
      { title: "Message and conversation ads", description: "Direct outreach to your target list, used carefully." },
      { title: "CRM-ready reporting", description: "Lead quality tracked beyond the click, where your CRM allows." },
    ],
    outcomes: [
      "Leads from the companies and roles you want",
      "Stronger brand awareness among decision-makers",
      "Better alignment between marketing and sales",
    ],
    faqs: [
      {
        question: "LinkedIn Ads are expensive. Are they worth it?",
        answer:
          "Clicks cost more than on other platforms, but the targeting is far more precise. For B2B offers with a meaningful deal size, lead quality usually justifies the cost.",
      },
      {
        question: "What kind of content works best?",
        answer:
          "Useful, specific content tends to win: guides, reports, case studies and webinars. We help you choose or create an offer worth exchanging details for.",
      },
    ],
  },
  "youtube-ads": {
    name: "YouTube Ads",
    summary: "Video campaigns that build awareness and drive action on the world's largest video platform.",
    intro:
      "YouTube lets you tell your story to people who are actively watching. We plan and manage video campaigns that reach the right viewers, hold their attention and lead them to take the next step.",
    includes: [
      { title: "Campaign planning", description: "In-stream, in-feed and Shorts formats matched to your objective." },
      { title: "Audience targeting", description: "Interests, search behaviour, custom segments and your own customer lists." },
      { title: "Video creative guidance", description: "Scripts and edits structured to hook viewers in the first seconds." },
      { title: "Remarketing", description: "Follow-up ads for people who watched your videos or visited your site." },
      { title: "Performance reporting", description: "Views, view rate, cost per view and conversions in one place." },
    ],
    outcomes: [
      "Wider reach among relevant viewers",
      "Higher brand recall and consideration",
      "Video audiences you can retarget across Google",
    ],
    faqs: [
      {
        question: "I do not have video content. Can you still help?",
        answer:
          "Yes. We can guide scripting and production, or build effective ads from product photos, screen recordings and existing footage.",
      },
      {
        question: "How do I pay for YouTube Ads?",
        answer:
          "Typically per view or per thousand impressions, depending on the format. You set the budget and we manage it towards your goal.",
      },
    ],
  },
  "tiktok-ads": {
    name: "TikTok Ads",
    summary: "Short-form video campaigns for brands selling in markets where TikTok is available.",
    intro:
      "For brands targeting the UAE, the wider GCC, the US, the UK and other markets where TikTok operates, it is one of the fastest ways to reach younger audiences. We create native-feeling video ads and manage campaigns built to perform. TikTok is not currently available in India, so this service is for international targeting.",
    includes: [
      { title: "Market and audience planning", description: "Targeting by country, interest and behaviour in your chosen markets." },
      { title: "Native-style creative", description: "Ads that look and feel like the content people already enjoy." },
      { title: "Pixel and event tracking", description: "Conversions measured from view to purchase." },
      { title: "Spark Ads and creator content", description: "Boosting organic posts and creator videos as ads." },
      { title: "Creative testing", description: "Frequent new variations, because creative tires quickly on TikTok." },
    ],
    outcomes: [
      "Reach in international markets beyond Meta and Google",
      "Creative that fits the platform rather than fighting it",
      "A tested view of whether TikTok works for your product",
    ],
    faqs: [
      {
        question: "Can you run TikTok Ads for an audience in India?",
        answer:
          "No. TikTok is not available in India. We run TikTok campaigns for clients targeting customers in countries where the platform operates.",
      },
      {
        question: "Does TikTok work for products outside fashion and beauty?",
        answer:
          "Often, yes. Food, home, fitness, education and apps all perform well when the creative suits the platform. We test with a small budget before scaling.",
      },
    ],
  },
  remarketing: {
    name: "Remarketing",
    summary: "Bring back visitors who showed interest but left without enquiring or buying.",
    intro:
      "Most people do not convert on their first visit. Remarketing keeps your brand in front of those who have already shown interest, with messages that match what they looked at, so more of your existing traffic turns into customers.",
    includes: [
      { title: "Audience segmentation", description: "Separate lists for visitors, cart abandoners, past buyers and video viewers." },
      { title: "Cross-platform campaigns", description: "Google Display, YouTube, Facebook and Instagram working together." },
      { title: "Dynamic product ads", description: "Showing people the exact products they viewed." },
      { title: "Frequency control", description: "Caps and exclusions so your ads remind people without annoying them." },
      { title: "Sequential messaging", description: "A planned series of messages instead of the same ad on repeat." },
    ],
    outcomes: [
      "More conversions from traffic you have already paid for",
      "Recovered abandoned carts and enquiries",
      "Lower overall cost per acquisition",
    ],
    faqs: [
      {
        question: "Do I need a lot of website traffic for remarketing?",
        answer:
          "You need enough visitors to build an audience. If your traffic is low, we usually grow it first and add remarketing once the lists are large enough.",
      },
      {
        question: "Is remarketing affected by privacy changes?",
        answer:
          "Yes, which is why we rely on first-party data, consent-aware tracking and server-side setups rather than third-party cookies alone.",
      },
    ],
  },
  "chatgpt-ads": {
    name: "ChatGPT Ads",
    summary: "Early-mover planning and management for advertising inside AI assistants.",
    intro:
      "Advertising inside AI assistants such as ChatGPT is a new and fast-changing channel. Access, formats and available markets are still evolving, so we help you prepare properly, test early where it is open to you and avoid wasting budget on hype.",
    includes: [
      { title: "Readiness assessment", description: "Whether the channel is available for your market and suits your product today." },
      { title: "Conversational ad strategy", description: "Messaging designed for people who are asking questions, not browsing." },
      { title: "Landing experience", description: "Pages that continue the conversation and answer the next question." },
      { title: "Measurement plan", description: "Tracking set up so early tests give you clear learnings." },
      { title: "GEO alignment", description: "Paid and organic AI visibility planned together." },
    ],
    outcomes: [
      "A realistic view of what AI advertising can do for you now",
      "A tested approach ready to scale as the channel opens up",
      "Paid and organic AI presence working together",
    ],
    faqs: [
      {
        question: "Can I advertise in ChatGPT today?",
        answer:
          "Availability depends on your market and on the platform's advertising programme, which is still being rolled out. We check current eligibility for you before recommending any spend.",
      },
      {
        question: "Should I wait until the channel matures?",
        answer:
          "You do not need a large budget yet, but preparing early helps. Improving how AI assistants already describe your brand is valuable whether or not you advertise.",
      },
    ],
  },

  // ---------------------------------------------------------------- Social Media
  "influencer-marketing": {
    name: "Influencer Marketing",
    summary: "Partner with creators your customers already trust, from shortlist to reporting.",
    intro:
      "People buy from people they trust. We connect your brand with creators whose audience matches your customers, manage the campaign end to end and report on what it delivered.",
    includes: [
      { title: "Creator discovery", description: "Shortlists based on audience fit and engagement quality, not just follower count." },
      { title: "Authenticity checks", description: "Screening for fake followers and inflated engagement." },
      { title: "Briefs and negotiation", description: "Clear deliverables, timelines and usage rights agreed in writing." },
      { title: "Campaign management", description: "Content approvals, posting schedules and disclosure handled for you." },
      { title: "Performance reporting", description: "Reach, engagement, clicks and sales tracked per creator." },
    ],
    outcomes: [
      "Credible reach among the audience you want",
      "Authentic content you can reuse in ads",
      "A clear view of which creators are worth working with again",
    ],
    faqs: [
      {
        question: "Do you work with big influencers or smaller creators?",
        answer:
          "Both. Smaller creators often deliver better engagement for the money, while larger names build reach. We recommend a mix based on your goal and budget.",
      },
      {
        question: "How do you measure results?",
        answer:
          "With tracked links, discount codes and platform insights, so each creator's contribution is visible.",
      },
    ],
  },
  "personal-branding": {
    name: "Personal Branding",
    summary: "Build a credible, visible personal brand for founders, professionals and experts.",
    intro:
      "People connect with people before they connect with companies. We help founders, doctors, consultants and other professionals build a personal brand that attracts opportunities and strengthens the business behind them.",
    includes: [
      { title: "Positioning", description: "What you want to be known for, and the audience you want to reach." },
      { title: "Profile optimisation", description: "LinkedIn, Instagram and other profiles rewritten to make the right first impression." },
      { title: "Content planning", description: "Themes and a posting rhythm that fit your schedule." },
      { title: "Ghostwriting and editing", description: "Posts in your own voice, drafted from short conversations with you." },
      { title: "Visibility opportunities", description: "Guidance on podcasts, guest articles and speaking where they fit." },
    ],
    outcomes: [
      "A consistent professional presence online",
      "Inbound enquiries, partnerships and invitations",
      "Greater trust in the business you represent",
    ],
    faqs: [
      {
        question: "How much of my time does this take?",
        answer:
          "Usually a short call every week or two. We turn your ideas and experience into content, and you approve it before anything is posted.",
      },
      {
        question: "Will the content sound like me?",
        answer:
          "That is the aim. We learn how you speak and what you believe, and write from your own stories rather than generic advice.",
      },
    ],
  },
  "content-creation": {
    name: "Content Creation",
    summary: "Scroll-stopping reels, graphics and copy produced to a consistent brand standard.",
    intro:
      "Good social content needs ideas, design and consistency. Our team plans and produces reels, graphics, carousels and captions that look like your brand and give people a reason to stop scrolling.",
    includes: [
      { title: "Creative concepts", description: "Monthly ideas tied to your products, seasons and campaigns." },
      { title: "Graphic design", description: "Static posts, carousels and stories in your brand style." },
      { title: "Short-form video", description: "Reels and Shorts scripted, edited and captioned." },
      { title: "Copywriting", description: "Captions and hooks written to start conversations." },
      { title: "Product photography", description: "Professional product shoots when you need fresh visuals." },
    ],
    outcomes: [
      "A steady supply of on-brand content",
      "Higher engagement on every platform",
      "Creative assets ready for use in paid campaigns",
    ],
    faqs: [
      {
        question: "Do I need to supply photos and videos?",
        answer:
          "If you have them, we will use them. If not, we can arrange a product or brand shoot as part of the plan.",
      },
      {
        question: "How many posts do I get each month?",
        answer:
          "That depends on the plan we agree. We would rather publish fewer strong pieces than fill a calendar with weak ones.",
      },
    ],
  },
  "brand-management": {
    name: "Brand Management",
    summary: "Keep your brand consistent, recognisable and well regarded across every channel.",
    intro:
      "A brand is the sum of every impression you make. We help you define how your brand looks and sounds, keep it consistent wherever customers meet it, and manage how it is perceived over time.",
    includes: [
      { title: "Brand guidelines", description: "Voice, tone, colours and visual rules documented in one place." },
      { title: "Channel consistency", description: "Profiles, bios and visuals aligned across platforms and marketplaces." },
      { title: "Community management", description: "Timely, on-brand replies to comments and messages." },
      { title: "Campaign oversight", description: "Every campaign checked against your brand before it goes live." },
      { title: "Brand monitoring", description: "Tracking mentions and sentiment so issues are caught early." },
    ],
    outcomes: [
      "A brand customers recognise at a glance",
      "Consistent communication across teams and agencies",
      "Stronger trust and loyalty over time",
    ],
    faqs: [
      {
        question: "We already have a logo. Do we need brand guidelines?",
        answer:
          "A logo is one part of a brand. Guidelines make sure everything else, from captions to ad creatives, feels like it comes from the same company.",
      },
      {
        question: "Do you respond to customer comments for us?",
        answer:
          "Yes, within agreed guidelines. Anything sensitive is escalated to you rather than answered on your behalf.",
      },
    ],
  },
  "social-media-strategy": {
    name: "Social Media Strategy Development",
    summary: "A clear, documented plan for what to post, where, and why.",
    intro:
      "Posting without a plan rarely delivers results. We build a social media strategy grounded in your business goals, so you know which platforms to focus on, what to say and how success will be measured.",
    includes: [
      { title: "Audit and competitor review", description: "What is working on your channels and in your category today." },
      { title: "Audience and platform selection", description: "Where your customers spend time, and where you should not waste effort." },
      { title: "Content pillars", description: "Three to five themes that give your content focus and variety." },
      { title: "Posting framework", description: "Formats, frequency and a sample calendar your team can run with." },
      { title: "KPIs and reporting", description: "The few numbers that matter, and how to track them." },
    ],
    outcomes: [
      "A written strategy your team can follow",
      "Focus on the platforms that matter for your business",
      "Clear measures of what success looks like",
    ],
    faqs: [
      {
        question: "Can I get the strategy only and run it in-house?",
        answer:
          "Yes. The strategy is a standalone deliverable. We can also train your team or take over execution if you prefer.",
      },
      {
        question: "How long does it take to develop?",
        answer:
          "Timelines depend on how many platforms and markets are involved. We agree a schedule at the start and share work in progress along the way.",
      },
    ],
  },
  "viral-meme-marketing": {
    name: "Viral and Meme Marketing",
    summary: "Timely, shareable content that taps into trends without damaging your brand.",
    intro:
      "Humour and trends travel faster than any ad. We create memes, trend-led reels and moment marketing that people want to share, while keeping every idea within limits your brand is comfortable with.",
    includes: [
      { title: "Trend monitoring", description: "Daily tracking of formats, sounds and conversations relevant to your audience." },
      { title: "Meme and moment content", description: "Quick-turnaround creatives for trends and topical events." },
      { title: "Trend-led video", description: "Reels and Shorts built on formats that are already working." },
      { title: "Brand safety guidelines", description: "Agreed boundaries on tone and topics before we start." },
      { title: "Fast approvals", description: "A simple sign-off process so content goes out while the trend is alive." },
    ],
    outcomes: [
      "Higher shares, saves and organic reach",
      "A brand personality people remember",
      "Content that reaches beyond your existing followers",
    ],
    faqs: [
      {
        question: "Can you guarantee a post will go viral?",
        answer:
          "No. Virality cannot be promised. What we can do is consistently produce relevant, well-timed content, which greatly improves the odds.",
      },
      {
        question: "Is meme marketing suitable for a serious brand?",
        answer:
          "Often yes, in the right tone. We agree on what is on and off limits first, and you approve content before it is posted.",
      },
    ],
  },

  // ---------------------------------------------------------------- Content & Web
  "custom-development": {
    name: "Custom Development",
    summary: "Web applications, portals and integrations built around the way your business works.",
    intro:
      "When off-the-shelf software does not fit, we build what you need. From customer portals and dashboards to marketplace and payment integrations, our developers create reliable solutions shaped around your processes.",
    includes: [
      { title: "Requirements and scoping", description: "We turn your idea into a clear specification, timeline and cost." },
      { title: "Web applications and portals", description: "Custom platforms for customers, vendors or internal teams." },
      { title: "API and third-party integrations", description: "Connecting payment gateways, CRMs, ERPs, marketplaces and logistics." },
      { title: "E-commerce customisation", description: "Custom features for Shopify, WooCommerce and bespoke stores." },
      { title: "Testing and maintenance", description: "Quality checks before launch and support after it." },
    ],
    outcomes: [
      "Software that fits your process instead of forcing a workaround",
      "Systems that talk to each other and cut manual work",
      "A codebase you own and can extend",
    ],
    faqs: [
      {
        question: "How do you price custom development?",
        answer:
          "After scoping, we give you a fixed quote or a milestone-based plan, depending on how well-defined the project is.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do. On completion and payment, the source code and all access are handed over to you.",
      },
    ],
  },
  "web-design": {
    name: "Web Design",
    summary: "Clean, modern designs that reflect your brand and guide visitors towards action.",
    intro:
      "Visitors judge your business within seconds of landing on your site. We design websites that look professional, are easy to use on any device and lead people naturally towards getting in touch or buying.",
    includes: [
      { title: "UX and wireframes", description: "Page structure planned around what visitors need to do." },
      { title: "Visual design", description: "Layouts, typography and colour that express your brand." },
      { title: "Mobile-first layouts", description: "Designed for phones first, then scaled up to larger screens." },
      { title: "Design system", description: "Reusable components so new pages stay consistent." },
      { title: "Interactive prototype", description: "A clickable preview to review before development begins." },
    ],
    outcomes: [
      "A site that makes a strong first impression",
      "Easier navigation and clearer calls to action",
      "A consistent look across every page",
    ],
    faqs: [
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We review what is working, keep what should stay and redesign the rest, taking care to protect your existing search rankings.",
      },
      {
        question: "Do you also build the website?",
        answer:
          "Yes. Design and development are handled by the same team, or we can hand over design files if you have your own developers.",
      },
    ],
  },
  "landing-pages": {
    name: "Landing Pages",
    summary: "Focused, fast pages built for one goal: turning ad clicks into leads and sales.",
    intro:
      "Sending paid traffic to a general home page wastes money. We design and build dedicated landing pages that match your ad, speak to one audience and make the next step obvious.",
    includes: [
      { title: "Conversion-focused copy", description: "A clear headline, benefits and proof written for one specific offer." },
      { title: "Design and build", description: "Fast-loading, mobile-first pages in your brand style." },
      { title: "Forms and integrations", description: "Leads sent straight to your CRM, email or WhatsApp." },
      { title: "A/B testing", description: "Variations tested so decisions come from data, not opinion." },
      { title: "Analytics and heatmaps", description: "Insight into where visitors click, scroll and drop off." },
    ],
    outcomes: [
      "Higher conversion rates from the same ad spend",
      "A lower cost per lead or sale",
      "A reusable template for future campaigns",
    ],
    faqs: [
      {
        question: "How is a landing page different from a website page?",
        answer:
          "A landing page has one purpose and no distractions. It is built around a single offer and a single action, which usually makes it convert better.",
      },
      {
        question: "Can you work with my existing website platform?",
        answer:
          "In most cases, yes. We build on your current platform or on a dedicated landing page tool, whichever gets the best result.",
      },
    ],
  },

  // ---------------------------------------------------------------- Lifecycle & Reputation
  "email-marketing": {
    name: "Email Marketing",
    summary: "Campaigns and automated flows that turn subscribers into repeat customers.",
    intro:
      "Email remains one of the most cost-effective ways to stay in touch with customers. We plan, design and send campaigns and automated flows that people actually want to open, and that bring them back to buy again.",
    includes: [
      { title: "List growth and hygiene", description: "Sign-up forms, clean lists and proper consent from the start." },
      { title: "Campaign design", description: "On-brand templates and copy for newsletters, launches and offers." },
      { title: "Automated flows", description: "Welcome series, abandoned cart, post-purchase and win-back emails." },
      { title: "Segmentation", description: "The right message for new subscribers, loyal customers and everyone in between." },
      { title: "Deliverability", description: "Domain authentication and sending practices that keep you out of spam." },
    ],
    outcomes: [
      "More repeat purchases from existing customers",
      "Revenue from automated emails that run in the background",
      "A direct channel you own, independent of ad platforms",
    ],
    faqs: [
      {
        question: "Which email platform do you use?",
        answer:
          "We work with the major platforms and recommend one based on your store, list size and budget. If you already have one, we can work within it.",
      },
      {
        question: "I do not have an email list yet. Where do I start?",
        answer:
          "We set up sign-up forms and incentives on your site to start building one properly. We do not use purchased lists.",
      },
    ],
  },
  "whatsapp-marketing": {
    name: "WhatsApp Marketing",
    summary: "Reach customers where they already chat, using the official WhatsApp Business Platform.",
    intro:
      "Your customers already use WhatsApp every day. We help you use the official WhatsApp Business Platform to send order updates, offers and reminders, and to answer enquiries quickly, without spamming people or risking your number.",
    includes: [
      { title: "Business Platform setup", description: "Account, verified business profile and message templates approved by WhatsApp." },
      { title: "Opt-in collection", description: "Compliant ways to gather consent on your site, at checkout and in store." },
      { title: "Broadcast campaigns", description: "Segmented promotions and announcements sent to people who asked for them." },
      { title: "Automated messages", description: "Order confirmations, shipping updates, reminders and abandoned cart nudges." },
      { title: "Chat and catalogue", description: "Quick replies, product catalogues and handover to your team when needed." },
    ],
    outcomes: [
      "Faster responses to customer enquiries",
      "Recovered carts and more repeat orders",
      "A trusted, personal channel with your customers",
    ],
    faqs: [
      {
        question: "Will my number get banned for sending bulk messages?",
        answer:
          "Not when it is done properly. We use the official Business Platform, approved templates and opted-in contacts, which is what keeps accounts safe.",
      },
      {
        question: "Can WhatsApp connect with my online store?",
        answer:
          "Yes. We integrate it with common e-commerce platforms and CRMs so messages are triggered automatically by orders and customer actions.",
      },
    ],
  },
  "marketing-automation": {
    name: "Marketing Automation",
    summary: "Connect your tools and automate follow-ups so no lead is left waiting.",
    intro:
      "Leads go cold when follow-up depends on someone remembering. We connect your website, CRM, email and WhatsApp, then automate the journeys that turn an enquiry into a customer and a customer into a repeat buyer.",
    includes: [
      { title: "Journey mapping", description: "Every step from first enquiry to repeat purchase laid out clearly." },
      { title: "CRM setup and integration", description: "Leads captured from every source into one place." },
      { title: "Lead nurturing workflows", description: "Timed sequences across email, SMS and WhatsApp." },
      { title: "Lead scoring and routing", description: "The warmest leads passed to your sales team first." },
      { title: "Reporting dashboards", description: "A clear view of the pipeline from first touch to sale." },
    ],
    outcomes: [
      "Faster, more consistent lead follow-up",
      "Less manual work for your team",
      "A clearer view of what turns leads into revenue",
    ],
    faqs: [
      {
        question: "Do I need to buy expensive software?",
        answer:
          "Not necessarily. We recommend tools that fit your size and budget, and often start with what you already have.",
      },
      {
        question: "Will automation make my communication feel robotic?",
        answer:
          "Done well, it does the opposite. Messages are triggered by what a customer actually did, so they arrive at the right moment and feel relevant.",
      },
    ],
  },
  "online-reputation-management": {
    name: "Online Reputation Management (ORM)",
    summary: "Monitor, protect and improve what people find when they search for your brand.",
    intro:
      "Before buying, customers search for your name. Online Reputation Management makes sure what they find is accurate and fair, by monitoring what is said about you, responding properly and building the positive content your brand deserves.",
    includes: [
      { title: "Brand monitoring", description: "Tracking mentions across search, social media, forums and review sites." },
      { title: "Search results review", description: "An audit of what appears for your brand name and key people." },
      { title: "Response management", description: "Professional, timely replies to complaints and negative feedback." },
      { title: "Positive content building", description: "Profiles, articles and PR that give search engines better results to show." },
      { title: "Crisis support", description: "A clear plan and quick guidance when something goes wrong." },
    ],
    outcomes: [
      "A more accurate and positive brand presence in search",
      "Issues spotted and handled before they grow",
      "Greater trust from customers, partners and recruits",
    ],
    faqs: [
      {
        question: "Can you remove negative reviews or articles?",
        answer:
          "Only when they violate a platform's policies or the law, in which case we help you report them. Otherwise we focus on responding well and building stronger positive content.",
      },
      {
        question: "Do you post fake reviews?",
        answer:
          "Never. Fake reviews are unethical, break platform rules and can seriously damage a brand. We help you earn genuine ones.",
      },
    ],
  },
  "review-management": {
    name: "Review Management",
    summary: "Earn more genuine reviews and respond to every one, across Google and marketplaces.",
    intro:
      "Ratings and reviews decide who gets the click and who gets the sale. We help you collect more genuine reviews from real customers, respond to them professionally and use the feedback to improve.",
    includes: [
      { title: "Review generation", description: "Simple, policy-compliant requests sent to customers after purchase." },
      { title: "Multi-platform monitoring", description: "Google, marketplaces and industry review sites watched in one place." },
      { title: "Response handling", description: "Thoughtful replies to both positive and negative reviews." },
      { title: "Feedback insights", description: "Recurring themes reported back so you can fix root causes." },
      { title: "Review showcasing", description: "Your best reviews featured on your website and in your marketing." },
    ],
    outcomes: [
      "More reviews and a stronger overall rating",
      "Higher conversion on listings and local search",
      "Customer feedback you can act on",
    ],
    faqs: [
      {
        question: "Do you help with Amazon and Flipkart reviews?",
        answer:
          "Yes, within each marketplace's rules. We use approved request methods and focus on product and service improvements that earn better reviews.",
      },
      {
        question: "How should negative reviews be handled?",
        answer:
          "Promptly, politely and with a real solution. A well-handled complaint often reassures future customers more than a perfect rating does.",
      },
    ],
  },

  // ---------------------------------------------------------------- AI Solutions
  "ai-automation": {
    name: "AI Automation",
    summary: "Automate repetitive work across marketing, sales and operations with AI workflows.",
    intro:
      "Your team spends hours on tasks that follow the same pattern every time. We identify those tasks and build AI-powered workflows to handle them, so your people can focus on work that needs judgment.",
    includes: [
      { title: "Process review", description: "We map your workflows and find the tasks worth automating." },
      { title: "Workflow design", description: "AI steps combined with your existing tools and rules." },
      { title: "Tool integration", description: "Connections to your CRM, spreadsheets, email, marketplaces and more." },
      { title: "Human-in-the-loop checks", description: "Approval points wherever accuracy or judgment matters." },
      { title: "Monitoring and upkeep", description: "Ongoing checks so automations keep working as your business changes." },
    ],
    outcomes: [
      "Hours saved every week on routine work",
      "Fewer errors from manual copying and data entry",
      "Faster turnaround for customers and internal teams",
    ],
    faqs: [
      {
        question: "What kind of tasks can be automated?",
        answer:
          "Common examples include lead follow-up, report generation, catalogue and listing updates, data entry between systems and first-level customer replies.",
      },
      {
        question: "Is my business data safe?",
        answer:
          "We design each workflow with data access kept to the minimum needed and explain exactly which tools will handle your data before anything goes live.",
      },
    ],
  },
  "ai-chatbots": {
    name: "AI Chatbots",
    summary: "Chatbots trained on your business that answer customers instantly, day and night.",
    intro:
      "Customers expect answers immediately, even outside working hours. We build AI chatbots trained on your own products, policies and FAQs, so they give accurate answers, capture leads and hand over to your team when a person is needed.",
    includes: [
      { title: "Knowledge base setup", description: "Your catalogue, policies and FAQs organised for the chatbot to draw on." },
      { title: "Website and WhatsApp deployment", description: "Available on the channels your customers already use." },
      { title: "Lead capture and qualification", description: "Contact details and requirements collected during the conversation." },
      { title: "Human handover", description: "Smooth transfer to your team for complex or sensitive queries." },
      { title: "Conversation review", description: "Regular checks of real chats to improve answers over time." },
    ],
    outcomes: [
      "Instant answers for customers at any hour",
      "More enquiries captured instead of lost",
      "A lighter load on your support team",
    ],
    faqs: [
      {
        question: "What if the chatbot gives a wrong answer?",
        answer:
          "We restrict it to your approved information, add a fallback to a human when it is unsure and review conversations regularly to correct mistakes.",
      },
      {
        question: "Can it reply in Hindi and other languages?",
        answer:
          "Yes. Modern AI chatbots handle multiple languages, and we test the ones that matter for your customers before launch.",
      },
    ],
  },
  "ai-content": {
    name: "AI Content",
    summary: "Produce quality content faster with AI-assisted workflows and human editing.",
    intro:
      "AI can speed up content production enormously, but unedited AI text rarely performs or sounds like your brand. We set up workflows that combine AI speed with human research, editing and fact-checking.",
    includes: [
      { title: "Brand voice setup", description: "Guidelines and examples so AI drafts sound like you." },
      { title: "AI-assisted drafting", description: "Faster production of blogs, product descriptions and social copy." },
      { title: "Human editing and fact-checking", description: "Every piece reviewed by an editor before publishing." },
      { title: "Catalogue content at scale", description: "Titles, bullets and descriptions for large product ranges." },
      { title: "Visual and video support", description: "AI tools used to speed up creative production where they add value." },
    ],
    outcomes: [
      "More content produced without lowering quality",
      "A consistent brand voice across every channel",
      "Faster listing and campaign turnaround",
    ],
    faqs: [
      {
        question: "Will Google penalise AI-generated content?",
        answer:
          "Google's guidance focuses on whether content is helpful and original, not on how it was produced. That is why human review and real expertise remain essential.",
      },
      {
        question: "Can my team learn to use these workflows?",
        answer:
          "Yes. We can run the process for you or train your team and hand over the prompts, templates and checks.",
      },
    ],
  },
  "ai-analytics": {
    name: "AI Analytics",
    summary: "Turn scattered data into clear answers, forecasts and next steps.",
    intro:
      "Most businesses have more data than they can use. We bring your sales, marketing and marketplace data together and apply AI to surface what matters: what is working, what is not and what is likely to happen next.",
    includes: [
      { title: "Data consolidation", description: "Website, ads, CRM and marketplace data brought into one view." },
      { title: "Automated dashboards", description: "Live reporting on the metrics you actually use to make decisions." },
      { title: "Trend and anomaly alerts", description: "Notifications when something changes that needs your attention." },
      { title: "Forecasting", description: "Demand and sales projections to support stock and budget planning." },
      { title: "Plain-language insights", description: "Summaries that explain the numbers without needing an analyst." },
    ],
    outcomes: [
      "Decisions based on evidence rather than guesswork",
      "Problems and opportunities spotted earlier",
      "Less time spent building reports by hand",
    ],
    faqs: [
      {
        question: "My data is spread across many tools. Is that a problem?",
        answer:
          "That is the usual starting point. Bringing it together is the first step of the project.",
      },
      {
        question: "How accurate are the forecasts?",
        answer:
          "Forecasts are estimates and depend on the quality and history of your data. We share the assumptions behind them so you know how much weight to give each one.",
      },
    ],
  },
  "ai-consulting": {
    name: "AI Consulting",
    summary: "Clear, practical advice on where AI fits in your business and where it does not.",
    intro:
      "There is a lot of noise around AI. We help you cut through it with a clear assessment of where AI can genuinely help your business, what it will take and which ideas are not worth pursuing yet.",
    includes: [
      { title: "Opportunity assessment", description: "A review of your operations to find high-value AI use cases." },
      { title: "Tool and vendor guidance", description: "Independent advice on which products suit your needs and budget." },
      { title: "Roadmap", description: "A phased plan starting with quick wins and building from there." },
      { title: "Team training", description: "Practical sessions so your staff can use AI tools confidently and responsibly." },
      { title: "Usage guidelines", description: "Simple policies covering data, accuracy and human review." },
    ],
    outcomes: [
      "A realistic AI plan tied to business results",
      "Money saved by avoiding the wrong tools",
      "A team that knows how to use AI well",
    ],
    faqs: [
      {
        question: "We are a small business. Is AI consulting relevant for us?",
        answer:
          "Yes. Smaller teams often gain the most, because a few well-chosen tools can take a large amount of routine work off their plate.",
      },
      {
        question: "Do you also build what you recommend?",
        answer:
          "We can, but the advice stands on its own. You are free to implement the roadmap with us, in-house or with another provider.",
      },
    ],
  },
  "voice-sales-agents": {
    name: "AI Voice & Sales Agents",
    summary: "AI agents that answer calls, qualify leads and book appointments for your team.",
    intro:
      "Missed calls and slow follow-ups cost sales. AI voice and sales agents can answer enquiries, qualify leads, book appointments and follow up automatically, then pass the conversation to your team when a person is needed.",
    includes: [
      { title: "Call flow and script design", description: "Conversations planned around your sales process and common questions." },
      { title: "Inbound call handling", description: "Enquiries answered promptly, including outside working hours." },
      { title: "Lead qualification and booking", description: "Key details captured and appointments added to your calendar." },
      { title: "CRM integration", description: "Call summaries and lead data logged automatically." },
      { title: "Quality review", description: "Calls monitored and scripts tuned to improve results." },
    ],
    outcomes: [
      "Fewer missed enquiries",
      "Faster first response to new leads",
      "A sales team that spends its time on qualified prospects",
    ],
    faqs: [
      {
        question: "Will callers know they are speaking to an AI?",
        answer:
          "Yes. We recommend the agent identifies itself clearly at the start of the call. Being upfront builds trust and is increasingly expected by regulators.",
      },
      {
        question: "Can it make outbound sales calls?",
        answer:
          "Outbound calling is subject to telecom regulations and consent requirements, which vary by country. We design any outbound use to comply with the rules in your market.",
      },
    ],
  },
}

export interface CatalogService extends ServiceContent {
  slug: string
  category: ServiceCategory
}

export function getCatalogService(slug: string): CatalogService | undefined {
  const content = serviceContent[slug]
  const category = serviceCategories.find((item) => item.services.some((link) => link.slug === slug))
  if (!content || !category) return undefined

  return { slug, category, ...content }
}

export const catalogServiceSlugs = Object.keys(serviceContent)

// Menu entries that point at an existing overview page instead of a catalogue page
const overviewPageSummaries: Record<string, string> = {
  "website-development": "Fast, responsive, SEO‑friendly, and conversion‑focused websites.",
}

export function getServiceSummary(slug: string): string | undefined {
  return serviceContent[slug]?.summary ?? overviewPageSummaries[slug]
}

// Answers that apply to every service
export const sharedServiceFaqs = [
  {
    question: "Do you provide reports?",
    answer: "Yes. Monthly performance reports are included with all services.",
  },
  {
    question: "Is there a minimum contract period?",
    answer: "Project and retainer models are available based on service type.",
  },
]
