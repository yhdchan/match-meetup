import FindMatchCard from "./FindMatchCard";

export default function FindMatchList({ matches }) {
  return (
    <>
      <header className="bg-inherit">
        <div className="mx-auto max-w-7xl p-6 px-4 sm:px-6 lg:px-8">
          <h1 className="pl-2 text-3xl font-bold tracking-tight text-inherit">
            Find Match
          </h1>
        </div>
        <div className="pl-6">
          <select
            id="sort"
            className="px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Sort By.."
          >
            <option value="1">Start Time</option>
            <option value="2">Spaces Remaining</option>
          </select>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">
            Filter
          </button>
        </div>
      </header>
      {matches.map((match) => (
        <FindMatchCard key={match._id} match={match} />
      ))}
    </>
  );
}
