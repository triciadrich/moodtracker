import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const MoodTracker = (props) => {
    const { scope, id } = props;
    const [date, setDate] = useState("");
    const [mood, setMood] = useState("");
    const [addMood, setAddMood] = useState ("");
    const [log, setLog] = useState ("");
    const [errors, setErrors] = useState("");
    const [displayMood, setDisplayMood] = useState(false);

    useEffect(()=>{

        if ( scope === 'edit' ) {

            const url = `http://localhost:8000/api/mood/${id}`
            
            axios.get(url)
            .then((res)=>{
                setDate(res.data.date);  
                setMood(res.data.mood);
                setAddMood(res.data.mood);
                setLog(res.data.log);
                console.log(res.data);           
            })
            .catch((err)=>{
                console.log(err);
            });

        }
    },[]);

    const submitData = (e) => {
        e.preventDefault();

        const data = {
            date: date,
            mood: mood,            
            log: log
        };

        const editNavigate = (id) => {
            navigate(`/edit/${id}`);
        }

        if ( scope === 'add') {            
    
            const url = `http://localhost:8000/api/mood/`;
        
            axios.post(url, data)
                .then(res=>{
                    navigate("/log");
                })
                .catch((err)=>{
                    setErrors(err.response.data.errors);
                    console.log(err.response.data.errors);                   
                });   
        }
    
        else {
            const url = `http://localhost:8000/api/mood/${id}`;
    
            axios.put(url, data)
            .then((res)=>{
                navigate("/log");
            })
            .catch((err)=>{
                setErrors(err.response.data.errors);                          
            });
        }
    }

    // const toggleDisplayMood = (e) => {        
    //     setDisplayMood(!displayMood);
    // }

    const handleMoodChange = (e) => {
        if ( e.target.value === "addMood" )
        {
            setDisplayMood(true);
            setMood('');
        }
        else if ( e.target.name === "addedMood" ) {
            setMood(e.target.value);
        }
        else {
            setDisplayMood(false);
            setMood(e.target.value);
        }
    }

    

        return (
            <form onSubmit={submitData}>
                <div className="header">
                    <h1>Mood Tracker</h1>
                    <p>How are you feeling today?</p>
                </div>
                <div>
                    <label>Date</label>
                    <input type = "date" onChange={(e) => setDate(e.target.value)} value={date} />
                    {errors.date? <p className="error">{errors.date.message}</p> : null}
                </div>
                <div className="moodSelect">
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="joyful" value="Joyful" /> 
                    <label htmlFor="joyful">Joyful</label>                    
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="happy" value="Happy" />
                    <label htmlFor="joyful">Happy</label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="satisfied" value="Satisfied"/> 
                    <label htmlFor="satisfied">Satisfied</label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="Tranquil" value="Tranquil" /> 
                    <label htmlFor="tranquil">Tranquil</label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="fair" value="Fair" /> 
                    <label htmlFor="fair">Fair</label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="anxious" value="Anxious" /> 
                    <label htmlFor="anxiouis">Anxious</label>
                    <input type = "radio" onChange={handleMoodChange} name="mood"id="irritable" value="Irritable" /> 
                    <label htmlFor="irritable">Irritable</label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="sad" value="Sad" /> 
                    <label htmlFor="sad">Sad</label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="depressed" value="Depressed" /> 
                    <label htmlFor="depressed">Depressed</label> 
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="Amazed" value="Amazed" /> 
                    <label htmlFor="amazed">Amazed</label>                                    
                    <input type = "radio" id="addMood" name="mood" value="addMood" onChange={handleMoodChange}/> 
                    <label htmlFor="addMood">Add Mood</label> 
                    {displayMood ?                                     
                    <div>
                        <label>Mood: </label>
                        <input type = "text" name="addedMood" onChange={handleMoodChange} />
                    </div>
                    : null }
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}
                </div>
                <div className="addLog">
                    <p>Daily Entry</p>
                    <textarea maxLength="500" onChange={(e) => setLog(e.target.value)} value={log}>
                    </textarea>
                </div>
                <div>
                    <button type="submit" className="addEntry" value="Add Entry">{ scope !== 'edit' ? "Add Entry": "Edit Entry"}</button>
                </div>
            </form>
        );
}

export default MoodTracker;
