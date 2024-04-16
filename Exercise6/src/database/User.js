const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 7798473a-4759-41d0-a513-954f25a852d3
 *         name:
 *           type: string
 *           example: Charlie
 *         role:
 *           type: string
 *           example: Developer
 *         organization:
 *           type: string
 *           example: Google
 *         skills:
 *           type: array
 *           items:
 *              type: string
 *           example: ["Data science", "DevOps"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */

const getAllUsers = () => {
    try {
        return DB.users;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getUser = (userId) => {
    try {
        const user = DB.users.find((user) => user.id === userId);
        if(!user){
            throw {
                status: 400,
                message: `Не найден пользователь с id '${userId}'`
            };
        }
        return user;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        };
    }
};

const createNewUser = (newUser) => {
    try {
        const isAlreadyAdded = DB.users.findIndex((user) => user.name === newUser.name) > -1;
        if(isAlreadyAdded){
            throw {
                status: 400,
                message: `Пользователь с именем '${user.name}' уже существует`
            };
        }
        DB.users.push(newUser);
        saveToDatabase(DB);
        return newUser;
    }
    catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };        
    }
}

const updateUser = (userId, changes) => {
    try {
        const isAlreadyAdded = DB.users.findIndex((user) => user.name === changes.name) > -1;
        if(isAlreadyAdded){
            throw {
                status: 400,
                message: `Пользователь с именем '${user.name}' уже существует`
            };
        }        
        const indexForUpdate = DB.users.findIndex((user) => user.id === userId);
        if(indexForUpdate === -1){
            throw {
                status: 400,
                message: `Не найден пользователь с id '${userId}`
            };
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
    catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };
    }
}

const deleteUser = (userId) => {
    try {
        const indexForDeletion = DB.users.findIndex((user) => user.id === userId);
        if(indexForDeletion === -1){ 
            throw {
                status: 400,
                message: `Не найден пользователь с id '${userId}'`
            };
        }
        DB.users.splice(indexForDeletion, 1);
        saveToDatabase(DB);
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };        
    }
}

module.exports = { getAllUsers, getUser, createNewUser, updateUser, deleteUser};