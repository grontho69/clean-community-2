import mongoose from "mongoose";


export default async function connectDB(){
try{
await mongoose.connect(process.env.MONGODB_URI);
console.log('MongoDB Connected');
}catch(err){
console.error('DB Error', err);
process.exit(1);
}
}