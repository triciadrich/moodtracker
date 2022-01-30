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
            mood: addMood,
            log: log
        };

        const editNavigate = (id) => {
            navigate(`/edit/${id}`);
        }

        if ( scope === 'add') {            
    
            const url = `http://localhost:8000/api/mood/`;
        
            axios.post(url, data)
                .then(res=>{
                    navigate("/home");
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
                navigate("/home");
            })
            .catch((err)=>{
                setErrors(err.response.data.errors);                          
            });
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
                    <input type = "radio" onChange={(e) => setMood(e.target.value)} value={mood} /> Joyful
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}
                    
                    <input type = "radio" onChange={(e) => setMood(e.target.value)} value={mood} /> Happy
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}

                    <input type = "radio" onChange={(e) => setMood(e.target.value)} value={mood} /> Satisfied
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}

                    <input type = "radio" onChange={(e) => setMood(e.target.value)} value={mood} /> Tranquil
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}

                    <input type = "radio" onChange={(e) => setMood(e.target.value)} value={mood} /> Fair
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}

                    <input type = "radio" onChange={(e) => setMood(e.target.value)} value={mood} /> Anxious
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}

                    <input type = "radio" onChange={(e) => setMood(e.target.value)} value={mood} /> Irritable
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}

                    <input type = "radio" onChange={(e) => setMood(e.target.value)} value={mood} /> Sad
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}

                    <input type = "radio" onChange={(e) => setMood(e.target.value)} value={mood} /> Depressed
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}

                    <input type = "radio" onChange={(e) => setMood(e.target.value)} value={mood} /> Amazed
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}
                    
                    <input type = "radio" onChange={(e) => setMood(e.target.value)} value={mood} />
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}
                    <label>Add Mood</label>
                    <input type = "text" onChange={(e) => setAddMood(e.target.value)} value={mood} />
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
