import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRout = ({ component: Component, ...props }) => (
  <Route exact path={props.path}>
    {
      () => (props.loggedIn ? <Component {...props} /> : <Redirect to='/sign-in' />)
    }
  </Route>);

export default ProtectedRout;
