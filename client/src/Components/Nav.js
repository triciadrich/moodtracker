import React from 'react';
import { Link, navigate } from '@reach/router';

const Nav = () => {

    return (
        <div>
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
    );
}

export default Nav;