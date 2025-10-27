import type { Metadata } from "next"
import PhotoshootClient from "./photoshoot-client"

export const metadata: Metadata = {
  title: "Professional Photoshoot Services - Wings2Sky",
  description:
    "Premium e-commerce photoshoot services for Amazon, Flipkart, and more. Professional product photography with 10+ years of experience.",
  keywords: "photoshoot, product photography, e-commerce photography, professional photography, studio photography",
}

export default function PhotoshootPage() {
  return <PhotoshootClient />
}
