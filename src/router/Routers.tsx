import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../view/Home/Home';
import App from '../view/App/App';

export default {
   <Route path="/">
      <IndexRoute component={App} />
      <Route path="/home">
         <IndexRoute component={Home} />
      </Route> 
   </Route>    
}
