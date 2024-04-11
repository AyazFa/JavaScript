const userService = require('../services/userService');

const getAllUsers = (req,res) => {
    const allUsers = userService.getAllUsers();
    res.send({ status: 'OK', data: allUsers });
};

const getUser = (req,res) => {
    const {
        params: { userId },
    } = req;
    if (!userId) {
        return;
    }
    const user = userService.getUser(userId);
    res.send({ status: 'OK', data: user });
};

const createUser = (req,res) => {
    const {body} = req;
    if (!body.name ||
        !body.roleId ||
        !body.organization ||
        !body.skills){
            res.status(400).send({
                status: 'FAILED', data: { error: "Не передан в тело запроса один из обязательных параметров при создании пользователя: 'name', 'roleId', 'organization', 'skills'" }
            })
            return;
        }
    const newUser = {
        id: body.id,
        name: body.name,
        roleId: body.roleId,
        organization: body.organization,
        skills: body.skills,
    }
    const createdNewUser = userService.createUser(newUser);
    res.status(201).send({status: 'OK', data: createdNewUser})
};

const updateUser = (req,res) => {
    const {
        body, params: {userId},
    } = req;
    if(!userId){
        return;
    }
    const updatedUser = userService.updateUser(userId, body);
    res.send({ status: 'OK', data: updatedUser });
};

const deleteUser = (req,res) => {
    const { params: { userId }} = req;
    if(!userId){
        return;
    }
    userService.deleteUser(userId);
    res.status(204).send({ status: 'OK' });
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};