import { Button, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import StackScreen from './components/StackScreen';
import { AuthSession } from 'expo';
import axios from 'axios'

const scopesArr = [
	'user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
    'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
	'playlist-modify-private','user-read-recently-played','user-top-read', 'ugc-image-upload', 'app-remote-control',
	'streaming', 'user-follow-modify', 'user-follow-read', 'user-read-playback-position', 'user-read-email', 
	'user-read-private'
];
const scopes = scopesArr.join(' ');



router.get('/api/spotify-credentials', (req, res, next) => {
  const clientId = process.env.clientId;
  const clientSecret = process.env.clientSecret;
  const redirectUri = process.env.redirectUri;
  const spotifyCredentials = { clientId, clientSecret, redirectUri };
  res.json(spotifyCredentials);
});

const getSpotifyCredentials = async () => {
    const res = await axios.get('/api/spotify-credentials')
    const spotifyCredentials = res.data
    return spotifyCredentials
}

const getAuthorizationCode = async () => {
	try {
		const credentials = await getSpotifyCredentials() //we wrote this function above
		const redirectUrl = AuthSession.makeRedirectUri({
            scheme: 'scheme2',
            preferLocalhost: true,
            isTripleSlashed: true,
        })
		const result = await AuthSession.startAsync({
		authUrl:
			'https://accounts.spotify.com/authorize' +
			'?response_type=code' +
			'&client_id=' +
			credentials.clientId +
			(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
			'&redirect_uri=' +
			encodeURIComponent(redirectUrl),
		})
	} catch (err) {
		console.error(err)
	}
	return result.params.code
}


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
    const code = getAuthorizationCode();
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
                    name="Stack"
                    component={StackScreen}
                /> */}
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
