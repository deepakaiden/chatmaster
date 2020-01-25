import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';


const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyBDrpEM6bT4iEciSePWzt9og15tF3Jjs7s",
    authDomain: "login-tutorial-e2d15.firebaseapp.com",
    databaseURL: "https://login-tutorial-e2d15.firebaseio.com",
    projectId: "login-tutorial-e2d15",
    storageBucket: "login-tutorial-e2d15.appspot.com",
    messagingSenderId: "472596447094",
    appId: "1:472596447094:web:0236f692d5f14a1029c457",
    measurementId: "G-LCPV8W8JKR"
});

const routing = (
    <Router>
        <div id= 'routing-container'>
            <Route path = '/login' component = {LoginComponent}></Route>
            <Route path = '/signup' component = {SignupComponent}></Route>
            <Route path = '/dashboard' component = {DashboardComponent}></Route>
        </div>
    </Router>

)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
