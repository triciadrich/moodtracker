import react, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Register = () => {
    const [confirm, setConfirm] = useState("");
    const [errors, setErrors] = useState({});
    const [confirmReg, setConfirmReg] = useState("");

    const [registration, setRegistration] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setRegistration({
            ...registration,
            [e.target.name] : e.target.value
        });
    }

    const registerUser = (e) => {
        e.preventDefault();
        const url = 'http://localhost:8000/api/users/register';
        console.log(registration);        

        axios.post(url, registration, { withCredentials: true})
        .then((res)=>{
            console.log("res.data");
            navigate('/');
        })
        setConfirmReg(
            "Thank you for registering. You can now log in!"
        );
        setErrors({})
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);
        })

    }

    return (
        <div className='loginreg'>
            <form className='loginform' onSubmit={registerUser}>
                <label>Name: </label>
                <input name="name" type="text" onChange={handleChange} />
                <label>Email: </label>
                <input name="email" type="text" onChange={handleChange} />
                <label>Password: </label>
                <input name="password" type="password" onChange={handleChange} />
                <label>Confirm Password: </label>
                <input name="confirmPassword" type="password" onChange={handleChange} />
                <input type="submit" value="Register" />
            </form>
        </div>
    );

}

export default Register;