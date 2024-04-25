import { Button, StyleSheet, View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from 'react-native-paper'
import axios from 'axios'
import { getAuthorizationCode } from './backend/getAuthorizationCode';
import * as AuthSession from 'expo-auth-session';
// import Login from './components/Login';
// import Screen from './components/Screen';
import HomeScreen from './components/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Settings from './components/Settings';

// import createDrawerNavigation 
// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();

import HomeDrawer from './components/HomeDrawer';
// function Profile() {
//     return (
//         <Drawer.Navigator
//             screenOptions={({ navigation }) => ({
//                 headerLeft: () => 
//                     <Pressable onPress={navigation.toggleDrawer}>
//                         <Text>
//                             <Avatar.Text size={32} label="P"/>
//                         </Text>
//                     </Pressable>,
//                 backgroundColor: "#"
//             })}
//         >
//             <Drawer.Screen 
//                 name= "Settings" 
//                 component={HomeScreen} 
//                 options={{
//                     headerTitleStyle: {
//                         display: "none"
//                     }
//                 }}
//             />
//             <Drawer.Screen 
//                 name= "s" 
//                 component={HomeScreen} 
//             />
//         </Drawer.Navigator>
//     )
// }



export default function App() {
	return (
		<NavigationContainer>
            {/* <HomeStack.Navigator>
                <HomeStack.Screen
                    name="PAGE"
                    component={Profile}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#1DB954',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }, 
                    }}
                />
            </HomeStack.Navigator>  */}
            <HomeDrawer/>
        </NavigationContainer>        
    );      
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

