const router = require('express').Router()

router.get('/api/spotify-credentials', (req, res, next) => {
  const clientId = process.env.clientId;
  const clientSecret = process.env.clientSecret;
  const redirectUri = process.env.redirectUri;
  const spotifyCredentials = { clientId, clientSecret, redirectUri };
  res.json(spotifyCredentials);
});