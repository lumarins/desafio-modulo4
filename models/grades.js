import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  subject: String,
  type: String,
  value: Number,
  lastModified: Date,
});

export const Grade = mongoose.model('Grade', schema);