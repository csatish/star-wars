import { createAction } from 'redux-actions'

const defaultPayload = i => i,
    defaultMeta = function () {
        if (arguments.length < 1) {
            return null
        }
        const lastArg = arguments[arguments.length - 1]

        return (lastArg && lastArg.meta) ? lastArg.meta : null
    }

export default function myCreateAction(actionType, payload = defaultPayload,
                                       meta = defaultMeta) {
    return createAction(actionType, payload, meta)
}