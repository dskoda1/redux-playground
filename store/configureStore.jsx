import rootReducer from '../reducers';
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { routerForBrowser, initializeCurrentLocation } from 'redux-little-router';

// Define your routes in a route-to-anything hash like below.
// The value of the route key can be any serializable data,
// including an empty object.

// This data gets attached to the `router.result` key of the state
// tree when its corresponding route is matched and dispatched.
// Useful for page titles and other route-specific data.
const routes = {
  '/login': {
    title: 'Login'
  },
  '/register': {
    title: 'Register'
  },
  // You can also define nested route objects!
  // Just make sure each route key starts with a slash.
  '/': {
    title: 'Home'
  }
};



export default function configureStore(initialState) {
  const {
    reducer,
    middleware,
    enhancer
  } = routerForBrowser({
    // The configured routes. Required.
    routes
  })
  const reducers = combineReducers({
    router: reducer,
    root: rootReducer
  })

  const store = createStore(
    reducers,
    initialState,
    compose(enhancer, applyMiddleware(middleware))
  );
  const initialLocation = store.getState().router;
  if (initialLocation) {
    store.dispatch(initializeCurrentLocation(initialLocation));
  }


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
