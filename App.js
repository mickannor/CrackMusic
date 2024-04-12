import { Button, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import StackScreen from './components/StackScreen';
import axios from 'axios'
import { getAuthorizationCode } from './backend/getAuthorizationCode';
import { TouchableOpacity} from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { FontAwesome } from '@expo/vector-icons';
import Login from './components/Login';

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
	// const [request, response, promptAsync] = useAuthRequest(
	// 	{
	// 	  clientId: process.env.clientID,
	// 	  scopes: ['user-read-email', 'playlist-modify-public'],
	// 	  // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
	// 	  // this must be set to false
	// 	  usePKCE: false,
	// 	  redirectUri: makeRedirectUri({
	// 		scheme: 'crack-scheme'
	// 	  }),
	// 	},
	// 	discovery,
	//   );
	  
	//   React.useEffect(() => {
	// 	const fetchUserInfo = async () => {
	// 	  if (response?.type === 'success') {
	// 		const { code } = response.params;
	  
	// 		// Exchange authorization code for access token
	// 		const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', {
	// 		  grant_type: 'authorization_code',
	// 		  code: code,
	// 		  redirect_uri: makeRedirectUri({
	// 			scheme: 'crack-scheme'
	// 		  }),
	// 		  client_id: process.env.clientID,
	// 		  // Add client secret if required by Spotify
	// 		});
	  
	// 		// Use access token to fetch user information
	// 		const userInfo = await axios.get('https://api.spotify.com/v1/me', {
	// 		  headers: {
	// 			'Authorization': `Bearer ${tokenResponse.data.access_token}`
	// 		  }
	// 		});
	  
	// 		// Update state with user information
	// 		setUserInfo(userInfo.data);
	// 	  }
	// 	};
	  
	// 	fetchUserInfo();
	//   }, [response]);  
    //   handleSpotifyLogin = async () => {
    //     let redirectUrl = AuthSession.makeRedirectUri({
	// 		scheme: 'my-scheme',
    //       	path: 'redirect'
	// 		// preferLocalhost: true,
	// 	});
    //     let results = await AuthSession.startAsync({
    //         authUrl:
    //         `https://accounts.spotify.com/authorize?client_id=${process.env.clientID}
    //         &redirect_uri=${encodeURIComponent(redirectUrl)}
    //         &scope=user-read-email&response_type=token`
    //     });
    //     if (results.type !== 'success') {
    //       this.setState({ didError: true });
    //     } else {
    //       const userInfo = await axios.get(`https://api.spotify.com/v1/me`, {
    //         headers: {
    //           "Authorization": `Bearer ${results.params.access_token}`
    //         }
    //       });
    //       this.setState({ userInfo: userInfo.data });
    //     }
    //   };
  

	  return (

		<NavigationContainer>
            <Stack.Navigator>
				<Stack.Screen
                    name="Login"
                    component={Login}
                    // options={{
                    //     title: 'My home',
                    //     headerStyle: {
                    //         backgroundColor: '#1DB954',
                    //     },
                    //     headerTintColor: '#000',
                    //     headerTitleStyle: {
                    //         fontWeight: 'bold',
                    //     }, 
                    // }}
                />
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
			</Stack.Navigator>
        </NavigationContainer>
		
    
    //   displayError = () => {
    //     return (
    //       <View style={styles.userInfo}>
    //         <Text style={styles.errorText}>
    //           There was an error, please try again.
    //         </Text>
    //       </View>
    //     );
    //   }
    
    //   displayResults = () => {
    //     { return this.state.userInfo ? (
    //       <View style={styles.userInfo}>
    //         <Image
    //           style={styles.profileImage}
    //           source={ {'uri': this.state.userInfo.images[0].url} }
    //         />
    //         <View>
    //           <Text style={styles.userInfoText}>
    //             Username:
    //           </Text>
    //           <Text style={styles.userInfoText}>
    //             {this.state.userInfo.id}
    //           </Text>
    //           <Text style={styles.userInfoText}>
    //             Email:
    //           </Text>
    //           <Text style={styles.userInfoText}>
    //             {this.state.userInfo.email}
    //           </Text>
    //         </View>
    //       </View>
    //     ) : (
    //       <View style={styles.userInfo}>
    //         <Text style={styles.userInfoText}>
    //           Login to Spotify to see user data.
    //         </Text>
    //       </View>
    //     )}
    //   }

    
        // <View style={styles.container}>
        //     <FontAwesome
        //         name="spotify"
        //         color="#2FD566"
        //         size={128}
        // />
        // <TouchableOpacity
        //     style={styles.button}
        //     onPress={promptAsync}
        //     disabled={this.state.userInfo ? true : false}
        // >
        //     <Text style={styles.buttonText}>
        //         Login with Spotify
        //     </Text>
        // </TouchableOpacity>
        // {this.state.didError ?
        //     this.displayError() :
        //     this.displayResults()
        // }
        // </View>
    );



        
                {<Stack.Screen
                    name="Stack"
                    component={StackScreen}
                />}
                {<Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={({ route }) => ({ title: route.params.name })}
                /> }
                { <Stack.Screen name="Home" component={HomeScreen}/> }
                {<Stack.Screen name="Details" component={DetailsScreen} initialParams={{itemId: 42}}/> }
            
}

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

