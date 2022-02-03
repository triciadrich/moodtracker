import React from 'react';
import Nav from '../Components/Nav';
import Login from '../Components/Login.js';

const edit = (props) => {
    const { scope, id, loggedIn, setLoggedIn } = props;

    return(
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
    )
}

export default edit;