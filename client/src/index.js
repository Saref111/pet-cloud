import React from 'react';
import ReactDOM from 'react-dom';
import store from './reducers/index'
import { Provider} from 'react-redux';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
