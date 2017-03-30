/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {
  Router,
  Scene
} from 'react-native-router-flux';

import LoginView from './views/auth/Login';

export default class myles_app extends Component {
  render() {
    return (
      <Router>
        <Scene key="auth" hideNavBar>
          <Scene key="login" component={LoginView} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('myles_app', () => myles_app);
