import type { Metadata } from "next"
import { notFound } from "next/navigation"
import IndustryDetail from "@/components/industry-detail"
import { getIndustry, industries } from "@/lib/industries-data"

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)

  if (!industry) {
    return {
      title: "Industry Not Found | Wings2Sky",
      description: "The requested industry page could not be found.",
    }
  }

  return {
    title: `Digital Marketing for ${industry.name} | Wings2Sky`,
    description: industry.summary,
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = getIndustry(slug)

  if (!industry) {
    notFound()
  }

  return <IndustryDetail industry={industry} />
}
