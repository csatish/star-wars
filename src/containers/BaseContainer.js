import React from 'react'
import Component from '../components/BaseComponent'
import ListComponent from '../components/ListComponent'
import {searchPlanetAction} from '../actions/actions'
import { connect } from 'react-redux'
import {userSelect} from '../selectors/selector'
import {getCookie, deleteCookieByName} from '../common/utils'
import {LOGIN_C} from '../common/constants'

class BaseContainer extends Component {

    constructor(props) {
        super(props)
        this.searchRef = React.createRef()
        this.messageRef = React.createRef()

        this._bind('onTextChange','showMessage','logout')
    }

    componentWillReceiveProps(nextProps){
    }


    componentWillMount() {
        let loginC = getCookie(LOGIN_C)
        console.log(loginC)
        if(!loginC) {
            this.props.history.push("/")
        }
    }

    onTextChange(e) {
        let searchText = e.target.value
        if(searchText) {
            this.props.dispatch(searchPlanetAction(searchText,this.showMessage))
            this.showMessage('searching...')
        }
    }
    showMessage(msg) {
        this.messageRef.current.innerHTML = msg
    }

    logout() {
        deleteCookieByName(LOGIN_C)
        this.props.history.push("/")
    }

    render () {

        let userName = getCookie(LOGIN_C)

        return(
            <div style={{width:"100%", height:"100%"}}>
                <div style={{position:"absolute", right:10}}><button onClick={this.logout}>Logout</button></div>
                <div className="center-x">
                    <div><h4>{'Welcome ' + userName}</h4></div>
                </div>
                <div className="center-x">
                    <div style={{margin:10, width:"100%",maxWidth:400}}>
                        <input ref={this.searchRef} onChange={this.onTextChange} type="text" placeholder="Search planet" />
                        <div ref={this.messageRef}>{""}</div>
                    </div>
                </div>
                <ListComponent />
            </div>
        )
    }
}

const BaseContainerCon = connect(userSelect)(BaseContainer)
export default BaseContainerCon
