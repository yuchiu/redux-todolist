import {applyMiddleware , compose,  createStore} from 'redux';
import rootReducer from '../reducers/'
import {createLogger} from 'redux-logger'

//add middleware
let finalCreateStore = compose(
    applyMiddleware(createLogger())
)(createStore)


//if initial state did not passed in to configureStore, then it will assign to empty todos array
const configureStore = function (initialState = {todos:[], user :{} }){
    return createStore(rootReducer, initialState) 
}


export default configureStore;