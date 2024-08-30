import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home'); // Navigate to Home screen after login
  };

  const handleSignUp = () => {
    console.log('Sign Up');
    // Handle sign-up functionality
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password');
    // Handle forgot password functionality
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}></View>

      <View style={styles.inputContainer}>
        <Icon name="user-circle" size={80} color="#c1bfbf" style={styles.icon} />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.additionalOptions}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signUpText1}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: '#364ef0', // Blue background color
    width: 360,
    padding: 80,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -30,
    marginTop: -230,
  },
  icon: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginLeft: 90,
    marginTop: 120,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#9f9f9f',
    borderWidth: 1,
  },
  loginButton: {
    backgroundColor: '#364ef0', // Blue color for the button
    padding: 15,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  additionalOptions: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    color: '#616161', // Same blue color for the Sign Up text
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: -20,
  },
  signUpText1: {
    color: '#616161', // Same blue color for the Sign Up text
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: -20,
    marginLeft: 160,
  },
  forgotPasswordText: {
    color: '#616161', // Same blue color for the Forgot Password text
    fontSize: 13,
    marginTop: -10,
    textDecorationLine: 'underline',
    marginLeft: 150,
  },
});
