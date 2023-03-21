import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Results} from './Results';
export const Routes = () => {
  return (
    <div>
      <Route exact path="/">
          <Redirect to="/search" />
      </Route>
      <Route exact path={['/search', '/images', '/news', '/videos']}>
        <Results/>
      </Route>
    </div>
  )
}

