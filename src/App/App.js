import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Home from '../Home/Home';
import Record from '../Record/Record';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ApiContext from './ApiContext'
import './App.css';

export default class App extends Component() {
    render() {
        return (
            <div className="app">
                <header className="app_header" roll="banner">
                    <h1>My Garden</h1>
                </header>
                <ApiContext.Provider value={contextValue}>
                    <nav>
                        <Nav />
                    </nav>
                    <main className="main_content" role="main">
                        <Route exact path='/' component={LandingPage}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/record' component={Record}/>
                    </main>
                </ApiContext.Provider>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
};
