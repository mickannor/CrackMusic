import * as React from 'react';
import axios from 'axios';
import { Button, StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();
function Settings() {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
}

export default function SettingsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={"Settings"} 
            component={HomeTab}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#212121',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

