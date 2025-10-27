export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Wings2Sky</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Wings2Sky is a leading digital solutions consultancy dedicated to helping businesses soar to new heights
              in the digital landscape.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              With over a decade of experience, we specialize in e-commerce solutions, digital marketing, and business
              growth strategies. Our team of experts has helped hundreds of businesses establish and scale their online
              presence.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We believe in delivering measurable results and building long-term partnerships with our clients. Our
              mission is to empower businesses with the tools and strategies they need to succeed in the digital
              economy.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <p className="text-sm text-muted-foreground">Orders Raised</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted partner for businesses looking to transform their digital presence and achieve
                sustainable growth.
              </p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence, Integrity, Innovation, and Customer Success drive everything we do. We're committed to
                delivering exceptional results and building lasting relationships.
              </p>
            </div>
            <div className="p-6 bg-background rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Expertise</h3>
              <p className="text-muted-foreground">
                E-commerce optimization, marketplace management, digital marketing, and business growth strategies
                tailored to your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
