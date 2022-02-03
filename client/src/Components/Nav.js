import React from "react";
import { Link, navigate } from "@reach/router";
import axios from 'axios';

const Nav = (props) => {
  const { loggedIn, setLoggedIn } = props; 
  
  const logoutUser = (e) => {
    e.preventDefault();
    const url = 'http://localhost:8000/api/users/logout';

    axios.post(url, {}, {withCredentials: true})
      .then((res)=>{
        setLoggedIn(false);
        navigate('/');
      })
      .catch((err)=>{
        console.log(err);
      })
  }

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
            {loggedIn ?
              <li>
                <input type="button" value="logout" onClick={logoutUser} />
              </li> : null
            }       
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
