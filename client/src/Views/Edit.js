import React from 'react';
import MoodTracker from '../Components/MoodTracker';
import Nav from '../Components/Nav';

const edit = (props) => {
    const { scope, id, loggedIn, setLoggedIn } = props;

    return(
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}  />
            <MoodTracker scope="edit" id={id} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
    )
}

export default edit;