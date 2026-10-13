import Image from "next/image"
import { Building2 } from "lucide-react"

const partners = [
  { name: "Amazon", icon: "/amazon.svg" },
  { name: "Flipkart", icon: "/flipkart-icon.svg" },
  { name: "Shopify", icon: "/shopify-icon.svg" },
  { name: "Myntra", icon: "/myntra.svg" },
  { name: "Instagram", icon: "/instagram.svg" },
  { name: "Meta", icon: "/meta.svg" },
  { name: "Meesho", icon: "/meesho.svg" },
]

// Even number of copies: the track slides by exactly half its width, then repeats
const MARQUEE_COPIES = 4

export default function Partnerships() {
  return (
    <section className="border-y border-border bg-card px-4 sm:px-6 lg:px-8 py-12 md:py-14">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
            <Building2 size={13} />
            Trusted by Industry Leaders
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Our Proud{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Partnerships</span>
          </h2>
        </div>

        {/* Partners - continuously scrolling strip, pauses on hover */}
        <div className="marquee relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <ul className="marquee-track py-2">
            {/* The list is repeated so the loop has no visible seam */}
            {Array.from({ length: MARQUEE_COPIES }).flatMap((_, copy) =>
              partners.map((partner) => (
                <li
                  key={`${copy}-${partner.name}`}
                  aria-hidden={copy > 0}
                  className={`mr-4 flex shrink-0 items-center gap-3 rounded-2xl border border-border bg-background py-2.5 pl-2.5 pr-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${
                    copy > 0 ? "marquee-clone" : ""
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white">
                    <Image
                      src={partner.icon}
                      alt=""
                      width={26}
                      height={26}
                      className={`h-[26px] w-[26px] object-contain ${partner.name === "Meesho" ? "scale-150" : ""}`}
                    />
                  </span>
                  <span className="font-semibold text-foreground">{partner.name}</span>
                </li>
              )),
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
