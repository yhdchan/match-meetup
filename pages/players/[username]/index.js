export default function index({ player }) {
  return (
    <section>
      <div className="py-6 w-full">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Profile
        </h1>
      </div>
      <div className="flex bg-gray-50 rounded-2xl shadow-md w-full sm:w-96 sm:mx-auto">
        <div className="w-full">
          <img src={player.img} className="mx-auto my-4 w-48 h-48" />
          <p className="text-center text-2xl font-bold tracking-tight text-gray-900">
            {player.firstName} {player.lastName}
          </p>
          <div className=" mt-2 mx-auto text-gray-700 text-xl">
            <p>Position: {player.position}</p>
            <p>First name: {player.firstName}</p>
            <p>Last name: {player.lastName}</p>
            <p>Post Code: {player.postCode}</p>
            <p>Email: {player.email}</p>
            Achievements:
            <di></di>
            {player.motm_count > 0 ? (
              <>
                <div>
                  <p>
                    <img src="../images/motm.png" width={70} />
                  </p>
                </div>
                <div>{player.motm_count}</div>
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            {player.handShake_count > 0 ? (
              <>
                <div>
                  <p>
                    <img src="../images/handshake.png" width={60} />
                  </p>
                </div>
                <div>{player.handShake_count}</div>
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            {player.heart_count > 0 ? (
              <>
                <div>
                  <p>
                    <img src="../images/heart.png" width={50} />
                  </p>
                </div>
                <div>{player.heart_count}</div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
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
