export default function index({ match }) {
  const time = match.date.slice(0, 16).replace("T", " ");
  return (
    <div>
      <h1>Date:{time}</h1>
      <h1>Pitch:{match.pitch.name}</h1>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  console.log(context.params._id, "<==== params");
  const res = await fetch(
    `http://localhost:3000/api/matches/getMatchById?_id=${context.params._id}`
  );

  const match = await res.json();

  return {
    props: { match },
  };
};
