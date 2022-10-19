import Player from "../../../models/playerModel";
import connectMongo from "../../../util/connectMongo";

export default async function allPlayers(req, res) {
  try {
    await connectMongo();
    const players = await Player.aggregate([{ $sort: { motm_count: -1 } }]);
    res.status(200).json({ players });
  } catch (error) {
    res.json({ error });
  }
}
