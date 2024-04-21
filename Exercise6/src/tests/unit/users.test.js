const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../../controllers/userController');

const mockRequest = (sessionData, body) => ({
    params: { userId: sessionData },
    body,
  });
  
const mockResponse = () => {
    const res = { };
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res); 
    return res;
  };

const mockUser = {
    id: 'ab047f5a-a653-40b3-9a94-31acdf9ab0a4',
    name: 'Larry Big Data',
    role: 'Developer',
    organization: 'Google',
    skills: ['Senior Backend', 'Senior Frontend'],
}

const mockRequestObject = {
    data: {
        id: 'ab047f5a-a653-40b3-9a94-31acdf9ab0a4',
        name: 'Larry Big Data',
        role: 'Developer',
        organization: 'Google',
        skills: ['Senior Backend', 'Senior Frontend'],
        createdAt: expect.anything(),
        updatedAt: expect.anything()            
    },
    status: 'OK'
}

describe("User Controller", () => {
    test('responds to getAllUsers', async () => {
        const req = mockRequest();
        const res = mockResponse();
        await getAllUsers(req, res);
        expect(res.send).toHaveBeenCalled();
    });

    test('responds to createUser', async () => {
        const req = mockRequest({}, mockUser);
        const res = mockResponse();
        await createUser(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
    });

    test('responds to updateUser', async () => {
        const req = mockRequest(mockUser.id, {createdAt: '4/16/2024, 11:37:08 AM'});
        const res = mockResponse();
        await updateUser(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining(mockRequestObject));
    });     

    test('responds to getUser/:userId', async () => {
        const req = mockRequest('1234');
        const res = mockResponse();
        await getUser(req, res);
        expect(res.send).toHaveBeenCalledWith({data: {error: 'Не найден пользователь с id \'1234\''}, status: 'FAILED'})
    });

    test('responds to getUser/:userId', async () => {
        const req = mockRequest(mockUser.id);
        const res = mockResponse();
        await getUser(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining(mockRequestObject));
    });    

    test('responds to deleteUser/:userId', async () => {
        const req = mockRequest(mockUser.id);
        const res = mockResponse();
        await deleteUser(req, res);
        expect(res.status).toHaveBeenCalledWith(204);
    });
});