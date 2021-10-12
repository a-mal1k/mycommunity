import React from 'react'

function Dashboard(props) {
    return (
        <div>
            Hello {props.name}
        </div>
    )
}

Dashboard.defaultProps ={
    name:'Arman'
}
export default Dashboard
