import React from 'react';
import Nav from '../Components/Nav';
import Register from '../Components/Register';

const edit = (props) => {
    const { scope, id } = props;

    return(
        <div>
            <Nav />
            <Register />
        </div>
    )
}

export default edit;