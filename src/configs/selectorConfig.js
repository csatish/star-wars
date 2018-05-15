import { createSelectorCreator, defaultMemoize } from 'reselect'

export const createISelector = createSelectorCreator(defaultMemoize, defaultEqualityCheck)

function defaultEqualityCheck(currentVal, previousVal) {
    return currentVal === previousVal
}