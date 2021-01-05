import {
  LOCAL_API_BASE, REMOTE_API_BASE, CONSTITUENCY_ENDPOINT, HTTP_200
} from 'constants/utils';
import {
  SEARCH_TEXT_CHANGED, GET_PEOPLE_REQUEST, GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILED,
} from './constants';
import axios from 'axios';

const API_BASE = window.location.host.includes('localhost') ? LOCAL_API_BASE : REMOTE_API_BASE;

export const searchTextChanged = (searchText) => async (dispatch) => {
  dispatch({
    type: SEARCH_TEXT_CHANGED,
    payload: {
      searchText
    }
  })
}

export const getPeople = () => async (dispatch, getState) => {
  const { searchText } = getState().search;
  const url =  `${API_BASE}/${CONSTITUENCY_ENDPOINT}/${searchText}`;
  dispatch({type: GET_PEOPLE_REQUEST})
  axios.get(url)
    .then((response) => {
      if (response.status === HTTP_200 && response.data) {
        dispatch({
          type: GET_PEOPLE_SUCCESS,
          payload: { searchText, results: response.data }
        })
      } else {
        dispatch({
          type: GET_PEOPLE_FAILED,
          payload: { searchText}
        })
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_PEOPLE_FAILED,
        payload: { searchText}
      })
    })
}