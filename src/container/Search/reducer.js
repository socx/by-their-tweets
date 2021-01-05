import * as constants from './constants'

const initialState = {
  isSearching: false,
  isPristine: true,
  searchText: '',
  results: []
}

export default (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case constants.SEARCH_TEXT_CHANGED:
      return { ...state, searchText: payload.searchText }
    case constants.GET_PEOPLE_REQUEST:
      return { ...state, isSearching: true }
    case constants.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        isSearching: false,
        isPristine: false,
        searchText: payload.searchText,
        results: payload.results
      }
    case constants.GET_PEOPLE_FAILED:
      return { ...state, isSearching: false }
    default:
      return state
  }
}