import InfoList from "../components/InfoList";
import StatCard from "../components/StatCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="Stats">
        <StatCard message="Returned 50 Characters"></StatCard>
        <StatCard message="Total Characters in API: 1562"></StatCard>
        <StatCard
          message={
            "Total Characters shown: " + ((50 / 1562) * 100).toFixed(2) + "%"
          }
        ></StatCard>
      </div>
      <p className="message">
        <strong>NOTE:</strong> Only the first 50 Marvel characters are returned
        in alphabetical order based on the starting letter of the character's
        name. By default, the first 50 characters starting with the letter 'A'
        are shown.
      </p>
      <InfoList></InfoList>
    </div>
  );
};

export default Home;
