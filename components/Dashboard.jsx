import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Grow from './Grow';
import Services from './Services';
import Transactions from './Transactions';



const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Services' component={Services}/>
        <Tab.Screen name='Grow' component={Grow}/>
        <Tab.Screen name='Transactions' component={Transactions}/>
    </Tab.Navigator>
      
   
  );
}
