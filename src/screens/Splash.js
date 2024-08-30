import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SplashScreen({ navigation }) {

  // Use useEffect to navigate after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Navigate to the Home screen after 5 seconds
    }, 5000);

    // Cleanup the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FontAwesome name="check-square-o" size={50} color="white" />
        <Text style={styles.heading}>Dooit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#364ef0', // Blue background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  heading: {
    fontSize: 34,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
