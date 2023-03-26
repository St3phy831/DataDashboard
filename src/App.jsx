import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SideBar from "./components/SideBar";
import StatCard from "./components/StatCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/characters?limit=50&apikey=${API_KEY}`
      );
      const json = await response.json();
      console.log(json);
      setList(json["data"]["results"]);
      console.log(list);
    };
    fetchCharacters().catch(console.error);
  }, []);

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
    </div>
  );
}

export default App;
