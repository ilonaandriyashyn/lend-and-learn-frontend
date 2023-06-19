import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setInterceptors } from '../api/http';

export const history = createBrowserHistory();

export default function configureStore(preloadedState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware));
  const store = createStore(createRootReducer(history), preloadedState, enhancer);
  setInterceptors(store);
  sagaMiddleware.run(sagas);

  return store;
}
