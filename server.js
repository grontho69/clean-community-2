import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import issueRoutes from "./routes/issues.js";
import contributionRoutes from "./routes/contribution.js";


dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


connectDB();


app.get('/', (req,res)=>{
res.send('Clean Community API Running');
});


app.use('/api/issues', issueRoutes);
app.use('/api/contributions', contributionRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));