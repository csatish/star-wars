import React from 'react'
import { connect } from 'react-redux'
import {commonSelect} from '../selectors/selector'
import {setLoginSession, searchCharacterAction} from '../actions/actions'
import {HOME_PATH, LOGIN_C} from '../common/constants'
import BaseComponent from '../components/BaseComponent'
import {setCookie,getCookie} from '../common/utils'

const notFound = 0, passwordNotFound = 1, userFound = 2

 class LoginContainer extends BaseComponent {

    constructor(props) {
        super(props)
        this.uname = React.createRef()
        this.pwd = React.createRef()
        this.butonRef = React.createRef()
        this.messageRef = React.createRef()
        this._bind('loginButtonClick','compareNameAndPwd','showMessage')
        this.state = {}
    }

    componentWillMount() {
       
    }

    componentWillReceiveProps(nextProps){

        let loginName = this.uname.current.value
        let loginPwd = this.pwd.current.value
        let code = this.compareNameAndPwd(loginName, loginPwd, nextProps)
        if(code === userFound) {
            setCookie(LOGIN_C, loginName)
            this.props.history.push(HOME_PATH)
        }
        else {
            this.showMessage(code)
        }
    }

    setButtonLabel(label) {
        this.butonRef.current.innerHTML = label
    }

     loginButtonClick(e) {
         this.setButtonLabel("Loading...")

         let loginName = this.uname.current.value
         let loginPwd = this.pwd.current.value
         console.log(loginName, loginPwd)

         if(this.compareNameAndPwd(loginName, loginPwd, this.props) === userFound) {

             this.props.history.push(HOME_PATH)
         }
         else {
             this.props.dispatch(searchCharacterAction(loginName))
         }
     }

     showMessage(code) {

        switch (code) {
            case notFound:
                this.messageRef.current.innerHTML = "User not found"
                this.setButtonLabel("Login")
                break
            case passwordNotFound:
                this.messageRef.current.innerHTML = "Password incorrect"
                this.setButtonLabel("Login")
                break
            default:

        }
     }

     compareNameAndPwd(loginName, loginPwd, props) {
         for(let u of props.users) {
             if(u.name === loginName && u.birth_year === loginPwd) {
                 return userFound
             }
             else if(u.name === loginName) {
                 return passwordNotFound
             }
             else {
                 return notFound
             }
         }
         return notFound
     }

    render () {
        return(
            <div className="center-xy" style={{height:"100%"}}>
                <div  style={{marginTop:"0", width:"40%", minWidth:"290px"}} >
                    <div ref={this.messageRef}></div>
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input ref={this.uname} type="text" placeholder="Enter Username" name="uname" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input ref={this.pwd} type="password" placeholder="Enter Password" name="psw" required />

                        <button ref={this.butonRef} onClick={this.loginButtonClick}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}


const LoginContainerCon = connect(commonSelect)(LoginContainer)
export default LoginContainerCon