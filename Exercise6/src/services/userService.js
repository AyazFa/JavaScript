const usersDb = require("../database/User");

const getAllUsers = () => {
    return usersDb.getAllUsers();
}

const getUser = (userId) => {
    const user = usersDb.getUser(userId);
    return user;
}

const createUser = (newUser) => {
    const newUserToInsert = {
        ...newUser,
        createdAt: new Date().toLocaleString('en-US', {timeZone: 'UTC'})
    }
    const createdUser = usersDb.createNewUser(newUserToInsert);
    return createUser;
}

const updateUser = (userId, changes) => {
    const updatedUser = usersDb.updateUser(userId, changes);
    return updatedUser;
}

const deleteUser = (userId) => {
    usersDb.deleteUser(userId);
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}