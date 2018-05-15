import commonReducer from './commonReducer'

export default function reducer(state = {}, action) {

    state = processReducer('common',commonReducer,state,action)
    return state
}

function processReducer(component, reducer, state, action) {
    const componentState  = state.component
    const newComponentState = reducer(componentState, action)
    if (componentState !== newComponentState) {
        state = state[component] = newComponentState
    }
    return state
}