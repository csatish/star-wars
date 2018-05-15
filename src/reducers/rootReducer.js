import {combineReducers} from 'redux'
import {routerReducer } from 'react-router-redux'
import components from './componentReducer'

export default combineReducers({
    routing: routerReducer,
    components
})