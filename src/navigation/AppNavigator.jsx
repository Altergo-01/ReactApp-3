
// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import FavorisScreen from '../screens/FavorisScreen';
import AutreScreen from '../screens/AutreScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favoris" component={FavorisScreen} />
        <Tab.Screen name="Autre" component={AutreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
