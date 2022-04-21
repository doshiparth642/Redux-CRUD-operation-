import React from 'react';
import Login from '../components/Form/Login';
import VideoCall from '../components/VideoChat/VideoCall';
import { Route, Redirect, Switch, Router } from 'react-router-dom';
import FetchData from '../components/FetchData/FetchData';
import Function from '../components/FetchData/Function';
import UserForm from '../components/Form/UserForm';
import PostData from '../components/PostData/PostData';
import UserComponent from "../components/CRUD/UserComponent";
import TableList from '../components/CRUD/TableList';
import Timer from '../components/VideoChat/Timer';
import { PublicRoute } from './PublicRoute';
import history from '../config/history';
import { PrivateRoute } from './PrivateRoute';


class Routes extends React.Component {

    render() {
        return (
            
            <>
            <Router history={history}>

                <Switch>
                    <PublicRoute exact path='/' component={Login} />
                    <PublicRoute exact path='/login' component={Login} />
                    <PrivateRoute path='/usercomp' component={UserComponent} />
                    <PrivateRoute path='/signup' component={VideoCall} />
                    <PrivateRoute path='/postdata' component={PostData} />
                    <PrivateRoute path='/form' component={UserForm} />
                    <PrivateRoute path='/fetchData' component={FetchData} />
                    <PrivateRoute path='/posts' component={Function} />
                    <PrivateRoute path='/tablelist' component={TableList} />
                    <PrivateRoute path='/timer' component={Timer} />
                    <Redirect to='/' />
                    

                </Switch>

                </Router>

            </>
        )
    }
}

export default Routes