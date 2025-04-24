import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    profile: String,
    image: [
      {
        id: String,
        title: String,
        url: String,
        uploadedAt: Date,
        edit: String,
      },
    ],
  },
  { timestamps: true }
);
const ImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  title: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  edit: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: String, // or ObjectId if referencing a User model
    required: true,
  },
  uploadedByEmail: {
    type: String, // or ObjectId if referencing a User model
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const users = mongoose.models.User || mongoose.model('User', userSchema);
const imageModel =
  mongoose.models.Image || mongoose.model('Image', ImageSchema);

export { users, imageModel };
