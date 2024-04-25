import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";
import Settings from "./Settings";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                // title: '',
                headerStyle: {
                    backgroundColor: '#1DB954',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }, 
            }}
        >
            <Stack.Screen name="Home" component={Home}/>
            {/* <Stack.Screen name="Settings" component={Settings}/> */}
        </Stack.Navigator>
    )
}