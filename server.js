const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/issues", require("./routes/issues"));
app.use("/api/contribution", require("./routes/contribution"));


app.get("/", (req, res) => {
res.send("Clean Community Server Running");
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
connectDB();
});