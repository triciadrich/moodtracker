import React from 'react';
import Nav from '../Components/Nav';
import Login from '../Components/Login.js';

const edit = (props) => {
    const { scope, id } = props;

    return(
        <div>
            <Nav />
            <Login />
        </div>
    )
}

export default edit;