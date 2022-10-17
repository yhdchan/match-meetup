import Player from "../../../models/playerModel";
import connectMongo from "../../../util/connectMongo";

export default async function getPlayerByUsername(
  { query: { username } },
  res
) {
  // const { username } = req.query;
  try {
    await connectMongo();
    const player = await Player.find({ username: username });
    if (player.length > 0) {
      res.status(200).json(player[0]);
    } else {
      // Link to some page with no such username message
      res.status(404).send({ error: "No such username" });
    }
  } catch (error) {
    res.json({ error });
  }
}
