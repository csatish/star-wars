
import {STAR_CHAR_SEARCH_URL, PLANET_URL} from './constants'
import {callGetAPI} from '../configs/networking'

export const searchCharacters = (searchStr) =>
    callGetAPI(STAR_CHAR_SEARCH_URL+searchStr)

export const searchPlanets = (searchStr) =>
    callGetAPI(PLANET_URL+searchStr)