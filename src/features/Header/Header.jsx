import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navBar">
      <ul className="navBarList">
        <li className="navBarListItem">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="navBarListItem">
          <Link to={`/Catalog`}>Catalog</Link>
        </li>
        <li className="navBarListItem">
          <Link to={`/`}>Cart</Link>
        </li>
        <li className="navBarListItem">
          <Link to={`/`}>Sales</Link>
        </li>
      </ul>
    </nav>
  );
}
