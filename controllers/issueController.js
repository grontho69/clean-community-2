import Issue from "../models/Issue.js";
import { success, error } from "../utils/response.js";


export async function getAll(req, res){
try{
const filter = {};
if(req.query.reporter) filter.reporterEmail = req.query.reporter;
const data = await Issue.find(filter).sort({ date: -1 });
success(res, data);
}catch(err){ error(res, err.message); }
}


export async function getOne(req, res){
try{
const data = await Issue.findById(req.params.id);
success(res, data);
}catch(err){ error(res, err.message, 404); }
}


export async function create(req, res){
try{
const issue = await Issue.create(req.body);
success(res, issue);
}catch(err){ error(res, err.message); }
}