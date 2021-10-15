import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import {register} from '../../redux/action'
import {useSelector, useDispatch} from 'react-redux'

function Register() {
  const isLogged = useSelector(state => state.isLoggedin);
  const dispatch = useDispatch();
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
     dispatch(register(formData))

      };
      if (isLogged===true) {
        return <Redirect to="/dashboard" />
    }
    return (
        <div className="landing">
            <div className="inner">
      <h1 className="leadHead">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-register" /> Fill details and sign up. 
      </p>
      <form autoComplete="off" className="form" onSubmit={onSubmit}>
      <div className="form-group">
          <input
            type="name"
            placeholder="Enter your name"
            name="name"
            value={name}
            autoComplete="off"
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
            autoComplete="off"
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
            autoComplete="off"
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
            autoComplete="off"
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
