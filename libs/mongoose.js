import mongoose from 'mongoose';

let client = null;
const connectMongoDB = async () => {
  if (client) return;
  try {
    client = await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB connection successful!');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
