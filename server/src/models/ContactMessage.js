import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    subject: { type: String, default: 'Portfolio inquiry', trim: true },
    message: { type: String, required: true, trim: true },
    source: { type: String, default: 'ubuntu-desktop', trim: true },
  },
  { timestamps: true },
);

export default mongoose.model('ContactMessage', contactMessageSchema);
