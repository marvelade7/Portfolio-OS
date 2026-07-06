import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.log('MongoDB disabled: MONGO_URI is not set.');
    return false;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500,
    });
    console.log(`MongoDB connected: ${mongoose.connection.name}`);
    return true;
  } catch (error) {
    console.log(`MongoDB unavailable: ${error.message}`);
    return false;
  }
}

export function isMongoReady() {
  return mongoose.connection.readyState === 1;
}
