import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import search from './container/Search/reducer'
import people from './container/People/reducer'
import tweets from './container/Tweets/reducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  search, people, tweets
  // rest of your reducers
})
export default createRootReducer
