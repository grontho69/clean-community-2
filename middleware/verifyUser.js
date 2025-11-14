import admin from "firebase-admin";
import fs from "fs";


// Load Firebase Admin SDK
if (!admin.apps.length) {
const serviceAccount = JSON.parse(fs.readFileSync(process.env.FIREBASE_ADMIN_KEY_PATH));
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}


export default async function verifyUser(req, res, next) {
const token = req.headers.authorization?.split(" ")[1];
if (!token) return res.status(401).json({ error: "Unauthorized" });


try {
const decoded = await admin.auth().verifyIdToken(token);
req.user = decoded;
next();
} catch (err) {
res.status(401).json({ error: "Invalid token" });
}
}
