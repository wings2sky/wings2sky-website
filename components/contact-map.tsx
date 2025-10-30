"use client"

export default function ContactMap() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">Our Location</h3>

      <div className="w-full h-96 rounded-lg overflow-hidden border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.611111111111!2d77.033889!3d28.580556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b7a8b123456%3A0x7890123456789012!2sPlot%20no.%20505%2C%20Sector%2019%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%20110075!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wings2Sky Office Location"
        />
      </div>

      <div className="bg-card p-6 rounded-lg border border-border">
        <h4 className="font-semibold text-foreground mb-2">Address</h4>
        <p className="text-muted-foreground mb-4">
          Plot no. 505 Sector 19, Dwarka Delhi 110075 India
        </p>
        <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex justify-between">
            <span>Monday - Friday:</span>
            <span>9:00 AM - 6:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday:</span>
            <span>10:00 AM - 4:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday:</span>
            <span>Closed</span>
          </li>
        </ul>
      </div>
    </div>
  )
}