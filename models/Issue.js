import mongoose from "mongoose";


const issueSchema = new mongoose.Schema({
title: String,
category: String,
location: String,
imageUrl: String,
description: String,
amount: Number,
reporterEmail: String,
date: { type: Date, default: Date.now }
});


export default mongoose.model('Issue', issueSchema);