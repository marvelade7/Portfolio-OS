import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Profile from '../models/Profile.js';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import { profile, projects, skillItems, skills } from './data.js';

dotenv.config();

const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ubuntu_portfolio';

await mongoose.connect(uri);
await Promise.all([Profile.deleteMany({}), Project.deleteMany({}), Skill.deleteMany({})]);
await Profile.create({ ...profile, skills });
await Project.insertMany(projects);
await Skill.insertMany(skillItems);
await mongoose.connection.close();

console.log('Seeded Ubuntu portfolio data.');
