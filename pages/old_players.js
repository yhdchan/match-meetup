export default function players({ players }) {
  return <div>players</div>;
}

// import clientPromise from "../lib/mongodb";

// export default function players({ players }) {
//   return (
//     <div className="container">
//       <div>
//         {players.map((player) => {
//           return (
//             <div key={player._id}>
//               <h2>{player.username}</h2>
//               <p>{player.firstName}</p>
//               <p>{player.lastName}</p>
//               <p>{player.postCode}</p>
//               <p>{player.email}</p>
//               <p>{player.position}</p>
//               <br />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   const client = await clientPromise;

//   const db = client.db("projectdb");

//   let players = await db.collection("players").find({}).toArray();
//   players = JSON.parse(JSON.stringify(players));

//   return {
//     props: { players },
//   };
// }
