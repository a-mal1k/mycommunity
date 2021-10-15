import React from 'react'
import { Link } from 'react-router-dom';
import {logout} from '../redux/action'
import {useSelector, useDispatch} from 'react-redux'


function Navbar() {
  const isLogged = useSelector(state => state.isLoggedin);
  const dispatch = useDispatch();
  const guestUser = (

    <ul className="navbar-nav ">
    <li className="nav-item">
      <Link to='/login' className="nav-link">
        <i className='fas fa-sign-in-alt' />
        <span className='hide-sm'> Login</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to='/register'className="nav-link">
        <i className='fas fa-user-check' />
        <span className='hide-sm'> Register</span>
      </Link>
    </li>
  </ul>
  );
 const setLogout = ()=>{
   dispatch(logout());
 }
  const authUser = (
    <ul className="navbar-nav ">
    <li className="nav-item"> 
      <Link to='/people' className="nav-link"><i className="fas fa-user-friends" />
       <span className='hide-sm'> People</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to='/dashboard' className="nav-link"><i className='fas fa-user' />
        <span className='hide-sm'> My Profile</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link to='/' onClick={setLogout} className="nav-link">
        <i className='fas fa-sign-out-alt' />
        <span className='hide-sm'> Logout</span>
      </Link>
    </li>
  </ul>
  );

    return (
        <nav className="navbar navbar-expand-sm">
             <div className="container-fluid">
      <h1> <Link className="navbar-brand" to='/'><i className="fas fa-users"></i> Community</Link> </h1>
      <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
        {isLogged? authUser:guestUser}
    </div>
    </div>
        </nav>
    )
}

export default Navbar
