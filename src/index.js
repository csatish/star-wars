import React from 'react'
import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import {ConnectedRouter} from 'react-router-redux'
// import store, { history } from 'configs/storeConfig'

import AppRoute from './configs/routeConfig'

// const connectedRouteStore = (<Provider store={store}>
//         <ConnectedRouter history={history}>
//             <div>
//                 <AppRoute />
//             </div>
//         </ConnectedRouter>
//     </Provider>
// )


ReactDOM.render(<AppRoute />, document.getElementById('app'))