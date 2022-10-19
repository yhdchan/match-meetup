import Player from "../../../models/playerModel";
import connectMongo from "../../../util/connectMongo";
const mongoose = require("mongoose");

export default async function updatePlayerTrophy(
  { query: { _id, motm, handShake, heart } },
  res
) {
  try {
    await connectMongo();
    const updatedPlayer = await Player.updateOne(
      {
        _id: new mongoose.Types.ObjectId(_id),
      },
      {
        $inc: {
          motm_count: 1,
        },
      }
    ).then((result) => res.status(200).json(result));
  } catch (error) {
    res.json({ error });
  }
}
