
import React, { useState } from 'react'
import './loginForm.css'



const RegistrationForm = ({history}) => {
  
    const [handle, setHandle] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    // signup
    const handleSubmit = (e) => {
        e.preventDefault();
       
    }


    return (
        <div className="container-login">
           <div className="login">
      <h2 className="loginTitle">Registration</h2>
      <form className="loginForm">
        <div className="login-input">
          <label>User Name</label>
          <input 
          type="text" 
          name="handle"
          value={handle}
           placeholder="Your Name..."
           onChange={e=>setHandle(e.target.value)}

           />
        </div>
        <div className="login-input">
          <label>Email</label>
          <input
           type="email"
           name="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
            placeholder="Your Email..." />
        </div>
        <div className="login-input">
          <label>Phone</label>
          <input
           type="number" 
           name="phone"
           value={phone}
           onChange={e=>setPhone(e.target.value)}
           placeholder="Your Phone..."
            />
        </div>
        <div className="login-input">
          <label>Location</label>
          <input 
          type="text" 
          name="location"
           value={location}
           onChange={e=>setLocation(e.target.value)}
          placeholder="Your Location..." />
        </div>
        <div className="login-input">
          <label>Password</label>
          <input 
          type="password"
          name="password"
           value={password}
           onChange={e=>setPassword(e.target.value)}
           placeholder="Enter your password.." />
        </div>
        <button className="loginButton" onClick={handleSubmit}>Register</button>
      </form>
    </div> 
        </div>
    )
}

export default RegistrationForm
