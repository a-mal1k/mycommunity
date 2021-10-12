import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

function Register({isLoggedin, setLoggedIn}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile:'',
        location:'',
        password:''
    });
    
      const { name,email, mobile, location, password } = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            mobile:'',
            location:'',
            password:''
        })
     setLoggedIn(true);
     console.log("in register component"+isLoggedin);
      };
      if (isLoggedin) {
        return <Redirect to="/dashboard" />
    }
    return (
        <div className="landing">
            <div className="inner">
      <h1 className="leadHead">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-register" /> Fill details and sign up. 
      </p>
      <form className="form" onSubmit={onSubmit}>
      <div className="form-group">
          <input
            type="name"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Enter your contact no."
            name="mobile"
            value={mobile}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="location"
            placeholder="Enter your city/state"
            name="location"
            value={location}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <button className="btn btn-outline-dark mt-5">Register</button>
      </form>
      <p className="my-1 linkto">
        Already have an account? <Link to="/login">Login</Link>
      </p>
        </div>
        </div>
    )
}

export default Register
