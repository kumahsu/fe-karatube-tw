import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routers from './router/Routers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={browserHistory} routes{Routers} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
