import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App/App'

/*Note: document.getElementById('root') achieves the same result as document.querySelector('#root').
The querySelector method works with any CSS selector and getElementById only works with ids.*/

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
