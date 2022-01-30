import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const { id } = props;

    const deleteMood = (e) => {  
        const url = `http://localhost:8000/api/mood/${id}`;
        
        axios.delete(url)
        .then((res) => {
            navigate("/home");
        })
        .catch((err)=> {
            console.log(err);
        })       
    }

    return (
        <button type="button" className="deleteButton" onClick={deleteMood}>Delete</button>
    );
}

export default DeleteButton;