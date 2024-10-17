import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Keyboardtype = ({ handlePress, handleBackspace }) => {
  return (
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
  )
}

const styles = StyleSheet.create({
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
})

export default Keyboardtype;
