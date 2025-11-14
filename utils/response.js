export const success = (res, data) => res.json(data);
export const error = (res, msg, code=500) => res.status(code).json({ error: msg })