import * as React from 'react';
import axios from 'axios';
import { Button, StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#212121',
      alignItems: 'center',
      justifyContent: 'center',
    },
});