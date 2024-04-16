const userService = require('../services/userService');

const getAllUsers = (req,res) => {
    try {
        const allUsers = userService.getAllUsers();
        res.send({ status: 'OK', data: allUsers });        
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    }
};

const getUser = (req,res) => {
    const {
        params: { userId },
    } = req;
    if (!userId) {
        res.status(400).send({
            status: 'FAILED', data: { error: "Параметр ':userId' не может быть пустым" }
        });
    }
    try {
        const user = userService.getUser(userId);
        res.send({ status: 'OK', data: user });        
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    }    
};

const createUser = (req,res) => {
    const {body} = req;
    if (!body.name ||
        !body.role ||
        !body.organization ||
        !body.skills){
            res.status(400).send({
                status: 'FAILED', data: { error: "Не передан в тело запроса один из обязательных параметров при создании пользователя: 'name', 'role', 'organization', 'skills'" }
            })
            return;
        }
    const newUser = {
        id: body.id,
        name: body.name,
        role: body.role,
        organization: body.organization,
        skills: body.skills,
    }
    try {
        const createdNewUser = userService.createUser(newUser);
        res.status(201).send({status: 'OK', data: createdNewUser})
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    }
};

const updateUser = (req,res) => {
    const {
        body, params: {userId},
    } = req;
    if(!userId){
        res.status(400).send({
            status: 'FAILED', data: { error: "Параметр ':userId' не может быть пустым" }
        });
    }
    try {
        const updatedUser = userService.updateUser(userId, body);
        res.send({ status: 'OK', data: updatedUser });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    }    
};

const deleteUser = (req,res) => {
    const { params: { userId }} = req;
    if(!userId){
        res.status(400).send({
            status: 'FAILED', data: { error: "Параметр ':userId' не может быть пустым" }
        });
    }
    try {
        userService.deleteUser(userId);
        res.status(204).send({ status: 'OK' });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error }
        })
    }     
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};