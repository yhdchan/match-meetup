import Match from "../../../models/matchModel";
import connectMongo from "../../../util/connectMongo";

export default async function addMatch(req, res) {
  try {
    await connectMongo();
    const { body } = req;
    const newMatch = Match.create(body);
    res.status(201).json({ newMatch });
  } catch (error) {
    res.json({ error });
  }
}
