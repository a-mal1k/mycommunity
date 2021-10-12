import React, { useState } from 'react'
import './App.css'
import { Route, Switch} from 'react-router'
import Register from './components/forms/Register'
import Login from './components/forms/Login'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

function App() {
    const [authenticated, setAuthenticate]=useState(false)
    return (
        <BrowserRouter>
         <Navbar isLoggedin={authenticated} setLoggedIn={setAuthenticate}/>
        <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/register" component={()=> <Register isLoggedin={authenticated} setLoggedIn={setAuthenticate}/>} />
            <Route path="/login" component={() =><Login isLoggedin={authenticated} setLoggedIn={setAuthenticate}/>} />
            <Route path ="/dashboard" component={Dashboard}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
        
    )
}

export default App
