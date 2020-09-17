const admin = require('firebase-admin');

const verify = async (idToken) => {
  try {
    const verifyToken = await admin.auth().verifyIdToken(idToken);
    return verifyToken;
  } catch (error) {
    throw error(error.message, 403);
  }
};

const getToken = (auth) => {
  if (!auth) throw new Error('No hay token');
  let token = auth.replace('Bearer ', '');
  if (auth.indexOf('Bearer ') === -1) throw error('formmatted invalid', 400);
  return token;
};

const decodeHeader = (req) => {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);
  req.user = decoded;

  return decoded;
};

const check = {
  own: (req, owner) => {
    const decoded = decodeHeader(req);
    if (decoded.id !== owner) throw error('No puedes hacer esto', 401);
  },
  logged: (req) => {
    const decoded = decodeHeader(req);
  },
};

module.exports = check;
