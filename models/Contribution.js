import mongoose from "mongoose";


const contribSchema = new mongoose.Schema({
issueId: String,
issueTitle: String,
email: String,
amount: Number,
date: { type: Date, default: Date.now }
});


export default mongoose.model('Contribution', contribSchema);