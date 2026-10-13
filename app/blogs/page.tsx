import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Badge, CtaBand, GradientText, HeroBackdrop } from "@/components/page-sections"
import BlogCard, { PostMeta } from "@/components/blog-card"

export const metadata: Metadata = {
  title: "Wings2Sky Blog - Expert Tips on E-Commerce, Digital Marketing & Growth Guides",
  description:
    "Explore expert blogs on e-commerce growth, Amazon & Flipkart seller strategies, digital marketing insights, and website development tips to help your business scale faster.",
}

export default function BlogsPage() {
  // Newest first; the latest post is featured at the top
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const [featuredPost, ...otherPosts] = sortedPosts

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-16 md:pb-16">
        <HeroBackdrop />
        <div className="relative mx-auto max-w-4xl text-center">
          <Badge>Wings2Sky Blog</Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
            E-commerce <GradientText>Insights & Blog</GradientText>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Stay updated with the latest trends, strategies, and best practices in e-commerce and digital marketing.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Featured post */}
          {featuredPost && (
            <article className="group overflow-hidden rounded-3xl border border-border bg-background shadow-xl shadow-primary/5 transition hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
              <Link href={`/blogs/${featuredPost.slug}`} className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/9] w-full overflow-hidden lg:aspect-auto lg:min-h-[22rem]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
                    <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">Latest</span>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-primary">
                      {featuredPost.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <Clock size={13} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight transition group-hover:text-primary">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3">{featuredPost.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <PostMeta author={featuredPost.author} date={featuredPost.date} />
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read article
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          )}

          {/* All other posts */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <p className="mt-12 text-center text-muted-foreground">
            Stay tuned for more insights and updates on e-commerce trends and strategies.
          </p>
        </div>
      </section>

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
