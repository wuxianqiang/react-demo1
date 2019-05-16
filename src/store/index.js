import {createStore, applyMiddleware, combineReducers} from 'redux'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import reducer from './reducer'
import history from './history'

const reducers = combineReducers({
  router: connectRouter(history),
  counter: reducer
})

export default applyMiddleware(routerMiddleware(history))(createStore)(reducers);