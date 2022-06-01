import React, { useState } from 'react'
import './loginForm.css'
import { Link } from 'react-router-dom'


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      
    }

    return (
        <div className="container-login">
     <div className="login">
      <h2 className="loginTitle">Login</h2>
      <form className="loginForm">
        <div className="login-input">
          <label>User Name</label>
          <input 
          type="text"
          name="email"
          value={email}
           placeholder="Your Name..."
           onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="login-input">
          <label>Password</label>
          <input 
          type="password"
          name="password"
          value={password}
           placeholder="Enter your password.."
           onChange={(e) => setPassword(e.target.value)}
           />
        </div>
        <button className="loginButton" onClick={handleSubmit}>Login</button>
        <br/>
        {error && <span className='error-msg'>{error}</span>}
        <br/>
        <span>
          dont have an account ? sign up <Link to="/signup">here</Link>
        </span>
      </form>
    </div>
        </div>
    )
}


export default LoginForm
