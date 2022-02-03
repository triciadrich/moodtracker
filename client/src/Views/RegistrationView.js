import React from 'react';
import Nav from '../Components/Nav';
import Register from '../Components/Register';

const edit = (props) => {
    const { scope, id, loggedIn, setLoggedIn } = props;

    return(
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Register />
        </div>
    )
}

export default edit;