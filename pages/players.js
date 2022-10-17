import PlayersList from "../components/PlayersList";

export default function players({ players }) {
  return (
    <div>
      <h1>Players List</h1>
      <PlayersList players={players} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/players/allPlayers");
  const players = res.json({ res });

  return {
    props: players,
  };
};
