/* eslint-disable no-undef */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './Root';

require('../styles/core.scss');
require('../styles/button.scss');
require('../styles/Grid.scss');
require('../styles/picker.scss');

const configureStore = require('./redux/configureStore');

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore.default(preloadedState);
const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('app');

render(<Root store={store} history={history} />, rootElement);
