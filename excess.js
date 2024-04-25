// function Home() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen 
//                 name="Screen"
//                 component={Screen}
//             />
//             <Tab.Screen 
//                 name="For you"
//                 component={You}
//             />
//             <Tab.Screen 
//                 name="Library"
//                 component={Library}
//             />``
//             <Tab.Screen 
//                 name="Search"
//                 component={Search}
//             />
//         </Tab.Navigator>   
//     )
// }

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
// function HomeScreen() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
// }


// const Tab = createBottomTabNavigator();



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
  

               // {<Stack.Screen
                //     name="Stack"
                //     component={StackScreen}
                // />}
                // {<Stack.Screen
                //     name="Profile"
                //     component={ProfileScreen}
                //     options={({ route }) => ({ title: route.params.name })}
                // /> }
                // { <Stack.Screen name="Home" component={HomeScreen}/> }
                // {<Stack.Screen name="Details" component={DetailsScreen} initialParams={{itemId: 42}}/> }

                // <Stack.Navigator>
				// <Stack.Screen
                //     name=" "
                //     component={Login}
                //     options={{
                //         headerStyle: {
                //             backgroundColor: '#1DB954',
                //         },
                //         headerTintColor: '#000',
                //         headerTitleStyle: {
                //             fontWeight: 'bold',
                //         }, 
                //     }}
                // />
                // <Stack.Screen
                //     name="Home"
                //     component={Home}
                //     options={{
                //         title: 'Home',
                //         headerStyle: {
                //             backgroundColor: '#1DB954',
                //         },
                //         headerTintColor: '#000',
                //         headerTitleStyle: {
                //             fontWeight: 'bold',
                //         },
                //         // headerShown: false 
                //     }}
                // />
                {/* <Stack.Screen name="Screen" component={Screen}/>
                <Stack.Screen name="Library" component={Library}/>
                <Stack.Screen name="You" component={You}/>
                <Stack.Screen name="Search" component={Search}/> */}
                {/* <Stack.Screen
                    name="Screen"
                    component={Screen}
                    options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: '#1DB954',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }, 
                    }}
                /> */}
			// </Stack.Navigator>