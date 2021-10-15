import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

function Landing() {
  const isLogged = useSelector(state => state.isLoggedin);

   if (isLogged===true) {
        return <Redirect to="/dashboard" />
    }
    return (
          <div className='landing'>
              <div className='landing-inner'>
              <h1 className="leadHead">Community</h1>
            <p className='lead'>
              Create profile, connect, share posts and know about others. 
            </p>
            <div className='buttons'>
                <Link to="/register" className='btn btn-outline-dark btn-lg m-2'>
                Sign Up
                </Link>
              <Link to="/login" className='btn btn-outline-success btn-lg m-2'>
                Login
             </Link>
            </div>
              </div>
              
          </div>
    )
}

export default Landing;
