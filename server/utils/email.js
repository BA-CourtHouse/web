import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmails = async (data) => {
  try {
    // Notify Admin
    await resend.emails.send({
      from: `Updates <${process.env.SENDER_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New ${data.service} Assessment`,
      html: `
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Team Size:</strong> ${data.teamSize}</p>
        <p><strong>Challenges:</strong> ${data.challenges}</p>
        <p><strong>Goals:</strong> ${data.goals}</p>
      `,
    });

    // Confirm to User
    await resend.emails.send({
      from: `BA CourtHouse <${process.env.SENDER_EMAIL}>`,
      to: [data.email],
      subject: `We've received your ${data.service} Assessment`,
      html: `
        <p>Hi ${data.fullName},</p>
        <p>Thanks for requesting an Agile assessment. We’ll review your input and follow up shortly.</p>
      `,
    });
  } catch (error) {
    console.error('Email error:', error);
  }
};
