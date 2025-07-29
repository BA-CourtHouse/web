// pages/api/send-email.js (or similar)
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { to, subject, html, from = 'your-domain@yourdomain.com' } = req.body;
    
    const data = await resend.emails.send({
      from,
      to,
      subject,
      html
    });

    res.status(200).json(data);
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
}