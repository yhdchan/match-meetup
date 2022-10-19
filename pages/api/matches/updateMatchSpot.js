import Match from "../../../models/matchModel";
import connectMongo from "../../../util/connectMongo";
const mongoose = require("mongoose");

export default async function addMatch(
  { query: { match_id, _id, side } },
  res
) {
  try {
    await connectMongo();
    if (side === "home") {
      const updatedHome = await Match.updateOne(
        {
          _id: new mongoose.Types.ObjectId(match_id),
        },
        {
          $push: {
            home: [_id],
          },
        }
      ).then((result) => res.status(201).json(result));
    } else {
      const updatedAway = await Match.updateOne(
        {
          _id: new mongoose.Types.ObjectId(match_id),
        },
        {
          $push: {
            away: [_id],
          },
        }
      ).then((result) => res.status(201).json(result));
    }
  } catch (error) {
    res.json({ error });
  }
}
