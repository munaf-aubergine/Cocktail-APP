import * as React from "react";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";
interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <nav className="navbar p-0 navbar-expand-lg bg-body-tertiary">
      <div className="bg-dark container-fluid d-flex navbar-light">
        <Link className="navbar-brand text-white" to="/">
          <FaCocktail color="yellow" />
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                aria-current="page"
                to="/drinks"
              >
                Explore
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
