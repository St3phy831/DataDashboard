import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InfoList from "./components/InfoList";
import SideBar from "./components/SideBar";
import StatCard from "./components/StatCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
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
}

export default App;
