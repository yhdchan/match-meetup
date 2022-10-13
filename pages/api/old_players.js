import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("projectdb");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newPlayer = await db.collection("players").insertOne(bodyObject);
      res.json(newPlayer.ops[0]);
      break;
    case "GET":
      const players = await db.collection("players").find({}).toArray();
      res.json({ status: 200, data: players });
      break;
  }
}

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/players", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let players = await res.json();

  return {
    props: { players },
  };
}
