import Match from "../../../models/matchModel";
import connectMongo from "../../../util/connectMongo";
const mongoose = require("mongoose");

export default async function getMatchById({ query: { _id } }, res) {
  try {
    await connectMongo();
    const match = await Match.aggregate([
      {
        $lookup: {
          from: "pitches",
          localField: "pitch_id",
          foreignField: "_id",
          as: "pitch",
        },
      },
      {
        $unwind: {
          path: "$pitch",
        },
      },
      {
        $lookup: {
          from: "players",
          localField: "home",
          foreignField: "_id",
          as: "homePlayers",
        },
      },
      {
        $lookup: {
          from: "players",
          localField: "away",
          foreignField: "_id",
          as: "awayPlayers",
        },
      },
      {
        $match: {
          _id: new mongoose.Types.ObjectId(_id),
        },
      },
    ]);

    if (match.length > 0) {
      res.status(200).json(match[0]);
    } else {
      // Link to some page with no such username message
      res.status(404).send({ error: "No such match" });
    }
  } catch (error) {
    res.json({ error });
  }
}
