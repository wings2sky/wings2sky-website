import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface BlogDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    notFound()
  }

  // Improved related posts logic
  const getRelatedPosts = (currentPost: typeof post) => {
    return blogPosts
      .filter(p => p.id !== currentPost.id) // Exclude current post
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
      .slice(0, 2) // Get top 2
  }

  const relatedPosts = getRelatedPosts(post)

  return (
      <>
      <Navigation />
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blogs
        </Link>

        {/* Article Header */}
        <article className="bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full aspect-[16/9]">
  <Image
    src={post.image1 || post.image}
    alt={post.title}
    fill
    className="object-contain"
    priority
  />
</div>


          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {post.readTime}
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-headings:mb-4 prose-p:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Related Posts - Only show if there are related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blogs/${relatedPost.id}`}>
                  <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-border">
                    <div className="relative h-40 w-full">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                        <span className="text-xs text-muted-foreground">{relatedPost.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>By {relatedPost.author}</span>
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Fallback if no related posts */}
        {relatedPosts.length === 0 && (
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">More Articles</h2>
            <p className="text-muted-foreground mb-6">Check out our other blog posts</p>
            <Link 
              href="/blogs" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Blogs
            </Link>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  )
}

// Generate static params for better performance
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { id } = await params
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | Wings2Sky Blogs`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}