import Menu from "./Menu";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="SideBar">
      <h2>
        <span className="red">Marvel</span>{" "}
        <span className="blue">DataDashboard</span>
      </h2>
      <Menu></Menu>
    </div>
  );
};

export default SideBar;
