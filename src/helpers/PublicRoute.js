import React from 'react';
import {Route,Redirect} from 'react-router-dom'


export const PublicRoute = ({component: Component, ...rest }) => {
    const token = localStorage.getItem('token');
    return (
      <Route
        {...rest}
        render={(props) =>
            token !==null ? ( 
            <div>
          <Redirect to= '/usercomp' />
          </div>) : <Component {...props} />
          
        }
      />
    );
  };