import {
  LOCAL_API_BASE, REMOTE_API_BASE, PEOPLE_ENDPOINT, TWEET_CATEGORIES_ENDPOINT
} from 'constants/utils';
import {
  GET_PERSON_REQUEST, GET_PERSON_SUCCESS, GET_PERSON_FAILED,
  GET_TWEET_CATEGORIES_REQUEST, GET_TWEET_CATEGORIES_SUCCESS, GET_TWEET_CATEGORIES_FAILED,
} from './constants';
import axios from 'axios';

const API_BASE = window.location.host.includes('localhost') ? LOCAL_API_BASE : REMOTE_API_BASE;


export const getPerson = (personId) => async (dispatch) => {
  dispatch({type: GET_PERSON_REQUEST});
  try {
    const person = await axios.get(`${API_BASE}/${PEOPLE_ENDPOINT}/${personId}`);
     console.log(person)
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

export const getTweetCategories = (personId) => async (dispatch) => {
  dispatch({type: GET_TWEET_CATEGORIES_REQUEST});
  try {
    const tweets = await axios.get(`${API_BASE}/${TWEET_CATEGORIES_ENDPOINT}/${personId}`);
    if (tweets && tweets.data) {
      dispatch({
        type: GET_TWEET_CATEGORIES_SUCCESS,
        payload: { tweetCategories: tweets.data }
      })
    }
  } catch (error) {
    dispatch({ type: GET_TWEET_CATEGORIES_FAILED })
  }
};
