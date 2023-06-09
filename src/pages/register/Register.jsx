import './register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
           
            const res = await axios.post('/auth/register', {
                username,
                email,
                password,
            });
            console.log('front res===', res);
            res.data && window.location.replace('/login');
        } catch (err) {
            console.error('front error===', err.response.data);
            setError(true);
        }
    };

    return (
        <div className="register">

            <span className="registerTitle">Register</span>
            <form action="" className="registerForm" onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
                <input className="registerInput" type="text" placeholder='username' onChange={e => setUserName(e.target.value)} />
                <label htmlFor="">Email</label>
                <input className="registerInput" type="email" placeholder='email' onChange={e => setEmail(e.target.value)} />
                <label htmlFor="">Password</label>
                <input className="registerInput" type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
                <button className="registerButton" type='submit'>Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className='link' to='/login'>LOGIN</Link>
            </button>
            {error && <span style={{color: 'red', marginTop: '10px'}}>{`User with such email: ${email} has already exist`}</span>}
        </div>
    )
}