import { Button, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';

// function HomeScreen({navigation}) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text style={{ color: '#1DB954'}}>Home Screen</Text>
//             <Button title="Go to Details" onPress={() => navigation.navigate('Details', {itemId: 86, otherParam: 'anything you want',})}/>
//         </View>
//     )
// // }
// function StackScreen() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'My home' }}
//         />
//         <Stack.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={({ route }) => ({ title: route.params.name })}
//         />
//       </Stack.Navigator>
//     );
//   }

// function DetailsScreen({route, navigation}) {
//     const {itemId, otherParam} = route.params;
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Details Screen</Text>
//             <Text>itemId: {JSON.stringify(itemId)}</Text>
//             <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//             <Button title="Go to Details... again" onPress={() => navigation.push('Details', {itemId: Math.floor(Math.random() * 100),})}/>
//             <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//             <Button title="Go back" onPress={() => navigation.goBack()}/>
//             <Button title="Go back to the first screen in stack" onPress={() => navigation.popToTop()}/>
//         </View>
//     )
// }

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'My home',
                        headerStyle: {
                            backgroundColor: '#1DB954',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }, 
                    }}
                />
                {/* <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={({ route }) => ({ title: route.params.name })}
                /> */}
                {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
                {/* <Stack.Screen name="Details" component={DetailsScreen} initialParams={{itemId: 42}}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
