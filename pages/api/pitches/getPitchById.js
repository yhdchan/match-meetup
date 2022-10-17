import Pitch from "../../../models/pitchModel";
import connectMongo from "../../../util/connectMongo";
const mongoose = require("mongoose");

export default async function getPitchById({ query: { _id } }, res) {
  try {
    await connectMongo();
    const pitch = await Pitch.find({ _id: new mongoose.Types.ObjectId(_id) });
    if (pitch.length > 0) {
      res.status(200).json(pitch[0]);
    } else {
      // Link to some page with no such username message
      res.status(404).send({ error: "No such pitch" });
    }
  } catch (error) {
    res.json({ error });
  }
}
