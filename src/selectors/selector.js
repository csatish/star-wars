import {createISelector} from '../configs/selectorConfig'

export const commonSelect = createISelector(
    state => state.components.common.isLoggedIn,
    state => state.components.common.users,
    (isLoggedIn, users) => {

        return {
            users,
            isLoggedIn
        }
    }
)

export const userSelect = createISelector(
    state => state.components.user,
    (user) => {
        return {
            user
        }
    }
)



export const listSelect = createISelector(
    state => state.components.common.planets,
    (planets) => {
        return {
            planets
        }
    }
)