import { connectToDatabase } from "@/lib/mongodb"; // Adjust path as per your setup
import { clerkClient } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  const session = await clerkClient.sessions.getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === "POST") {
    const { orderId, amount, paymentId, userDetails } = req.body;

    const { db } = await connectToDatabase(); // Connect to MongoDB

    const donationsCollection = db.collection("donations");

    try {
      const donation = {
        userId: session.user.id,
        orderId,
        amount,
        paymentId,
        userDetails,
        createdAt: new Date(),
      };

      const result = await donationsCollection.insertOne(donation);

      res.status(201).json({
        message: "Donation stored successfully",
        donationId: result.insertedId,
      });
    } catch (error) {
      res.status(500).json({ error: "Error storing donation" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
