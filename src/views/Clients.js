import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button
} from 'react-native';

import { Actions } from 'react-native-router-flux'

export default class LoginView extends Component {
  state = {
    credentials: {
      email: '',
      password: ''
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Vista para los clientes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  inputLabel: {
    marginHorizontal: 5,
    textAlign: 'center',
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  input: {
    textAlign: 'center'
  },
});
