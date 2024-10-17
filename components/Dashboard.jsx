import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Grow from './Grow';
import Services from './Services';
import Transactions from './Transactions';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true, // Ensure labels are shown
        tabBarLabelStyle: {
          fontSize: 12,          // Customize label text size
          paddingBottom: 4,      // Adjust spacing below the label
          
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Image 
                  source={require('../assets/homeicon.png')}
                  style={{ width: 24, height: 24 }}  // Resizing icon
                />
              </View>
            );
          }
        }}
      />

      <Tab.Screen 
        name="Services" 
        component={Services}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Image 
                  source={require('../assets/services.png')}
                  style={{ width: 24, height: 24 }}  // Resizing icon
                />
              </View>
            );
          }
        }}
      />

      <Tab.Screen 
        name="Grow" 
        component={Grow}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Image 
                  source={require('../assets/growicon.png')}
                  style={{ width: 24, height: 24 }}  // Resizing icon
                />
              </View>
            );
          }
        }}
      />

      <Tab.Screen 
        name="Transactions" 
        component={Transactions}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Image 
                  source={require('../assets/transacticon.png')}
                  style={{ width: 24, height: 24 }}  // Resizing icon
                />
              </View>
            );
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
