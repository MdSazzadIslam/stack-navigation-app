import React from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const StackNavigator = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
};

const MainStackNavigator = () => {
  return (
    <StackNavigator.Navigator screenOptions={screenOptionStyle}>
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="Profile" component={Profile} />
    </StackNavigator.Navigator>
  );
};

export default new MainStackNavigator();
