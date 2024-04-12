import * as React from 'react';
import { Redirect } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { Button, StyleSheet, View } from "react-native";
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function Login () {
    const redirectUri = makeRedirectUri({
        scheme: 'crack-scheme',
        path: "components/Home",
        preferLocalhost: true
    })
        
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: "db4013f57fab4cc087802fb9acdc4906",
            scopes: ['user-read-email', 'playlist-modify-public'],
            // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
            // this must be set to false
            usePKCE: false,
            redirectUri: redirectUri,
        },
        discovery
    );
    
    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
            navigation.navigate('Home');
            console.log(code);
        }
    }, [response]);
    
    return (
        <View style={styles.container}>
            <Button 
                style={styles.button}
                disabled={!request}
                title="Login"
                onPress={() => {
                    promptAsync();
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#000',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    button: {
      backgroundColor: '#2FD566',
      padding: 20
    },
    buttonText: {
      color: '#000',
      fontSize: 20
    },
    userInfo: {
      height: 250,
      width: 200,
      alignItems: 'center',
    },
    userInfoText: {
      color: '#fff',
      fontSize: 18
    },
    errorText: {
      color: '#fff',
      fontSize: 18
    },
    profileImage: {
      height: 64,
      width: 64,
      marginBottom: 32
    }
  });