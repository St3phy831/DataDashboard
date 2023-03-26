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
      <InfoList></InfoList>
    </div>
  );
}

export default App;
