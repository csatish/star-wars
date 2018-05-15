import createAction from '../configs/actionConfig'
import {searchCharacters, searchPlanets} from '../common/rest'


const SET_LOGIN_SESSION = "SET_LOGIN_SESSION"
export const setLoginSession = createAction(SET_LOGIN_SESSION)


const SET_USERS = "SET_USERS"
export const setUsers = createAction(SET_USERS)

const SEARCH_CHAR = "SEARCH_CHAR"
const searchCharacterReq = createAction(SEARCH_CHAR, (params) => searchCharacters(params))

export const searchCharacterAction = (params) => (dispatch,getState) => {
    return dispatch(searchCharacterReq(params)).then(
        ({value,action}) => {
            if(value.results) {
                console.log(value)
                dispatch(setUsers(value.results))
            }
        }
    ).catch((error) => {
        console.log(error)
    })
}


const SET_PLANETS = "SET_PLANETS"
export const setPlanets = createAction(SET_PLANETS)

const SEARCH_PLANETS = "SEARCH_PLANETS"
const searchPlanetReq = createAction(SEARCH_PLANETS, (params) => searchPlanets(params))

export const searchPlanetAction = (params,callback) => (dispatch,getState) => {
    return dispatch(searchPlanetReq(params)).then(
        ({value,action}) => {
            if(value.results) {
                console.log(value)
                dispatch(setPlanets(value.results))
            }

            callback("")
        }
    ).catch((error) => {
        console.log(error)
        callback("")
    })
}

