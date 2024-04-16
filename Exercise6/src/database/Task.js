const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

/**
 * @openapi
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name:
 *           type: string
 *           example: Tommy V
 *         description:
 *           type: string
 *           example: Implement CRUD
 *         type:
 *           type: string
 *           example: Technical
 *         userId:
 *           type: string
 *           example: 3df9a171-282e-47ad-9b5c-6472bb4c669d 
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         state:
 *           type: string
 *           example: active
 */

const getAllTasks = (filterParams) => {
    try {
        let tasks = DB.tasks;
        if(filterParams.state) {
            return tasks.filter((task) => task.state.toLowerCase().includes(filterParams.state));
        }
        return tasks;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getTask = (taskId) => {
    try {
        const task = DB.tasks.find((task) => task.id === taskId);
        if(!task){
            throw {
                status: 400,
                message: `Не найдена задача с id '${taskId}'`
            };
        }
        return task;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        };
    }
};

const createNewTask = (newTask) => {
    try {
        const isAlreadyAdded = DB.tasks.findIndex((task) => task.name === newTask.name) > -1;
        if(isAlreadyAdded){
            throw {
                status: 400,
                message: `Задача с наименованием '${task.name}' уже существует`
            };
        }
        DB.tasks.push(newTask);
        saveToDatabase(DB);
        return newTask;
    }
    catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };        
    }
}

const updateTask = (taskId, changes) => {
    try {
        const isAlreadyAdded = DB.tasks.findIndex((task) => task.name === changes.name) > -1;
        if(isAlreadyAdded){
            throw {
                status: 400,
                message: `Задача с наименованием '${task.name}' уже существует`
            };
        }        
        const indexForUpdate = DB.tasks.findIndex((task) => task.id === taskId);
        if(indexForUpdate === -1){
            throw {
                status: 400,
                message: `Не найдена задача с id '${taskId}`
            };
        }
        const updatedTask = {
            ...DB.tasks[indexForUpdate],
            ...changes,
            updatedAt: new Date().toLocaleString('en-US', {timeZone: 'UTC'})
        };
        DB.tasks[indexForUpdate] = updatedTask;
        saveToDatabase(DB);
        return updatedTask;
    }
    catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };
    }
}

const deleteTask = (taskId) => {
    try {
        const indexForDeletion = DB.tasks.findIndex((task) => task.id === taskId);
        if(indexForDeletion === -1){ 
            throw {
                status: 400,
                message: `Не найдена задача с id '${taskId}'`
            };
        }
        DB.tasks.splice(indexForDeletion, 1);
        saveToDatabase(DB);
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        };        
    }
}

const getTasksByUser = (userId) => {
    try {
        const task = DB.tasks.filter((task) => task.userId === userId);
        if (!task){
            throw {
                status: 400,
                message: `Не найдены задачи для пользователя с id '${userId}`
            };
        }
        return task;
    }
    catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }; 
    }
}

module.exports = { getAllTasks, getTask, createNewTask, updateTask, deleteTask, getTasksByUser };