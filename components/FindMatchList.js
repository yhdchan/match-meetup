import FindMatchCard from "./FindMatchCard";

export default function FindMatchList({ matches }) {
  return (
    <>
      <header className="bg-inherit">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="pl-2 text-3xl font-bold tracking-tight text-inherit">
            Find Match
          </h1>
        </div>
      </header>
      {matches.map((match) => (
        <FindMatchCard key={match._id} match={match} />
      ))}
    </>
  );
}
