import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Pageinprogress = () => {
  return (
    <View style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <MaterialIcons name="keyboard-backspace" size={24} color="black" />
      <Text >This page is still being developed</Text>
    </View>
  )
}

export default Pageinprogress