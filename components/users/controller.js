const store = require('./store');

const createUser = async (user) => {
  try {
    const storeUser = await store.create(user);
    return await storeUser;
  } catch (error) {
    const message = 'Ocurrio un error creando un usuario.';
    console.error('user controller error', error.message);
    return message;
  }
};

const getAllUsers = async () => {
  try {
    const getAll = await store.getAll();
    return await getAll;
  } catch (error) {
    const message = 'Ocurrio un error encontrando los usuarios';
    console.error('user controller error', error.message);
    return message;
  }
};

const getUserById = async (id) => {
  try {
    const userId = await store.getUserId(id);
    return await userId;
  } catch (error) {
    const message = `Ocurrio un error encontrando el usuario con id ${id}.`;
    console.error('user controller error', error.message);
    return message;
  }
};

const createToken = async (uid) => {
  try {
    const token = await store.addToken(uid);
    return await token;
  } catch (error) {
    const message = 'Ocurrio un error generando el tojen del usuario';
    console.error('user controller error', error.message);
    return message;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  createToken,
};
