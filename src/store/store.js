import {applyMiddleware , compose,  createStore} from 'redux';
import reducer from '../reducers/reducer'
import {createLogger} from 'redux-logger'

//add middleware
let finalCreateStore = compose(
    applyMiddleware(createLogger())
)(createStore)


//if initial state did not passed in to configureStore, then it will assign to empty todos array
const configureStore = function (initialState = {todos:[]}){
    return createStore(reducer, initialState) 
}


export default configureStore;