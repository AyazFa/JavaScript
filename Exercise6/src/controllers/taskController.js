const taskService = require('../services/taskService');

const getAllTasks = (req,res) => {
    const { state } = req.query;
    try {
        const allTasks = taskService.getAllTasks({state});
        res.send({ status: 'OK', data: allTasks });        
    } catch {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    }
};

const getTask = (req,res) => {
    const {
        params: { taskId },
    } = req;
    if (!taskId) {
        res.status(400).send({
            status: 'FAILED', data: { error: "Параметр ':taskId' не может быть пустым" }
        });
    }
    try {
        const task = taskService.getTask(taskId);
        res.send({ status: 'OK', data: task });        
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    }    
};

const createTask = (req,res) => {
    const {body} = req;
    if (!body.name ||
        !body.description ||
        !body.type ||
        !body.userId ||
        !body.state){
            res.status(400).send({
                status: 'FAILED', data: { error: "Не передан в тело запроса один из обязательных параметров при создании задачи: 'name', 'description', 'type', 'userId', 'state'" }
            })
            return;
        }
    const newTask = {
        id: body.id,
        name: body.name,
        description: body.description,
        type: body.type,
        userId: body.userId,
        state: body.state
    }
    try {
        const createdNewTask = taskService.createTask(newTask);
        res.status(201).send({status: 'OK', data: createdNewTask})
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    }
};

const updateTask = (req,res) => {
    const {
        body, params: { taskId },
    } = req;
    if(!taskId){
        res.status(400).send({
            status: 'FAILED', data: { error: "Параметр ':taskId' не может быть пустым" }
        });
    }
    try {
        const updatedTask = taskService.updateTask(taskId, body);
        res.send({ status: 'OK', data: updatedTask });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    }    
};

const deleteTask = (req,res) => {
    const { params: { taskId }} = req;
    if(!taskId){
        res.status(400).send({
            status: 'FAILED', data: { error: "Параметр ':taskId' не может быть пустым" }
        });
    }
    try {
        taskService.deleteTask(taskId);
        res.status(204).send({ status: 'OK' });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    }     
};

const getTasksByUser = (req,res) => {
    const {
        params: { userId }
    } = req;
    if (!userId) {
        res.status(400).send({
            status: 'FAILED', data: { error: "Параметр ':userId' не может быть пустым" }
        });
    }
    try {
        const tasks = taskService.getTasksByUser(userId);
        res.send({ status: 'OK', data: tasks });        
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    } 
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    getTasksByUser
};