const appDefault = {

}

export default function reducer(state = appDefault, action) {
    //noinspection FallThroughInSwitchStatementJS
    switch (action.type) {
        case 'PENDING':
            return state

        case '@@router/LOCATION_CHANGE' :
            // let lastPage = state.getIn(['appUsage','currentPage'])
            // let currentPage  = payload.pathname
            // state = state.setIn(['appUsage','lastPage'], lastPage)
            // return state.setIn(['appUsage','currentPage'], payload.pathname)
            return state

        default:
            return state
    }
}
