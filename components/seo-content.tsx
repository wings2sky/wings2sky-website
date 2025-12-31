"use client"

import { 
  ShoppingBag, 
  Globe, 
  Search, 
  Camera, 
  BarChart3, 
  Store, 
  TrendingUp,
  Package,
  CreditCard,
  Truck,
  FileText,
  Users,
  Target,
  Zap
} from "lucide-react"
import Link from "next/link"

export default function SEOContent() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Digital Solutions Under One Roof
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a leading <strong>digital marketing agency in Delhi</strong> and <strong>ecommerce services provider in Dwarka</strong>, 
            Wings2Sky offers comprehensive <strong>e-commerce solutions</strong> and <strong>digital transformation</strong> services 
            to help businesses achieve exponential growth.
          </p>
        </div>

        {/* E-Commerce Services Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingBag className="text-primary" size={32} />
            <h3 className="text-3xl font-bold text-foreground">
              E-Commerce Services in Delhi & Dwarka
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card p-8 rounded-xl border border-border">
              <h4 className="text-2xl font-semibold text-foreground mb-4">
                Best E-Commerce Service Provider in Dwarka, Delhi
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wings2Sky is recognized as one of the <strong>top ecommerce companies</strong> in Delhi, 
                specializing in <strong>ecommerce management</strong> and <strong>online store development</strong>. 
                We help businesses understand <strong>what is ecommerce</strong> and leverage the power of 
                <strong>online commerce</strong> to sell products effectively on the <strong>biggest ecommerce platforms</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our <strong>ecommerce consulting</strong> services guide you through every step of building 
                a successful <strong>online shopping platform</strong>. From identifying the <strong>best ecommerce websites</strong> 
                for your business to determining which <strong>ecommerce products to sell</strong>, we provide 
                comprehensive <strong>ebusiness</strong> solutions.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h4 className="text-2xl font-semibold text-foreground mb-4">
                Marketplace Management Services
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our expert <strong>marketplace management</strong> team handles all aspects of selling on major platforms. 
                We provide <strong>Amazon listing services</strong> and <strong>Flipkart product listing</strong> optimization 
                to maximize your product visibility and sales.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Amazon listing services</strong> with A+ content optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Flipkart product listing</strong> with enhanced catalog management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Multi-marketplace <strong>ecommerce management</strong> strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Digital Marketing & Website Development */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="text-primary" size={32} />
            <h3 className="text-3xl font-bold text-foreground">
              Digital Marketing Agency Delhi & Website Development
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <Search className="text-primary mb-4" size={28} />
              <h4 className="text-xl font-semibold text-foreground mb-3">
                SEO Services Delhi
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Our <strong>SEO services in Delhi</strong> and <strong>ecommerce SEO</strong> strategies help 
                improve your search rankings and drive organic traffic. We optimize your online presence 
                for better visibility on search engines.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <Target className="text-primary mb-4" size={28} />
              <h4 className="text-xl font-semibold text-foreground mb-3">
                PPC Management & Google Ads Delhi
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Expert <strong>PPC management</strong> and <strong>Google Ads in Delhi</strong> services to 
                maximize your return on ad spend. We create targeted campaigns that drive qualified leads 
                and increase conversions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <Globe className="text-primary mb-4" size={28} />
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Website Development Delhi
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Professional <strong>website development in Delhi</strong> with <strong>Shopify development</strong> 
                and <strong>WooCommerce expert</strong> services. We create responsive, high-converting 
                <strong>ecommerce website design</strong> solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Marketing */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-primary" size={32} />
            <h3 className="text-3xl font-bold text-foreground">
              Social Media Marketing Delhi
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border">
              <h4 className="text-2xl font-semibold text-foreground mb-4">
                Facebook Marketing & Instagram Advertising
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>social media marketing in Delhi</strong> services include strategic 
                <strong>Facebook marketing</strong> and <strong>Instagram advertising</strong> campaigns 
                designed to engage your target audience and drive sales.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We help businesses build a strong social media presence, create engaging content, 
                and run targeted ad campaigns that deliver measurable results.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h4 className="text-2xl font-semibold text-foreground mb-4">
                Business Growth Solutions
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As your trusted <strong>Delhi ecommerce agency</strong> and <strong>Dwarka digital marketing</strong> 
                partner, we provide comprehensive <strong>business growth solutions</strong> that focus on 
                <strong>online sales increase</strong> and sustainable growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our data-driven approach combines <strong>digital marketing</strong>, <strong>marketplace management</strong>, 
                and <strong>ecommerce consulting</strong> to create a holistic growth strategy.
              </p>
            </div>
          </div>
        </div>

        {/* E-Commerce Operations */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Package className="text-primary" size={32} />
            <h3 className="text-3xl font-bold text-foreground">
              Complete E-Commerce Operations Support
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <Camera className="text-primary mb-4" size={24} />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Product Photography Delhi
              </h4>
              <p className="text-muted-foreground text-sm">
                Professional <strong>product photography in Delhi</strong> with studio-quality images 
                optimized for e-commerce platforms.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <FileText className="text-primary mb-4" size={24} />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Catalog Management
              </h4>
              <p className="text-muted-foreground text-sm">
                Efficient <strong>catalog management</strong> services to organize and optimize your 
                product listings across all marketplaces.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <BarChart3 className="text-primary mb-4" size={24} />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Inventory Management
              </h4>
              <p className="text-muted-foreground text-sm">
                Advanced <strong>inventory management</strong> solutions to track stock levels, 
                prevent overselling, and optimize fulfillment.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <CreditCard className="text-primary mb-4" size={24} />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Payment Gateway Integration
              </h4>
              <p className="text-muted-foreground text-sm">
                Seamless <strong>payment gateway integration</strong> for secure and efficient 
                transaction processing.
              </p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <Truck className="text-primary mb-4" size={24} />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Logistics Support
              </h4>
              <p className="text-muted-foreground">
                Comprehensive <strong>logistics support</strong> to streamline your order fulfillment 
                and delivery processes, ensuring customer satisfaction.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <TrendingUp className="text-primary mb-4" size={24} />
              <h4 className="text-lg font-semibold text-foreground mb-2">
                E-Commerce & Digital Solutions
              </h4>
              <p className="text-muted-foreground">
                End-to-end <strong>e-commerce</strong> and <strong>digital solutions</strong> that 
                transform your business into a thriving online enterprise.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Wings2Sky */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary rounded-2xl p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              E-Commerce & Web Development Experts
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As <strong>digital transformation partners</strong>, we combine expertise in 
              <strong>e-commerce</strong>, <strong>digital marketing</strong>, and 
              <strong>marketplace management</strong> to deliver comprehensive solutions that drive 
              <strong>business growth</strong> and <strong>online sales</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Zap className="text-primary mx-auto mb-4" size={32} />
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Fast Implementation
              </h4>
              <p className="text-muted-foreground">
                Quick setup and deployment of your e-commerce solutions
              </p>
            </div>
            <div className="text-center">
              <Store className="text-primary mx-auto mb-4" size={32} />
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Multi-Platform Expertise
              </h4>
              <p className="text-muted-foreground">
                Experience across all major e-commerce platforms and marketplaces
              </p>
            </div>
            <div className="text-center">
              <BarChart3 className="text-primary mx-auto mb-4" size={32} />
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Data-Driven Results
              </h4>
              <p className="text-muted-foreground">
                Measurable growth with analytics and performance tracking
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card p-12 rounded-2xl border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Grow Your Online Business?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with Wings2Sky, the <strong>best ecommerce service provider in Dwarka Delhi</strong>. 
            Let us help you navigate the world of <strong>ecommerce selling products</strong> and 
            achieve success on the <strong>biggest ecommerce platforms</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

