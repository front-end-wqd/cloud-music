import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import route from './route/index';
import store from './store/index';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        { renderRoutes(route) }
      </HashRouter>
    </Provider>
  );
}

export default App;
