const taskDb = require("../database/Task");
const { v4: uuid } = require('uuid');

const getAllTasks = (filterParams) => {
    try {
        const allTasks = taskDb.getAllTasks(filterParams);
        return allTasks;
    } catch (error) {
        throw error;
    }
}

const getTask = (taskId) => {
    try {
        const task = taskDb.getTask(taskId);
        return task;
    } catch (error) {
        throw error;
    }    
}

const createTask = (newTask) => {
    const taskToInsert = {
        ...newTask,
        id: newTask.id || uuid(),
        createdAt: new Date().toLocaleString('en-US', {timeZone: 'UTC'})
    }
    try {
        const createdTask = taskDb.createNewTask(taskToInsert);
        return createdTask;
    }
    catch (error) {
        throw error;
    }
}

const updateTask = (taskId, changes) => {
    try {
        const updatedTask = taskDb.updateTask(taskId, changes);
        return updatedTask;
    } catch (error) {
        throw error;
    }     
}

const deleteTask = (taskId) => {
    try {
        taskDb.deleteTask(taskId);
    } catch (error) {
        throw error;
    }    
}

const getTasksByUser = (userId) => {
    try {
        const task = taskDb.getTasksByUser(userId);
        return task;
    } catch (error) {
        throw error;
    } 
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    getTasksByUser
}