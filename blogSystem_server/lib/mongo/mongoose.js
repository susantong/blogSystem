import mongoose from 'mongoose';
mongoose.Promise = global.Promise; 
mongoose.connect('localhost:27017/blog');

export default mongoose;