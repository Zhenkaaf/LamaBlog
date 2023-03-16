import './login.css';
import { Link } from 'react-router-dom';

export default function Login () {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label htmlFor="">Email</label>
                <input className="loginInput" type="email" placeholder='email'/>
                <label htmlFor="">Password</label>
                <input className="loginInput" type="password" placeholder='password'/>
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
            <Link className='link' to='/register'>REGISTER</Link>
            </button>
        </div>
    )
}