import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InfoList from "./components/InfoList";
import SideBar from "./components/SideBar";
import StatCard from "./components/StatCard";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
