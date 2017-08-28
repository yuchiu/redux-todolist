import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import {createStore} from "redux";
import configureStore from './store/store';
import {Provider} from 'react-redux'

let initialState ={
    todos :[
        {
            id:0,
            completed: false,
            text :'initial todo'
        }
    ]
}

let store = configureStore(initialState)

//configure and create our store
//var store = createStore(reducers, initialState)
const app = (
    <Provider store = {store}>
    <Layout/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
