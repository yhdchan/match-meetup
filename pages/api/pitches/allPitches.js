import Pitch from "../../../models/pitchModel";
import connectMongo from "../../../util/connectMongo";

export default async function allPitches(req, res) {
  try {
    await connectMongo();
    const pitches = await Pitch.find();
    res.status(200).json(pitches);
  } catch (error) {
    res.json({ error });
  }
}
