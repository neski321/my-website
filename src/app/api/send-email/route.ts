import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, subject, message, resumeRequest } = body

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return new Response(
      JSON.stringify({ error: "Missing required fields" }), 
      { status: 400 }
    )
  }

  const resumeLink = "https://docs.google.com/document/d/1iEdVgJ2oHSZpCdCDFFT_roXBdrDqMbp1/edit?usp=sharing&ouid=102217200542318471758&rtpof=true&sd=true"
  const resumeViewLink = "https://docs.google.com/document/d/e/2PACX-1vRllB09Fs1jIgJW6r81jrixxwWFSNDy3gjMXv45iO2_E3DtlU_P0mb86dToAH9QrQ/pub?embedded=true"

  try {
    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.log("Resend API key not found. Message would be sent to:", {
        from: "Contact Form from Portfolio website",
        to: "nmotieno@myseneca.ca",
        subject: `New message from ${name}: ${subject}`,
        message: message,
        resumeRequest: resumeRequest || false
      })
      
      // Return success for now (you can implement alternative email service later)
      return new Response(JSON.stringify({ 
        success: true, 
        message: "Message received (email service not configured)" 
      }), { status: 200 })
    }

    // Build email content for you (the owner)
    let ownerEmailContent = `
      <strong>From:</strong> ${name} (${email})<br/>
      <strong>Subject:</strong> ${subject}<br/>
      <strong>Resume Requested:</strong> ${resumeRequest ? "Yes" : "No"}<br/>
      <strong>Message:</strong><br/>
      <p>${message}</p>
    `

    // Send email to you (the owner)
    await resend.emails.send({
      from: "Contact Form from Portfolio website <onboarding@resend.dev>",
      to: "nmotieno@myseneca.ca",
      subject: `New message from ${name}: ${subject}${resumeRequest ? " [Resume Requested]" : ""}`,
      html: ownerEmailContent,
    })

    // If resume was requested, send a response email to the requester with the resume link
    if (resumeRequest) {
      await resend.emails.send({
        from: "Neskines Otieno <onboarding@resend.dev>",
        to: email,
        subject: `Thank you for your interest - Resume Request`,
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! I've received your message and as requested, here's a link to download my resume:</p>
          <p style="margin: 20px 0;">
            <a href="${resumeLink}" style="display: inline-block; padding: 12px 24px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 6px; font-weight: 600;">
              Download Resume
            </a>
          </p>
          <p>You can also view it online <a href="${resumeViewLink}">here</a>.</p>
          <p>I'll get back to you regarding your message soon!</p>
          <p>Best regards,<br/>Neskines Otieno</p>
        `,
      })
    }

    return new Response(JSON.stringify({ 
      success: true,
      message: resumeRequest 
        ? "Message sent! I've also sent you an email with my resume link." 
        : "Message sent successfully!"
    }), { status: 200 })
  } catch (err) {
    console.error("Email sending error:", err)
    return new Response(
      JSON.stringify({ error: "Failed to send email." }), 
      { status: 500 }
    )
  }
}
