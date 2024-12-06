import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeTab from "./HomeTabs";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main" 
                component={HomeTab}
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="Profile" 
                component={Profile}
                options={{
                    title: 'Profile',
                    headerStyle: {
                        backgroundColor: '#1DB954',
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }, 
                }}
                />
        </Stack.Navigator>
    )
}