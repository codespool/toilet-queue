import { POPULATE_LIST, SET_FILTER, SET_LOADING } from '../actionTypes'
const initialState = {
  toiletList: [],
  filter: 'all',
  filteredList: [],
  isLoading: false
}
export default function (state = initialState, action) {
  if (action.type === POPULATE_LIST) {
    return {
      ...state,
      toiletList: [...action.newList],
      filteredList: [...action.newList]
    }
  }
  if (action.type === SET_FILTER) {
    const filteredList = state.toiletList.filter(
      toilet => toilet.type === action.filter || action.filter === 'all'
    )
    return { ...state, filter: action.filter, filteredList }
  }
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: action.isLoading }
  }
  return state
}
