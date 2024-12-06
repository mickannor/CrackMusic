import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PersonCircleOutline } from "react-ionicons";
import You from "./You";
import Home from "./Home";
import Search from "./Search";
import Library from "./Library";

import { Button, StyleSheet, View, Text, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function HomeTab(  ) {
    return (
        <Tab.Navigator
            screenOptions= {({route,navigation}) => ({
                headerLeft: () => 
                    <Pressable onPress={() => navigation.navigate('Profile')}>
                        <PersonCircleOutline
                            color={'#00000'}
                            height={'250px'}
                            width={'250px'}
                        />
                    </Pressable>,
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                        ? 'home'
                        : 'home-outline';
                    } else if (route.name === 'Library') {
                        iconName = focused
                        ? 'library'
                        : 'library-outline';
                    } else if (route.name == 'Search') {
                        iconName = focused
                        ? 'search'
                        : 'search-outline';
                    } else if (route.name === 'For You') {
                        iconName = focused
                        ? 'finger-print'
                        : 'finger-print-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused
                        ? 'person-circle'
                        : 'person-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#1DB954',
                tabBarInactiveTintColor: '#191414',
            })}>
            <Tab.Screen 
                name="Home"
                component={Home}
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
            <Tab.Screen 
                name="Search"
                component={Search}
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
            <Tab.Screen 
                name="For You"
                component={You}
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
            <Tab.Screen 
                name="Library"
                component={Library}
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
        </Tab.Navigator>
    )
}