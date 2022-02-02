import React from 'react';
import MoodTracker from '../Components/MoodTracker';
import Nav from '../Components/Nav';

const edit = (props) => {
    const { scope, id } = props;

    return(
        <div>
            <Nav />
            <MoodTracker scope="edit" id={id} />
        </div>
    )
}

export default edit;