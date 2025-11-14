import Contribution from "../models/Contribution.js";
import { success, error } from "../utils/response.js";


export async function getAll(req, res){
try{
const filter = {};
if(req.query.email) filter.email = req.query.email;
const data = await Contribution.find(filter).sort({ date: -1 });
success(res, data);
}catch(err){ error(res, err.message); }
}


export async function create(req, res){
try{
const doc = await Contribution.create(req.body);
success(res, doc);
}catch(err){ error(res, err.message); }
}