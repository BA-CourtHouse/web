import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  company: String,
  teamSize: String,
  challenges: String,
  goals: String,
  service: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Assessment", assessmentSchema);
