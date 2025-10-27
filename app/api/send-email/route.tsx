import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get email configuration from environment variables
    const recipientEmail = process.env.CONTACT_EMAIL || "your-email@example.com"
    const sendgridApiKey = process.env.SENDGRID_API_KEY

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `

    if (sendgridApiKey) {
      try {
        const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sendgridApiKey}`,
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: recipientEmail }],
                subject: `New Contact: ${subject}`,
              },
            ],
            from: { email: "noreply@wings2sky.com", name: "Wings2Sky" },
            content: [
              {
                type: "text/html",
                value: emailContent,
              },
            ],
            replyTo: { email: email },
          }),
        })

        if (!response.ok) {
          console.error("SendGrid error:", await response.text())
          return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
        }
      } catch (sendgridError) {
        console.error("SendGrid API error:", sendgridError)
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
      }
    } else {
      // Fallback: log the email if SendGrid is not configured
      console.log("Email would be sent to:", recipientEmail)
      console.log("From: noreply@wings2sky.com")
      console.log("Content:", emailContent)
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
