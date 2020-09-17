let admin = require('firebase-admin');

let serviceAccount = require('./auth');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://crochet-auth.firebaseio.com',
  serviceAccountId: serviceAccount.client_email,
});

module.exports = admin;
