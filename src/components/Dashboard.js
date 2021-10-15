import React from 'react'
import {useSelector} from 'react-redux'
function Dashboard() {
    const state = useSelector(state => state.data)
    return (
        <div className="container">
            <div className="dashboard">
            <h1>My Profile</h1>
            <p>Name: {state.name}</p>
            <p>Email:  {state.email}</p>
            <p>Mobile: {state.mobile}</p>
            <p>Location: {state.location}</p>
            </div>
        </div>
    )
}

Dashboard.defaultProps ={
    name:'Arman'
}
export default Dashboard
