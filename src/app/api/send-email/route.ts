import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, subject, message } = body

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return new Response(
      JSON.stringify({ error: "Missing required fields" }), 
      { status: 400 }
    )
  }

  try {
    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.log("Resend API key not found. Message would be sent to:", {
        from: "Contact Form from Portfolio website",
        to: "nmotieno@myseneca.ca",
        subject: `New message from ${name}: ${subject}`,
        message: message
      })
      
      // Return success for now (you can implement alternative email service later)
      return new Response(JSON.stringify({ 
        success: true, 
        message: "Message received (email service not configured)" 
      }), { status: 200 })
    }

    // Send email via Resend
    await resend.emails.send({
      from: "Contact Form from Portfolio website <onboarding@resend.dev>",
      to: "nmotieno@myseneca.ca",
      subject: `New message from ${name}: ${subject}`,
      html: `
        <strong>From:</strong> ${name} (${email})<br/>
        <strong>Subject:</strong> ${subject}<br/>
        <strong>Message:</strong><br/>
        <p>${message}</p>
      `,
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    console.error("Email sending error:", err)
    return new Response(
      JSON.stringify({ error: "Failed to send email." }), 
      { status: 500 }
    )
  }
}
