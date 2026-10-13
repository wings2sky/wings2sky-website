import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"

export interface BlogCardPost {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  readTime: string
  author: string
  date: string
}

export const formatBlogDate = (date: string) =>
  new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase()

export function PostMeta({ author, date }: { author: string; date: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary"
      >
        {getInitials(author)}
      </span>
      <div className="text-sm">
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-xs text-muted-foreground">{formatBlogDate(date)}</p>
      </div>
    </div>
  )
}

export default function BlogCard({ post }: { post: BlogCardPost }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-background transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
      <Link href={`/blogs/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-3 text-xs font-medium">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-primary">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground line-clamp-2 transition group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
          <div className="mt-auto pt-5">
            <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
              <PostMeta author={post.author} date={post.date} />
              <ArrowRight
                size={18}
                className="shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary"
              />
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
