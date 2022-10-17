export default function index({ player }) {
  return (
    <div>
      <h1>This is the info of {player.username}</h1>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/players/getPlayerByUsername?username=${context.params.username}`
  );

  const player = await res.json();

  return {
    props: { player },
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `http://localhost:3000/api/players/getPlayerByUsername?username=${context.params.username}`
//   );

//   const player = res.json();

//   return {
//     props: {player},
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:3000/api/players/allPlayers");

//   const players = res.json({ res });

//   const paths = players.map((player) => ({
//     params: { username: player.username.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
