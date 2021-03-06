import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';



const MoodTracker = (props) => {
    const { scope, id, loggedIn, setLoggedIn } = props;
    const [date, setDate] = useState("");
    const [mood, setMood] = useState("");
    const [picture, setPicture] = useState({
        fileName: '',
        file: []
    });
    const [log, setLog] = useState ("");
    const [errors, setErrors] = useState("");
    const [displayMood, setDisplayMood] = useState(false);

    useEffect(()=>{

        if ( scope === 'edit' ) {

            const url = `http://localhost:8000/api/mood/${id}`
            
            axios.get(url, {withCredentials: true})
            .then((res)=>{
                setDate(res.data.date);  
                setMood(res.data.mood);                
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
            log: log,
            fileName: picture.fileName
        };

        const editNavigate = (id) => {
            navigate(`/edit/${id}`);
        }

        if ( scope === 'add') {            
    
            const url = `http://localhost:8000/api/mood/`;
        
            axios.post(url, data, {withCredentials: true})
                .then(res=>{
                    handleUpload();                    
                })
                .catch((err)=>{
                    setErrors(err.response.data.errors);
                    console.log(err.response.data.errors);                   
                });   
        }
    
        else {
            const url = `http://localhost:8000/api/mood/${id}`;
    
            axios.put(url, data, {withCredentials: true})
            .then((res)=>{
                navigate("/log");
            })
            .catch((err)=>{
                setErrors(err.response.data.errors);                          
            });
        }
    }

    const handleUpload = () => {
        const formData = new FormData();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        let fileName = picture.fileName;
        formData.append(fileName, picture.file[0])        

        const uploadUrl = 'http://localhost:8000/api/upload/';

        axios.post(uploadUrl, formData, config)
        .then((res)=>{
            navigate("/log");
        })
        .catch((err)=>{
            console.log(err);
        });
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

    const handlePicture = (e) => {     

        setPicture({
            fileName: Date.now() + e.target.value.replace(/^.*[\\\/]/, ''),
            file: e.target.files
        })
    }    

        return (
            
            <form onSubmit={submitData}>
                <div class="container">
                    <h1>Mood Tracker</h1>
                    <h5>How are you feeling today?</h5>
                </div>
                <div class="dates">
                <div className="date">
                    <label><span className='black-text'>Date</span></label>
                    <input type = "date" onChange={(e) => setDate(e.target.value)} value={date} />
                    {errors.date? <p className="error">{errors.date.message}</p> : null}
                </div>
                </div>                
                   <div className='radios'>
                    <div className='radio1'>
                    <label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="joyful" value="Joyful" /> 
                    <label For="joyful"><span className='black-text'>Joyful</span></label>  </label>  
                    <label>               
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="happy" value="Happy" />
                    <label htmlFor="joyful"><span className='black-text'>Happy</span></label></label>
                    <label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="satisfied" value="Satisfied"/> 
                    <label htmlFor="satisfied"><span className='black-text'>Satisfied</span></label></label>
                    </div>
                    <div className='radio2'>
                    <label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="Tranquil" value="Tranquil" /> 
                    <label htmlFor="tranquil"><span className='black-text'>Tranquil</span></label></label>
                    <label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="fair" value="Fair" /> 
                    <label htmlFor="fair"><span className='black-text'>Fair</span></label></label>
                    <label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="anxious" value="Anxious" /> 
                    <label htmlFor="anxiouis"><span className='black-text'>Anxious</span></label></label>
                    </div>
                    <div className='radio3'>
                    <label>
                    <input type = "radio" onChange={handleMoodChange} name="mood"id="irritable" value="Irritable" /> 
                    <label htmlFor="irritable"><span className='black-text'>Irritable</span></label></label>
                    <label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="sad" value="Sad" /> 
                    <label htmlFor="sad"><span className='black-text'>Sad</span></label></label>
                    <label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="depressed" value="Depressed" /> 
                    <label htmlFor="depressed"><span className='black-text'>Depressed</span></label></label> 
                   </div>
                   <div className='radio4'>
                       <label>
                    <input type = "radio" onChange={handleMoodChange} name="mood" id="Amazed" value="Amazed" /> 
                    <label htmlFor="amazed"><span className='black-text'>Amazed</span></label> </label>
                    <label>                                   
                    <input type = "radio" id="addMood" name="mood" value="addMood" onChange={handleMoodChange}/> 
                    <label htmlFor="addMood"> <span className='black-text'>Add Mood</span></label> </label>
                    {displayMood ?                                     
                    <div>
                        <label>Mood: </label>
                        <input type = "text" name="addedMood" onChange={handleMoodChange} />
                    </div>
                    : null }
                    {errors.mood? <p className="error">{errors.mood.message}</p> : null}
                    </div>
                        </div>
                    
                
                <div className="addLog">
                    <h5>Daily Entry</h5>
                    <textarea maxLength="500" onChange={(e) => setLog(e.target.value)} value={log}>
                    </textarea>
                </div>
                <div className="fileupload">
                    <label htmlFor="moodPicture"><h4 className="black-text">Upload Picture:</h4></label>
                    <input type="file" name="moodPicture" onChange={handlePicture} />
                </div>
                <div>
                    <button type="submit" value="Add Entry">{ scope !== 'edit' ? "Add Entry": "Edit Entry"}</button>
                </div>
            </form>
        );
}

export default MoodTracker;
