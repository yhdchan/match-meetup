import PlayersList from "../components/PlayersList";

export default function players({ players }) {
  return (
    <div>
      <header className="bg-inherit">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="pl-2 text-3xl font-bold tracking-tight text-inherit">
            Players Ranking
          </h1>
        </div>
      </header>
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
