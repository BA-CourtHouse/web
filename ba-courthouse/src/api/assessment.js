// server/routes/assessment.js
import express from 'express';
import { Resend } from 'resend';

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  const { name, email, phone, question1, question2, service } = req.body;

  try {
    const message = `
      <strong>New ${service} Assessment Request</strong><br/><br/>
      <strong>Name:</strong> ${name} <br/>
      <strong>Email:</strong> ${email} <br/>
      <strong>Phone:</strong> ${phone} <br/>
      <strong>Challenge:</strong> ${question1} <br/>
      <strong>Expected Outcome:</strong> ${question2}
    `;

    const data = await resend.emails.send({
      from: 'BA CourtHouse <technical@bacourthouse.com>',
      to: 'info@bacourthouse.com',
      subject: `New ${service} Assessment Submission`,
      html: message,
    });

    res.status(200).json({ success: true, message: 'Email sent', data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Email failed', error: error.message });
  }
});

export default router;
