import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button
} from 'react-native';

export default class LoginView extends Component {
  state = {
    credentials: {
      email: '',
      password: ''
    }
  }

  onChange = (key, text) => {
    const data = this.state.credentials;
    data[key] = text;
    this.setState({ credentials: data });
  }
  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.inputLabel}>Digita tus datos para ingresar</Text>
          <View style={styles.inputContainer} >
            <TextInput
              style={styles.input}
              keyboardTypes="email-address"
              placeholder="Escribe tu correo"
              onChangeText={ (text) => {this.onChange('email', text)} }/>
          </View>

          <View style={styles.inputContainer} >
            <TextInput
              keyboardTypes="numeric"
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={true}
              onChangeText={ (text) => {this.onChange('password', text)} }/>
          </View>

          <Button
            title="Iniciar"
            color="grey"
          />
        </View>
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
