import SingleMatch from "../../../components/SingleMatch";

export default function index({ match }) {
  return (
    <div>
      <SingleMatch match={match} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/matches/getMatchById?_id=${context.params._id}`
  );

  const match = await res.json();

  return {
    props: { match },
  };
};
