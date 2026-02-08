import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navBar">
      <ul className="navBarList">
        <li className="navBarListItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navBarListItem">
          <Link to="/Catalog">Catalog</Link>
        </li>
        <li className="navBarListItem">
          <Link to="/">Cart</Link>
        </li>
        <li className="navBarListItem">
          <Link to="/">Sales</Link>
        </li>
      </ul>

      <ul className="loginArea">
        {!user ? (
          <>
            <li>
              <Link to="/Login">
                <button>Login</button>
              </Link>
            </li>
            <li>
              <Link to="/Signin">
                <button>Signin</button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>Welcome, {user.name}</li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
