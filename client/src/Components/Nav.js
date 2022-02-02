import React from "react";
import { Link, navigate } from "@reach/router";

const Nav = () => {
  return (
    <div>
      <nav>
        <div class="blue-grey nav-wrapper ">
          <ul>
            <li>
              <Link to="/home">Tracker</Link>
            </li>
            <li>
              <Link to="/log">Logs</Link>
            </li>
            <li>
              <Link to="/resources">Additonal Resources</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
