
const compState = {
    users:[],
    planets:[],
    user:{}
}

const changeRefForMutableState = (state) => Object.assign({},state)

export default function (state = compState, action) {
    let payload = action.payload
    switch (action.type) {
        case 'SET_LOGIN_SESSION':
            state.isLoggedIn = payload
            return changeRefForMutableState(state)

        case 'SET_USERS' :
            if(Array.isArray(payload)) {
                let existingUsers = state.users
                state.users = existingUsers.concat(payload)
                return changeRefForMutableState(state)
            }
            return state

        case 'SET_PLANETS' :
            if(Array.isArray(payload)) {
                state.planets = payload
                return changeRefForMutableState(state)
            }
            return state

        default:
            return state
    }
}
