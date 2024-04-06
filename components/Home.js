import * as React from 'react';
import axios from 'axios';
import { Button, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const getSpotifyCredentials = async () => {
//     const res = await axios.get('/api/spotify-credentials')
//     const spotifyCredentials = res.data
//     return spotifyCredentials
// }

// const getAuthorizationCode = async () => {
// 	try {
// 		const credentials = await getSpotifyCredentials() //we wrote this function above
// 		const redirectUrl = AuthSession.getRedirectUrl(); //this will be something like https://auth.expo.io/@your-username/your-app-slug
// 		const result = await AuthSession.startAsync({
// 		authUrl:
// 			'https://accounts.spotify.com/authorize' +
// 			'?response_type=code' +
// 			'&client_id=' +
// 			credentials.clientId +
// 			(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
// 			'&redirect_uri=' +
// 			encodeURIComponent(redirectUrl),
// 		})
// 	} catch (err) {
// 		console.error(err)
// 	}
// 	return result.params.code
// }

// navigation.navigate('Details', {itemId: 86, otherParam: 'anything you want',})
export default function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ color: '#1DB954'}}>Home Screen</Text>
            <Button title="Go to Details" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });