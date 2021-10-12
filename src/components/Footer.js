import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
              <div className="footer-copyright text-center py-3"><i className="fas fa-copyright"> 2021 Copyright:</i>
               <Link to="#"> Developed by Arman</Link>
             </div>
            </footer>
    )
}

export default Footer
