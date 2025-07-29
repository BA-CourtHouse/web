import express from 'express';
import Assessment from '../models/Assessment.js';
import { sendEmails } from '../utils/email.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newAssessment = new Assessment(req.body);
    await newAssessment.save();
    await sendEmails(req.body);
    res.status(200).json({ message: 'Assessment submitted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error submitting assessment.' });
  }
});

export default router;
