// pages/api/getCurrentUser.js
import { currentUser } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  const user = await currentUser();
  res.status(200).json(user);
}
