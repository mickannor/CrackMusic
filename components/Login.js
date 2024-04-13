import * as React from 'react';
import { Redirect } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Button, StyleSheet, View } from "react-native";
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function Login({navigation}) {
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
            <FontAwesome
                name="spotify"
                color="#1DB954"
                size={128}
                alignItems="center"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={promptAsync}
            >
            <Button 
                style={styles.button}
                disabled={!request}
                title="Login"
                onPress={() => {
                    promptAsync();
                }}
            />
            </TouchableOpacity>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#000',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#1DB954',
      padding: 20
    },
    buttonText: {
      color: '#000',
      fontSize: 20
    },
    profileImage: {
      height: 64,
      width: 64,
      marginBottom: 32
    }
  });