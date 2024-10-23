import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import Keyboardtype from '../Keyboardtype';

const Enternumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to handle number input
  const handlePress = (value) => {
    if (phoneNumber.length < 10 && value !== '⌫') {
      setPhoneNumber(phoneNumber + value);
    }

    // Navigate when exactly 10 digits have been entered
    if (phoneNumber.length === 9 && value !== '⌫') {
      console.log('Navigate to Dashboard');
      // navigation.navigate("Dashboard");
    }
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.title}>Enter Number</Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </View>
      <Button style={{backgroundColor: 'green', border: '1px solid'}}>Send Money</Button>
      <Keyboardtype handlePress={handlePress} handleBackspace={handleBackspace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  displayContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 28,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});

export default Enternumber;
