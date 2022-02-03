import react, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Login = (props) => {

    const { loggedIn, setLoggedIn } = props;   

    const [login, setLogin] = useState({        
        email: '',
        password: ''        
    });

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        });
    }

    const loginUser = (e) => {
        e.preventDefault();
        const url = "http://localhost:8000/api/users/login";
        axios.post(url, login, {withCredentials: true})
        .then((res)=>{
            localStorage.setItem('name', res.data.name);
            setLoggedIn(true);
            navigate('/home')
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    return (
        <div className='loginreg'>
            <form className='loginform' onSubmit={loginUser}>              
                <label>Email: </label>
                <input name="email" type="text" onChange={handleChange} />
                <label>Password: </label>
                <input name="password" type="password" onChange={handleChange} />    
                <input className='regbutt' type="submit" value="Login" />                   
                <button className='regbutt'><Link to="/register">Register</Link></button>       
            </form>

        </div>
    );

}

export default Login;