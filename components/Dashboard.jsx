import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Grow from './Grow';
import Services from './Services';
import Transactions from './Transactions';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

const Dashboard= () => {
  return (
    
    <Tab.Navigator
        initialRouteName='Home'
        
        >
        <Tab.Screen name='Home' component={Home} options={{
          tabBarIcon: ({  }) => (
            <Image
              style={styles.bottomTabIcon}
              source={require('../assets/homeicon.png')}                  
              />)}}/>

        <Tab.Screen name='Services' component={Services}/>
        <Tab.Screen name='Grow' component={Grow}/>
        <Tab.Screen name='Transactions' component={Transactions}/>
    </Tab.Navigator>
    
      
   
  );
}

export default Dashboard
