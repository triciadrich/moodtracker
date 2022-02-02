import react, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Login = () => {

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
            navigate('/home')
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    return (
        <div>
            <form onSubmit={loginUser}>              
                <label>Email: </label>
                <input name="email" type="text" onChange={handleChange} />
                <label>Password: </label>
                <input name="password" type="password" onChange={handleChange} />    
                <input type="submit" value="Login" />                   
                <Link to="/register">Register</Link>       
            </form>

        </div>
    );

}

export default Login;