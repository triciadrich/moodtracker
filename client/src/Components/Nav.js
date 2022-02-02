import React from 'react';
import { Link, navigate } from '@reach/router';


const Nav = () => {

    return (

        <div>
            
        <nav>
        <div class="blue-grey nav-wrapper">
            <Link to="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></Link>
            <ul class="right hide-on-med-and-down">
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

        <ul class="sidenav" id='mobile-demo'>
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
    );
}

export default Nav;