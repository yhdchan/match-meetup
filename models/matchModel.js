import { ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

const matchSchema = new Schema({
  pitch_id: {
    type: ObjectId,
  },
  pitch_name: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  home: {
    type: [ObjectId],
  },
  away: {
    type: [ObjectId],
  },
});

const Match = models.Match || model("Match", matchSchema);

export default Match;
