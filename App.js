import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import Pageinprogress from './components/Pageinprogress';
import Enternumber from './components/sendmoneycomponents/Enternumber';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="TransactionList" component={TransactionList} />
        <Stack.Screen name="Pageinprogress" component={Pageinprogress} />
        <Stack.Screen name='Enternumber' component={Enternumber} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
