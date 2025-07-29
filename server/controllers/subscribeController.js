import Subscriber from "../models/Subscriber.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const subscribeUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "Email already subscribed." });
    }

    const newSubscriber = new Subscriber({ name, email });
    await newSubscriber.save();

    await resend.emails.send({
      from: `BA CourtHouse <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: "Thanks for Subscribing!",
      html: `<p>Hi ${name},</p><p>Thanks for joining our community!</p>`,
    });

    res.status(200).json({ message: "Successfully subscribed!", subscriber: newSubscriber });
  } catch (err) {
    console.error("Subscription Error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
};
