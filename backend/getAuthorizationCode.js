import { AuthSession } from 'expo';
import { getSpotifyCredentials } from './getSpotifyCredential';
import { makeRedirectUri } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function getAuthorizationCode () {
    const redirectUri = makeRedirectUri({
        scheme: 'crack-scheme',
        path: "components/Home",
        preferLocalhost: true
    })
        
	const [request, response, promptAsync] = useAuthRequest(
		{
			clientId: "db4013f57fab4cc087802fb9acdc4906",
			scopes: [
				'user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
				'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
				'playlist-modify-private','user-read-recently-played','user-top-read', 'ugc-image-upload', 'app-remote-control',
				'streaming', 'user-follow-modify', 'user-follow-read', 'user-read-playback-position', 'user-read-email', 
				'user-read-private'
			],
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
		}
	}, [response]);

	return code;
}