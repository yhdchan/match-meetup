import FindMatchList from "../components/FindMatchList";

export default function FindMatchPage({ matches }) {
  return (
    <div>
      <FindMatchList matches={matches} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/matches/allMatches");
  const matches = res.json({ res });

  return {
    props: matches,
  };
};
