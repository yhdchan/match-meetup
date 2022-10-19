import Match from "../../../models/matchModel";
import connectMongo from "../../../util/connectMongo";

export default async function allMatches(req, res) {
  try {
    await connectMongo();
    const matches = await Match.aggregate([
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
    ]);
    res.status(200).json({ matches });
  } catch (error) {
    res.json({ error });
  }
}
