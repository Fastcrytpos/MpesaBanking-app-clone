import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const Login = ({ navigation }) => {
  const [pin, setPin] = useState('');

  // Function to handle number input
  const handlePress = (value) => {
    if (pin.length < 4) {
      setPin(pin + value);
    }

    // Navigate when exactly 4 digits have been entered
    if (pin.length === 3 && value !== '⌫') {  // pin.length === 3 because adding the new digit makes it 4
      navigation.navigate("Dashboard");
    }
  };

  // Function to handle backspace
  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Avatar and Name */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SM</Text>
        </View>
        <Text style={styles.name}>SAMSON MUNGAI</Text>
        <Text style={styles.phone}>254790509413</Text>
      </View>

      {/* PIN Entry */}
      <Text style={styles.pinLabel}>ENTER M-PESA PIN:</Text>
      <View style={styles.pinContainer}>
        {Array(4).fill('').map((_, index) => (
          <View key={index} style={styles.pinCircle}>
            <Text style={styles.pinText}>{pin[index] ? '•' : ''}</Text>
          </View>
        ))}
      </View>

      {/* Numeric Keypad */}
      <View style={styles.keypad}>
        {[1, 2, 3].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.key}
            onPress={() => handlePress(number.toString())}
          >
            <Text style={styles.keyText}>{number}</Text>
          </TouchableOpacity>
        ))}

        {[4, 5, 6].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.key}
            onPress={() => handlePress(number.toString())}
          >
            <Text style={styles.keyText}>{number}</Text>
          </TouchableOpacity>
        ))}

        {[7, 8, 9].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.key}
            onPress={() => handlePress(number.toString())}
          >
            <Text style={styles.keyText}>{number}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.key}>
          <Text style={styles.keyText}>{''}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.key}
          onPress={() => handlePress('0')}
        >
          <Text style={styles.keyText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.key}
          onPress={handleBackspace} // Separate backspace logic
        >
          <Text style={styles.keyText}>⌫</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  phone: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  pinLabel: {
    fontSize: 16,
    marginVertical: 20,
    color: '#7f8c8d',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 40,
  },
  pinCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#BDC3C7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  keypad: {
    flexWrap: 'wrap',
    marginTop: 200,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  key: {
    width: '33%',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default Login;
