import './register.css';
import { Link } from 'react-router-dom';

export default function Register () {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label htmlFor="">Username</label>
                <input className="registerInput" type="text" placeholder='username'/>
                <label htmlFor="">Email</label>
                <input className="registerInput" type="email" placeholder='email'/>
                <label htmlFor="">Password</label>
                <input className="registerInput" type="password" placeholder='password'/>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
            <Link className='link' to='/login'>LOGIN</Link>
            </button>
        </div>
    )
}