import React from 'react'
import './App.css'
import { Route, Switch} from 'react-router'
import {Provider} from 'react-redux'
import Register from './components/forms/Register'
import Login from './components/forms/Login'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import store from './store'
function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
         <Navbar/>
        <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path ="/dashboard" component={Dashboard}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
        </Provider>
    )
}

export default App
