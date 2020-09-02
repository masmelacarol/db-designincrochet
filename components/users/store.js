let admin = require('firebase-admin');
const userModel = require('./model');

const createUser = async (user) => {
  console.log('createUser -> user', user);
  try {
    let userRecord = await admin.auth().createUser(user);
    const userData = {
      id: userRecord.uid,
      username: userRecord.displayName,
      email: userRecord.email,
    };
    const newProduct = new userModel(userData);
    return newProduct.save();
  } catch (error) {
    console.log('createUser -> error creating new user', error.message);
  }
};

const getUserById = async (id) => {
  // const userRecord = await admin.auth().getUser(uid);
  return userModel.findOne({ id });
};

const createToken = async (uid) => {
  try {
    let token = await admin.auth().createCustomToken(uid);
    return token;
  } catch (error) {
    console.log('getToken -> error creating new user', error.message);
  }
};

module.exports = {
  create: createUser,
  getUserId: getUserById,
  addToken: createToken,
};
