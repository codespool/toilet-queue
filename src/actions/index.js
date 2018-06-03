import { REQUEST_LIST, POPULATE_LIST } from '../actionTypes'

export const requestList = () => {
    return {
        type: REQUEST_LIST
    }
}

export const populateList = newList => {
    return {
        type: POPULATE_LIST,
        newList
    }
}
