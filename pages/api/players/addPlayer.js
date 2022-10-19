import Player from "../../../models/playerModel";
import connectMongo from "../../../util/connectMongo";

export default async function addPlayer(req, res) {
  try {
    await connectMongo();
    const { body } = req;
    const newPlayer = Player.create(body).then((result) =>
      res.status(201).json(result)
    );
  } catch (error) {
    res.json({ error });
  }
}
