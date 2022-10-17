import { Schema, model, models } from "mongoose";

const pitchSchema = new Schema({
  name: String,
  changingRooms: Boolean,
  goals: Boolean,
  lighting: Boolean,
  postCode: String,
  surface: String,
  toilets: Boolean,
  contactNumber: String,
  freeParking: Boolean,
  latitude: String,
  longitude: String,
});

const Pitch = models.Pitch || model("Pitch", pitchSchema);

export default Pitch;
