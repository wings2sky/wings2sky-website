import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronRight, Clock, List, Sparkles } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BlogCard, { PostMeta } from "@/components/blog-card"
import { Badge, CtaBand, HeroBackdrop } from "@/components/page-sections"

interface BlogDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

interface Heading {
  id: string
  text: string
}

interface FaqItem {
  question: string
  answer: string
}

const SITE_URL = "https://wings2sky.com"

const absoluteUrl = (path: string) => (path.startsWith("/") ? `${SITE_URL}${path}` : path)

// Article, breadcrumb and FAQ structured data, read by Google rich results and AI answer engines
function buildJsonLd(post: (typeof blogPosts)[number]) {
  const url = `${SITE_URL}/blogs/${post.slug}`
  const faqs: FaqItem[] = post.faqs ?? []

  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.meta_description || post.excerpt,
      image: absoluteUrl(post.image1 || post.image),
      datePublished: post.date,
      dateModified: post.updated || post.date,
      author: { "@type": "Organization", name: post.author, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "Wings2Sky",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-mark.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      keywords: post.keywords?.join(", "),
      articleSection: post.category,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_URL}/blogs` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    ...(faqs.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]
      : []),
  ]
}

// Adds anchor ids to the article's h2 headings and returns them for the table of contents
function prepareContent(html: string): { content: string; headings: Heading[] } {
  const headings: Heading[] = []
  const usedIds = new Set<string>()

  const content = html
    .replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (_match, attributes: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim()
      const baseId = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "section"
      let id = baseId
      let suffix = 2
      while (usedIds.has(id)) {
        id = `${baseId}-${suffix}`
        suffix += 1
      }
      usedIds.add(id)
      headings.push({ id, text })

      return `<h2${attributes} id="${id}">${inner}</h2>`
    })
    // Images inside the article load only when the reader scrolls near them
    .replace(/<img /g, '<img loading="lazy" decoding="async" ')

  return { content, headings }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Improved related posts logic
  const getRelatedPosts = (currentPost: typeof post) => {
    return blogPosts
      .filter(p => p.slug !== currentPost.slug) // Exclude current post
      .sort((a, b) => {
        // Priority 1: Same category
        if (a.category === currentPost.category && b.category !== currentPost.category) return -1
        if (b.category === currentPost.category && a.category !== currentPost.category) return 1
        
        // Priority 2: Shared tags
        const aSharedTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length
        const bSharedTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length
        
        if (aSharedTags > bSharedTags) return -1
        if (bSharedTags > aSharedTags) return 1
        
        // Priority 3: Most recent first
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
      .slice(0, 3) // Get top 3
  }

  const relatedPosts = getRelatedPosts(post)
  const { content, headings } = prepareContent(post.content)
  const faqs: FaqItem[] = post.faqs ?? []
  const keyTakeaways: string[] = post.keyTakeaways ?? []
  if (faqs.length > 0) headings.push({ id: "faqs", text: "Frequently Asked Questions" })

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(post)).replace(/</g, "\\u003c") }}
      />
      <Navigation />

      {/* Article header */}
      <header className="relative overflow-hidden bg-background px-4 sm:px-6 lg:px-8 pt-6 pb-10 md:pt-10 md:pb-12">
        <HeroBackdrop />
        <div className="relative mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="transition hover:text-primary">Home</Link>
            <ChevronRight size={14} />
            <Link href="/blogs" className="transition hover:text-primary">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-foreground line-clamp-1">{post.category}</span>
          </nav>

          <div className="mt-8">
            <Badge>{post.category}</Badge>
            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
              {post.title}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <PostMeta author={post.author} date={post.date} />
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock size={15} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Cover image - shown in full, never cropped */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl justify-center">
          <Image
            src={post.image1 || post.image}
            alt={post.title}
            width={1600}
            height={900}
            priority
            className="h-auto max-h-[36rem] w-auto max-w-full rounded-3xl border border-border shadow-xl shadow-primary/10"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>

      {/* Article body */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
          <article className="min-w-0">
            {/* Table of contents on small screens */}
            {headings.length > 1 && (
              <details className="group mb-8 rounded-2xl border border-border bg-card px-5 py-4 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  <span className="inline-flex items-center gap-2">
                    <List size={16} className="text-primary" />
                    In this article
                  </span>
                  <ChevronRight size={16} className="text-primary transition-transform group-open:rotate-90" />
                </summary>
                <ol className="mt-3 space-y-2 text-sm">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a href={`#${heading.id}`} className="text-muted-foreground transition hover:text-primary">
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            )}

            {/* Answer-first summary, the part search snippets and AI assistants quote */}
            {keyTakeaways.length > 0 && (
              <section
                aria-label="Key takeaways"
                className="mb-10 rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-6"
              >
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  <Sparkles size={14} />
                  Key takeaways
                </p>
                <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-foreground/90">
                  {keyTakeaways.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="article-content" dangerouslySetInnerHTML={{ __html: content }} />

            {faqs.length > 0 && (
              <section aria-labelledby="faqs" className="mt-12">
                <h2 id="faqs" className="text-2xl font-bold tracking-tight text-foreground">
                  Frequently Asked Questions
                </h2>
                <div className="mt-5 space-y-3">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="group rounded-2xl border border-border bg-card px-5 py-4">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                        <h3 className="text-base leading-snug">{faq.question}</h3>
                        <ChevronRight size={18} className="mt-0.5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border pt-8">
              <span className="mr-1 text-sm font-semibold text-foreground">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              href="/blogs"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
            >
              <ArrowLeft size={16} />
              Back to all articles
            </Link>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {headings.length > 1 && (
                <nav aria-label="Table of contents" className="rounded-2xl border border-border bg-card p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    <List size={14} />
                    In this article
                  </p>
                  <ol className="mt-4 max-h-[45vh] space-y-2.5 overflow-y-auto pr-1 text-sm">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className="block leading-snug text-muted-foreground transition hover:text-primary"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <div className="rounded-2xl bg-gradient-to-br from-primary to-orange-500 p-5 text-white shadow-lg shadow-primary/20">
                <p className="text-lg font-semibold leading-snug">Want this done for your store?</p>
                <p className="mt-2 text-sm text-white/90 leading-relaxed">
                  Book a free consultation and a Wings2Sky expert will suggest the right plan.
                </p>
                <Link
                  href="/contact"
                  className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-white/90"
                >
                  Book a Free Consultation
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts - Only show if there are related posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-card px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Related Articles</h2>
              <Link href="/blogs" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                View all articles
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="border-t border-border">
        <CtaBand
          title="Want these strategies applied to your store?"
          description="Book a free consultation and a Wings2Sky expert will suggest the right plan for your business."
        />
      </div>

      <Footer />
    </main>
  )
}

// Generate static params for better performance
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}


// Generate metadata for SEO with dynamic keywords
export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  // Use custom keywords if available, otherwise generate dynamic ones
  const dynamicKeywords = post.keywords && post.keywords.length > 0
    ? post.keywords
    : [
        ...post.tags,
        post.category,
        ...post.title.split(' ').filter(word => word.length > 3),
        'blog',
        'article',
        post.author,
        'wings2sky',
        'e-commerce',
        'online selling'
      ].slice(0, 15) // Increased limit for better SEO

  // Social previews need an absolute URL; article images are hosted on this site
  const coverImage = post.image1 || post.image
  const socialImage = coverImage.startsWith('/') ? `https://wings2sky.com${coverImage}` : coverImage

  const description = post.meta_description || post.excerpt

  return {
    title: post.meta_title || `${post.title} | Wings2Sky Blogs`,
    description,
    keywords: dynamicKeywords.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description,
      images: [socialImage],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [socialImage],
    },
    alternates: {
      canonical: `/blogs/${post.slug}`
    },
    robots: {
      index: true,
      follow: true,
    }
  }
}