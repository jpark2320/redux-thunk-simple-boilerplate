import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import timer from './timer/reducers';
import counter from './counter/reducers';

// CREATING INITIAL STORE
export default (initialState) => {
  const store = createStore(
    combineReducers({
      timer,
      counter,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

  // IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE
  // if (module.hot) {
  //   module.hot.accept(reducers, () => {
  //     const createNextReducer = reducers.default;

  //     store.replaceReducer(createNextReducer(initialState));
  //   });
  // }

  return store;
};
