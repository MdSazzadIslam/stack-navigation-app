import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        A React Navigation app is a chain of navigators that define the screen
        flow of your app. ... Each navigator comes with various configuration
        options we can define in plain Javascript. E.g. the header behaviour of
        a stack, or the icons and style of your tabs.
      </Text>

      <Button
        title="Go to profile"
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  baseText: {
    fontFamily: 'Tahoma',
    fontSize: 15,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
});

export default Home;
