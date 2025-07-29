import { Resend } from 'resend'

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY)

export const sendContactEmail = async ({ to, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Bacourthouse <no-reply@bacourthouse.com>',
      to,
      subject,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return null
    }

    return data
  } catch (err) {
    console.error('Failed to send email:', err)
    return null
  }
}