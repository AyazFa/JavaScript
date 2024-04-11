const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllUsers = () => {
    return DB.users;
}

const getUser = (userId) => {
    const user = DB.users.find((user) => user.id === parseInt(userId));
    if(!user){
        return;
    }
    return user;
}

const createNewUser = (newUser) => {
    const isAlreadyAdded = DB.users.findIndex((user) => user.id === newUser.id) > -1;
    if(isAlreadyAdded){
        return;
    }
    DB.users.push(newUser);
    saveToDatabase(DB);
    return newUser;
}

const updateUser = (userId, changes) => {
    const indexForUpdate = DB.users.findIndex((user) => user.id === parseInt(userId));
    if(indexForUpdate === -1){
        return
    }
    const updatedUser = {
        ...DB.users[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString('en-US', {timeZone: 'UTC'})
    };
    DB.users[indexForUpdate] = updatedUser;
    saveToDatabase(DB);
    return updatedUser;
}

const deleteUser = (userId) => {
    const indexForDeletion = DB.users.findIndex((user) => user.id === parseInt(userId));
    if(indexForDeletion === -1){ 
        return;
    }
    DB.users.splice(indexForDeletion, 1);
    saveToDatabase(DB);
}

module.exports = { getAllUsers, getUser, createNewUser, updateUser, deleteUser};