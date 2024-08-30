import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign-up functionality
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      </View>

      <View style={styles.inputContainer}>
        <Icon
          name="user-circle"
          size={80}
          color="#c1bfbf"
          style={styles.icon}
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={text => setUsername(text)}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLinkText}>Already have an account? </Text>
        <Text style={styles.loginLinkText1}> Login</Text>
      </TouchableOpacity>
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
    marginTop: -150,
  },
  icon: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginLeft: 90,
    marginTop: 100,
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
  signUpButton: {
    backgroundColor: '#364ef0', // Blue color for the button
    padding: 15,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLinkText: {
    color: '#6d6d6d',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
  },
  loginLinkText1: {
    color: '#6d6d6d',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: -20,
    marginLeft:160,
  },
});
