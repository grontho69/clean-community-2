import express from "express";
import { getAll, create } from "../controllers/contributionController.js";
import verifyUser from "../middleware/verifyUser.js";


const r = express.Router();
r.get('/', getAll);
r.post('/', verifyUser, create);
export default r;