import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import You from "./You";
import Home from "./Home";
import Search from "./Search";
import Library from "./Library";
import Settings from "./Settings";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function HomeTab() {
    return (
        <Tab.Navigator
            screenOptions= {({route}) => ({
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
                    } else if (route.name === 'For you') {
                        iconName = focused
                        ? 'finger-print'
                        : 'finger-print-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#1DB954',
                tabBarInactiveTintColor: '#191414',
                headerShown: false,
            })}>
            <Tab.Screen 
                name="Home"
                component={Home}
            />
            <Tab.Screen 
                name="Search"
                component={Search}
            />
            <Tab.Screen 
                name="For you"
                component={You}
            />
            <Tab.Screen 
                name="Library"
                component={Library}
            />
        </Tab.Navigator>
    )
}