import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import Header from './Header';




export const PrivateRoute = ({ component: Component, ...rest }) => {
   const token = localStorage.getItem('token');
    return (
      <Route
        {...rest}
        render={(props) =>
         token ? (
            <div>
        <Header />
          <Component {...props} />
           </div>
          ) : <Redirect to='/' />
        
        }
      />
    );
  };
  