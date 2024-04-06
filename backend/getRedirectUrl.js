import {AuthSession} from 'expo'
console.log(AuthSession.makeRedirectUri({
    scheme: 'scheme2',
    preferLocalhost: true,
}))