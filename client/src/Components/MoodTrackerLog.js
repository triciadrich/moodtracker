import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteButton from './DeleteButton';

const MoodTrackerLog = (props) => {
    const { loggedIn, setLoggedIn } = props;
    const [moodInfo, setMoodInfo] = useState([]);
    const [refresh, setRefresh] = useState([false]);    

    useEffect(()=>{
        const url = `http://localhost:8000/api/mood/`;
    
            axios.get(url, {withCredentials: true})
                .then(res=>{
                    setMoodInfo(res.data);
                    console.log(res.data);
                })
                .catch((err)=>{
                    console.log(err);
                });  
        }, [refresh]);

        const editNavigate = (id) => {
            navigate(`/edit/${id}`);
        }

        return (
            <div class="container">
                <div className="header">
                    <h1>Mood History</h1> 
                    <p>See how you have been holding up</p>
                </div>
                <div class="container col">
            
                <table>
                    <thead>
                    <tr className="info">
                            <td className ="mood">Mood</td>
                            <td className ="datee">Date</td>
                            <td className ="actions">Actions</td>
                            <td className='images'>Image</td>
                    </tr>
                    </thead>
                    <tbody>
                {
                    moodInfo.map((value, index)=>{
                        return (                        
                            <tr>
                                <td className="mood">{value.mood}</td>
                                <td className="date">{value.date}</td>
                                <td><img className='logimage' src={`http://localhost:8000/api/files/${value.fileName}`}></img></td>
                                <td>
                                   <button> <Link className="edit" to={"/edit/" + value._id}>Details</Link></button>
                                    <DeleteButton id={value._id} refresh={refresh} setRefresh={setRefresh}/>
                                </td>
                                
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
            
            </div>
        </div>
        
        );
    }
            
    export default MoodTrackerLog;