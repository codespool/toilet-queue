import { POPULATE_LIST } from '../actionTypes'

export default function (state = [] , action) {
    if (action.type === POPULATE_LIST) {
        return [...action.newList]
    }
    return state
}
