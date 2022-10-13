import { connectToDatabase } from "../util/mongodb";

export default function players({ players }) {
  const handleClick = async () => {
    const username = "13OCT";
    const data = await fetch(
      `http://localhost:3000/api/createAccount?username=${username}`
    );
  };

  return (
    <>
      <button onClick={() => handleClick()}>ADD</button>
      <ol>
        {players.map((player) => (
          <li key={player._id}>{player.username}</li>
        ))}
      </ol>
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection("players").find({}).toArray();

  const players123 = JSON.parse(JSON.stringify(data));

  return {
    props: { players: players123 },
  };
}
