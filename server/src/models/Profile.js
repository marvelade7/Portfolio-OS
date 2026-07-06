import mongoose from 'mongoose';

const socialSchema = new mongoose.Schema(
  {
    label: String,
    value: String,
    href: String,
  },
  { _id: false },
);

const statSchema = new mongoose.Schema(
  {
    label: String,
    value: String,
  },
  { _id: false },
);

const skillSchema = new mongoose.Schema(
  {
    group: String,
    items: [String],
  },
  { _id: false },
);

const experienceSchema = new mongoose.Schema(
  {
    role: String,
    company: String,
    period: String,
    summary: String,
  },
  { _id: false },
);

const educationSchema = new mongoose.Schema(
  {
    school: String,
    credential: String,
    period: String,
    summary: String,
  },
  { _id: false },
);

const profileSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    avatarInitials: { type: String, required: true, trim: true },
    avatar: { type: String, default: '', trim: true },
    avatarUrl: { type: String, default: '', trim: true },
    bio: { type: String, required: true },
    summary: { type: String, required: true },
    socials: [socialSchema],
    stats: [statSchema],
    skills: [skillSchema],
    experience: [experienceSchema],
    education: [educationSchema],
  },
  { timestamps: true },
);

export default mongoose.model('Profile', profileSchema);
