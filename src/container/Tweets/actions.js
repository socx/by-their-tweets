import {
  LOCAL_API_BASE, REMOTE_API_BASE, PEOPLE_ENDPOINT
} from 'constants/utils';
import {
  GET_PERSON_REQUEST, GET_PERSON_SUCCESS, GET_PERSON_FAILED,
  GET_TWEET_CATEGORY_REQUEST, GET_TWEET_CATEGORY_SUCCESS, GET_TWEET_CATEGORY_FAILED,
  GET_TWEETS_REQUEST, GET_TWEETS_SUCCESS, GET_TWEETS_FAILED,
} from './constants';
import axios from 'axios';

const API_BASE = window.location.host.includes('localhost') ? LOCAL_API_BASE : REMOTE_API_BASE;


export const getPerson = (personId) => async (dispatch) => {
  dispatch({type: GET_PERSON_REQUEST});
  try {
    const person = await axios.get(`${API_BASE}/${PEOPLE_ENDPOINT}/${personId}`);
    if (person && person.data) {
      dispatch({
        type: GET_PERSON_SUCCESS,
        payload: { profile: person.data }
      })
    }
  } catch (error) {
    dispatch({ type: GET_PERSON_FAILED })
  }
};

export const getTweetCategory = (categoryId) => async (dispatch) => {
  dispatch({type: GET_TWEET_CATEGORY_REQUEST});
  try {
    const tweetCategory = await axios.get(`${API_BASE}/tweet-categories/${categoryId}`);
    if (tweetCategory && tweetCategory.data) {
      dispatch({
        type: GET_TWEET_CATEGORY_SUCCESS,
        payload: { tweetCategory: tweetCategory.data }
      })
    }
  } catch (error) {
    dispatch({ type: GET_TWEET_CATEGORY_FAILED })
  }
};

export const getTweets = (personId, categoryId) => async (dispatch) => {
  dispatch({type: GET_TWEETS_REQUEST});
  try {
    const tweets = await axios.get(`${API_BASE}/tweets/${personId}/categorised-tweets/${categoryId}`);
    if (tweets && tweets.data) {
      dispatch({
        type: GET_TWEETS_SUCCESS,
        payload: { tweets: tweets.data }
      })
    }
  } catch (error) {
    dispatch({ type: GET_TWEETS_FAILED })
  }
};
