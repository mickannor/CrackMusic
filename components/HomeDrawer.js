import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import HomeTab from "./HomeTabs";
import Home from "./Home";
import Settings from "./Settings";
import { Button, StyleSheet, View, Text, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper'
import SettingsStack from "./Settings";

const Drawer = createDrawerNavigator(); 

export default function HomeDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                headerLeft: () => 
                    <Pressable onPress={navigation.toggleDrawer}>
                        <Text>
                            <Avatar.Text size={32} label="PX" backgroundColor="white" color="black"/>
                        </Text>
                    </Pressable>,
                // backgroundColor: "#1DB954"
            })}
        >
            <Drawer.Screen 
                name= "Hom" 
                component={HomeTab} 
                options={{
                    headerStyle: {
                        backgroundColor: '#1DB954',
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }, 
                }}
            />
            <Drawer.Screen 
                name= "Settings" 
                component={HomeTab} 
                options={{
                    headerStyle: {
                        backgroundColor: '#1DB954',
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            
        </Drawer.Navigator>
    )
}