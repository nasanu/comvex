import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./redux/saga/saga";
import { createBrowserHistory } from "history";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";

//redux router
export const history = createBrowserHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer(history),
  /* preloadedState, */ composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware) + window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
// );

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
