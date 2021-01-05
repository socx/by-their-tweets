import * as constants from './constants'

const initialState = {
  hasError: false,
  isFetchingProfile: false,
  isFetchingTweetCategories: false,
  profile: {},
  tweetCategories: []
}

export default (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case constants.GET_PERSON_REQUEST:
      return { ...state, isFetchingProfile: true }
    case constants.GET_PERSON_SUCCESS:
      return {
        ...state,
        hasError: true,
        isFetchingProfile: false,
        profile: payload.profile
      }
    case constants.GET_PERSON_FAILED:
      return { ...state, isFetchingProfile: false, hasError: true }
    case constants.GET_TWEET_CATEGORIES_REQUEST:
      return { ...state, isFetchingTweetCategories: true }
    case constants.GET_TWEET_CATEGORIES_SUCCESS:
      return {
        ...state,
        hasError: false,
        isFetchingTweetCategories: false,
        tweetCategories: payload.tweetCategories
      }
    case constants.GET_TWEET_CATEGORIES_FAILED:
      return { ...state, isFetchingTweetCategories: false, hasError: true }
    default:
      return state
  }
}