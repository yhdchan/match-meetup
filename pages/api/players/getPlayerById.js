import Player from "../../../models/playerModel";
import connectMongo from "../../../util/connectMongo";
const mongoose = require("mongoose");

export default async function getPlayerById({ query: { _id } }, res) {
  try {
    await connectMongo();
    const player = await Player.find({ _id: new mongoose.Types.ObjectId(_id) });
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
