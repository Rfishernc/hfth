import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import './App.scss';
import firebase from 'firebase/app';
import authRequests from '../../data/authRequests';
import connection from '../../data/connection';
import Auth from '../auth/auth';
import Friends from '../friends/friends';
import EditHoliday from '../editHoliday/editHoliday';
import HolidayDetail from '../holidayDetail/holidayDetail';
import Holidays from '../holidays/holidays';
import NewFriend from '../newFriend/newFriend';
import NewHoliday from '../newHoliday/newHoliday';
import Navbar from '../navbar/navbar';
import Home from '../home/home';

const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  const routeChecker = props => (authenticated === false
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } } } />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  const routeChecker = props => (authenticated === true
    ? (<Component { ...props } />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } } } />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authenticated: false,
    user: '',
    pendingUser: true,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          pendingUser: false,
        });
      } else {
        this.setState({
          authenticated: false,
          pendingUser: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = (user) => {
    this.setState({ authenticated: true, user });
  }

  render() {
    const { pendingUser } = this.state;
    const logoutClicked = () => {
      authRequests.logoutUser();
      this.setState({
        authenticated: false, user: '',
      });
    };

    if (pendingUser) {
      return null;
    }

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Navbar isAuthenticated={this.state.authenticated} logoutClicked={logoutClicked}></Navbar>
            <div className='row'>
              <Switch>
                <PrivateRoute path='/' exact component={Home} authenticated={this.state.authenticated}/>
                <PrivateRoute path='/friends' component={Friends} authenticated={this.state.authenticated}/>
                <PublicRoute path='/auth' component={Auth} authenticated={this.state.authenticated}/>
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
