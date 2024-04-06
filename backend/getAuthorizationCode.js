import { AuthSession } from 'expo';
import { getSpotifyCredentials } from './getSpotifyCredential';
import { makeRedirectUri } from 'expo-auth-session';

const scopesArr = [
	'user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
    'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
	'playlist-modify-private','user-read-recently-played','user-top-read', 'ugc-image-upload', 'app-remote-control',
	'streaming', 'user-follow-modify', 'user-follow-read', 'user-read-playback-position', 'user-read-email', 
	'user-read-private'
];
const scopes = scopesArr.join(' ');

export const getAuthorizationCode = async () => {
	try {
		const credentials = await getSpotifyCredentials() //we wrote this function above
		const redirectUrl = AuthSession.makeRedirectUri({
			scheme: 'scheme2',
			preferLocalhost: true,
		}); //this will be something like https://auth.expo.io/@your-username/your-app-slug
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
		return result.params.code
	} catch (err) {
		console.error(err)
	}
}