import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import './styling/index.css';


import reducer from './store/reducers/auth';

const composeEnchances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnchances(
    // middleware - redux thunk
    applyMiddleware(thunk)
));


const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

document.body.style = 'background: lightgreen';
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();