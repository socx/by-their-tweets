import * as constants from './constants'

const initialState = {
  hasError: false,
  isFetchingProfile: false,
  isFetchingTweets: false,
  profile: {},
  tweetCategory: {},
  tweets: []
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
    case constants.GET_TWEETS_REQUEST:
      return { ...state, isFetchingTweets: true }
    case constants.GET_TWEETS_SUCCESS:
      return {
        ...state,
        hasError: false,
        isFetchingTweets: false,
        tweets: payload.tweets
      }
    case constants.GET_TWEETS_FAILED:
      return { ...state, isFetchingTweets: false, hasError: true }
    case constants.GET_TWEET_CATEGORY_REQUEST:
      return { ...state, isFetchingTweets: true }
    case constants.GET_TWEET_CATEGORY_SUCCESS:
      return {
        ...state,
        hasError: false,
        isFetchingTweets: false,
        tweetCategory: payload.tweetCategory
      }
    case constants.GET_TWEET_CATEGORY_FAILED:
      return { ...state, isFetchingTweets: false, hasError: true }
    default:
      return state
  }
}