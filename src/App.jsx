import './main.scss';

import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Store from './store';
import Body from './Body';

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div id="main">
          <div id="head">
            <h1>Simple Analytics</h1>
          </div>
          <Body />
          <div id="footer">
            © {new Date().getFullYear()} Morye
          </div>
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
