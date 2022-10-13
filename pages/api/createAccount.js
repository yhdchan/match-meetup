import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const data = req.query;

  const response = db.collection("players").insertOne(data);

  res.json(response);
}
