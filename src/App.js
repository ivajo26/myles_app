/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import { Button } from 'react-native-elements';
import firebase from './firebase';


export default class myles_app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Estamos renderizando las lista</Text>
        <Button
          small
          raice
          backgroundColor='teal'
          title='Probando función'/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myles_app', () => myles_app);
