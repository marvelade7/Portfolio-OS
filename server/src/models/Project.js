import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    type: { type: String, required: true, trim: true },
    category: { type: String, default: 'Full Stack', trim: true },
    status: { type: String, required: true, trim: true },
    createdDate: String,
    thumbnail: String,
    description: { type: String, required: true },
    stack: [String],
    techStack: [String],
    impact: String,
    repo: String,
    github: String,
    demo: String,
  },
  { timestamps: true },
);

export default mongoose.model('Project', projectSchema);
