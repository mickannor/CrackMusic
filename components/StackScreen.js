import * as React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';

export default function StackScreen() {
    return (
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'My home' }}
        />
    );
  }