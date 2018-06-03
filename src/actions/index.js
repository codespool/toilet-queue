import { REQUEST_LIST, POPULATE_LIST } from '../actionTypes'

export const requestList = () => {
    return {
        type: REQUEST_LIST
    }
}

export const populateList = newList => {
    debugger
    return {
        type: POPULATE_LIST,
        newList
    }
}
