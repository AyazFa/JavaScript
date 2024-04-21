const usersDb = require("../database/User");
const { v4: uuid } = require('uuid');

const getAllUsers = () => {
    try {
        return usersDb.getAllUsers();
    } catch (error) {
        throw error;
    }
}

const getUser = (userId) => {
    try {
        const user = usersDb.getUser(userId);
        return user;
    } catch (error) {
        throw error;
    }    
}

const createUser = (newUser) => {
    const userToInsert = {
        ...newUser,
        id: newUser.id || uuid(),
        createdAt: new Date().toLocaleString('en-US', {timeZone: 'UTC'})
    }
    try {
        const createdUser = usersDb.createNewUser(userToInsert);
        return createdUser;
    }
    catch (error) {
        throw error;
    }
}

const updateUser = (userId, changes) => {
    try {
        const updatedUser = usersDb.updateUser(userId, changes);
        return updatedUser;
    } catch (error) {
        throw error;
    }     
}

const deleteUser = (userId) => {
    try {
        usersDb.deleteUser(userId);
    } catch (error) {
        throw error;
    }    
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}