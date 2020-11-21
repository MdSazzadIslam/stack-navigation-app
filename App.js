/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './screens/Home';
import Profile from './screens/Profile';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer styles={StyleSheet.container}>
      <stack.Navigator>
        <stack.Screen name="Profile" component={Profile} />
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
});

export default App;
