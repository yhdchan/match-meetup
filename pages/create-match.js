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
      <form onSubmit={handleSubmit}>
        <h1>Create a Match</h1>
        <br />
        <div>
          <label htmlFor="pitch">Pitch:</label>
          <select name="pitch" id="pitch">
            {pitches.map((pitch) => (
              <option key={pitch._id} value={pitch.name}>
                {pitch.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            min={currentDate}
            max="2023-12-31"
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            min="09:00"
            max="22:00"
            required
          ></input>
        </div>
        {/* <p>
        <label for="description">Description:</label>
      </p>
      <textarea
        id="description"
        name="description"
        // rows="4"
        // cols="50"
        placeholder="Description"
        onChange={handleChange}
      ></textarea> */}
        <br />
        <div>
          <button type="submit">Confirm</button>
        </div>
      </form>
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
