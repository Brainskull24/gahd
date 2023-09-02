import "../../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faRightFromBracket,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="navbar-main">
        <div className="nav-logo">
          <a>LOGO</a>
        </div>
        <div className="nav-itemss">
          <a className="nav-fontss">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            <FontAwesomeIcon icon={faBell} size="lg" />
          </a>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ADMIN
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">
                      <b>ADMIN</b>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/changepassword">
                      CHANGE PASSWORD
                      <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/logout">
                      LOGOUT
                      <FontAwesomeIcon icon={faRightFromBracket} />
                    </a>
                  </li>
                </ul>
              </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
