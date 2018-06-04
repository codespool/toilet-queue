import {
  REQUEST_LIST,
  POPULATE_LIST,
  SET_FILTER,
  SET_LOADING
} from '../actionTypes'

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

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  }
}

export const setLoading = isLoading => {
  return {
    type: SET_LOADING,
    isLoading
  }
}
