import express from "express";
import { getAll, getOne, create } from "../controllers/issueController.js";
import verifyUser from "../middleware/verifyUser.js";


const r = express.Router();
r.get('/', getAll);
r.get('/:id', getOne);
r.post('/', verifyUser, create);
export default r;