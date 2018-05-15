import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/rootReducer'
// import history from './historyConfig' //same history needs to use for routing.
import createHistory from 'history/createBrowserHistory'

const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
        throw err
    }
}

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
    promiseMiddleware(),
    thunk,
    routerMiddleware(history),
    crashReporter
]

if (window.devToolsExtension) {
    enhancers.push(window.devToolsExtension())
}


const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

export default store