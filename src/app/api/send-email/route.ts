import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, subject, message } = body

  try {
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
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 })
  }
}
