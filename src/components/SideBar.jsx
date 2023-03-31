import Menu from "./Menu";
import { Outlet } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div>
      <div className="SideBar">
        <h2>
          <span className="red">Marvel</span>{" "}
          <span className="blue">DataDashboard</span>
        </h2>
        <Menu></Menu>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
