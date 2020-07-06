import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import user from './user';
import pokemons from './pokemon'

const reducers = combineReducers({
  user,
  pokemons,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunk, createLogger({ collapsed: true })),
);

const store = createStore(reducers, middleware);

export default store;
