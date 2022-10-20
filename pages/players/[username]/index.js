export default function index({ player }) {
  return (
    <div>
      <h1>Profile</h1>
      <img src={player.img} width={200} />
      <div>
        <p>Username: {player.username}</p>
        <p>Position: {player.position}</p>
        <p>First name: {player.firstName}</p>
        <p>Last name: {player.lastName}</p>
        <p>Post Code: {player.postCode}</p>
        <p>Email: {player.email}</p>
        <div>
          Achievements:
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
