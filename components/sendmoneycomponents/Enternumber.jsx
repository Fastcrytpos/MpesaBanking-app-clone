import { View, Text, Keyboard } from 'react-native'
import React from 'react'
import { useState } from 'react';

const Enternumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to handle number input
  const handlePress = (value) => {
    console.log(value)
    if (phoneNumber.length < 10) {
      setPhoneNumber(phoneNumber + value);
    }

    // Navigate when exactly 4 digits have been entered
    if (phoneNumber.length === 9 && value !== '⌫') {  // pin.length === 3 because adding the new digit makes it 4
      // navigation.navigate("Dashboard");
      
      
    }
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setPin(phoneNumber.slice(0, -1));
  };
  
  
  return (
    <View>
      <View>
      <Text>Enternumber</Text>
      </View>
      <Keyboard/>
    </View>
  )
}

export default Enternumber