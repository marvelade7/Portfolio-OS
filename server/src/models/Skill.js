import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    icon: { type: String, default: 'badge-check', trim: true },
    level: { type: String, default: 'Intermediate', trim: true },
    category: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export default mongoose.model('Skill', skillSchema);