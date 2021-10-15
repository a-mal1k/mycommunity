import React from 'react'
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

function People() {
    const users = useSelector(state => state.users)
    const isLogged = useSelector(state => state.isLogged)
    if(isLogged===false){
        return <Redirect to="/" />
    }
    console.log(users);
    return (
        <div className="container-fluid p-4">
            <div className="row">
                {users.map(user =>{
                return <div className="card col-lg-6 col-md-6">
                    <img className="imgStyle" alt="Card"/>
    
                    <div className="card-body">
                    <h4 className="card-title">{user.name}</h4>
                    <p className="card-text">I am <strong>{user.name}</strong> i am a software developer, i belongs to <em>{user.location}</em> you can contact me on email - <em>{user.email}</em> and mobile - <strong>{user.mobile}</strong></p>
                    <Link to="#" className="btn btn-primary">View Profile</Link>
                    </div>
                    </div>
            })}
                </div>
                
            </div>
    )
}

export default People
