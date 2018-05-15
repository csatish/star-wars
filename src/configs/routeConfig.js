import React from 'react'
import LoginContainer from '../containers/LoginContainer'
import BaseContainer from '../containers/BaseContainer'
// import About from './Containers/About'
import {BrowserRouter, Route, Switch,Redirect}  from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

// import { useRouterHistory } from 'react-router'
// import createBrowserHistory from 'react-router/createBrowserHistory'
//
// const history = useRouterHistory(createBrowserHistory)({
//     basename: '/'
// })

import store, { history } from './storeConfig'

export const stateGetter = store.getState
export const pushPath = history.push

class AppRoute extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={LoginContainer} />
                            <Route path='/home' component={BaseContainer} />
                        </Switch>
                    </BrowserRouter>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default AppRoute