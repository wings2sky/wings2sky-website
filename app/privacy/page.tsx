import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                Wings 2 Sky ("we" or "us" or "our") operates the website. This page informs you of our policies
                regarding the collection, use, and disclosure of personal data when you use our website and the choices
                you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information Collection and Use</h2>
              <p className="text-muted-foreground">
                We collect several different types of information for various purposes to provide and improve our
                service to you.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Types of Data Collected:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Personal Data:</strong> While using our website, we may ask you to provide us with certain
                  personally identifiable information that can be used to contact or identify you ("Personal Data").
                  This may include, but is not limited to:
                  <ul className="list-circle list-inside ml-4 mt-2 space-y-1">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Address, State, Province, ZIP/Postal code, City</li>
                    <li>Cookies and Usage Data</li>
                  </ul>
                </li>
                <li>
                  <strong>Usage Data:</strong> We may also collect information on how the website is accessed and used
                  ("Usage Data"). This may include information such as your computer's Internet Protocol address,
                  browser type, browser version, the pages you visit, the time and date of your visit, and other
                  diagnostic data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use of Data</h2>
              <p className="text-muted-foreground">Wings 2 Sky uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>To provide and maintain our website</li>
                <li>To notify you about changes to our website</li>
                <li>To allow you to participate in interactive features of our website</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our website</li>
                <li>To monitor the usage of our website</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Security of Data</h2>
              <p className="text-muted-foreground">
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                <p className="text-foreground font-semibold">Wings 2 Sky</p>
                <p className="text-muted-foreground">Email: privacy@wings2sky.com</p>
                <p className="text-muted-foreground">Phone: +91-XXXXXXXXXX</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
