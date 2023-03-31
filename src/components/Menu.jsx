import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">Dashboard</Link>
      <Link to="/">Search</Link>
      <Link to="/">About</Link>
    </nav>
  );
};

export default Menu;
