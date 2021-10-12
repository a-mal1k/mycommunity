import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

function Login({isLoggedin, setLoggedIn}) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const { email, password } = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        setFormData({
          email:'',
          password:''
        })
        setLoggedIn(true);
        console.log("in login component"+isLoggedin);
      };

      if (isLoggedin) {
        return <Redirect to="/dashboard" />
    }
    return (
        <div className="landing">
            <div className="inner">
      <h1 className="leadHead">Login</h1>
      <p className="lead">
        <i className="fas fa-user" /> login to Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            autoComplete="off"
            minLength="6"
          />
        </div>
        <button className="btn btn-outline-dark mt-5">Login</button>
      </form>
      <p className="my-1 linkto">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
        </div>
        </div>
    )
}

export default Login
