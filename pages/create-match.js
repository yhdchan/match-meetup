import { useRouter } from "next/router";
import { useState } from "react";

export default function createMatch({ pitches }) {
  const [newMatch, setNewMatch] = useState({});
  const router = useRouter();

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${year}-${month}-${day}`;

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      setNewMatch({
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        pitch_name: document.getElementById("pitch").value,
      });

      const res = await fetch("/api/matches/addMatch", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newMatch),
      });
      // Do something when user sign up successfully
      const newMatchRes = await res.json();
      if (Object.keys(newMatchRes).length === 7)
        router.push(`/find-match/${newMatchRes._id}`);
    } catch (error) {
      // Do something when error
      res.json({ error });
    }
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create a Match
          </h1>
        </div>
      </header>
      <div>
        <div className="bg-gray-100 md:grid md:grid-cols-3 md:gap-6 py-2">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-6 py-2">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                New Match
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Please fill out the form completely and click confirm
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0 px-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label
                      htmlFor="pitch"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pitch
                    </label>
                    <select
                      id="pitch"
                      name="pitch"
                      autoComplete="pitch-name"
                      className="mt-1 block w-full rounded-md bg-white border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled hidden>
                        Select pitch
                      </option>
                      {pitches.map((pitch) => (
                        <option key={pitch._id} value={pitch.name}>
                          {pitch.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={currentDate}
                      max="2023-12-31"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      required
                    ></input>
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      min="09:00"
                      max="22:00"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      required
                    ></input>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows="8"
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-2 py-1"
                        placeholder="Description..."
                        // onChange={handleChange}
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your match.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <a href="/find-match" className="px-4 text-blue-500">
                    Cancel
                  </a>

                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/pitches/allPitches");
  const pitches = await res.json();

  return {
    props: { pitches },
  };
};
