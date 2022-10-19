import Match from "../../../models/matchModel";
import Pitch from "../../../models/pitchModel";
import connectMongo from "../../../util/connectMongo";

export default async function addMatch(req, res) {
  try {
    await connectMongo();
    const pitchRes = await Pitch.find({ name: req.body.pitch_name });
    const pitchId = pitchRes[0]._id;
    const { body } = req;

    body.pitch_id = pitchId;
    body.date = body.date + "T" + body.time + ":00.000+00:00";
    delete body.time;

    const newMatch = await Match.create(body).then((result) =>
      res.status(201).json(result)
    );
  } catch (error) {
    res.json({ error });
  }
}
