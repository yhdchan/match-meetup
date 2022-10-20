import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FindMatchCard from "./FindMatchCard";

export default function FindMatchList({ matches }) {
  const { register, handleSubmit } = useForm();
  const [matchesList, setMatchesList] = useState([]);

  useEffect(() => {
    setMatchesList(matches);
  }, [matches]);

  const dateToNumber = (date) => {
    return Number(
      date
        .slice(0, 16)
        .replace("T", " ")
        .replace("-", "")
        .replace("-", "")
        .replace(" ", "")
        .replace(":", "")
    );
  };

  function onSubmit(data) {
    console.log(data.sort_by);
    if (data.sort_by === 1) {
      const newList = [...matchesList].sort(
        (a, b) => dateToNumber(b.date) - dateToNumber(a.date)
      );
      setMatchesList(newList);
    } else {
      const newList = [...matchesList].sort(
        (a, b) => dateToNumber(a.date) - dateToNumber(b.date)
      );
      setMatchesList(newList);
    }
  }

  return (
    <>
      <header className="bg-inherit">
        <div className="mx-auto max-w-7xl p-6 px-4 sm:px-6 lg:px-8">
          <h1 className="pl-2 text-3xl font-bold tracking-tight text-inherit">
            Find Match
          </h1>
        </div>
        <form className="pl-6" onSubmit={handleSubmit(onSubmit)}>
          <select
            id="sort"
            className="px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Sort By.."
            {...register("sort_by")}
          >
            <option value="1">Date (ascending)</option>
            <option value="2">Date (descending)</option>
            <option value="3">Spaces Remaining(ascending)</option>
            <option value="4">Spaces Remaining(descending)</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full"
          >
            Filter
          </button>
        </form>
      </header>
      {matchesList.map((match) => (
        <FindMatchCard key={match._id} match={match} />
      ))}
    </>
  );
}
