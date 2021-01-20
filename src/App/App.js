import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Footer from '../Footer/Footer'
import './App.css'

export default class App extends Component() {
    render() {
        return(
            return (
                <div className="App">
                    <header>
                        <h1>My Garden</h1>
                    </header>
                    <nav>
                        Tortor consequat id porta nibh venenatis cras sed felis eget.
                    </nav>
                    <main className="main_content" role="main">
                        <Route exact path='/' component={LandingPage}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/record' component={Record}/>
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            )
        )
    }
}

export default App;
