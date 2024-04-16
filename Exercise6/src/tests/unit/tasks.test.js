const { getAllTasks, getTask, createTask, updateTask, deleteTask, getTasksByUser } = require('../../controllers/taskController');

const mockTaskRequest = (sessionData, body) => ({
    params: { taskId: sessionData },
    body,
  });

  const mockUserRequest = (sessionData) => ({
    params: { userId: sessionData }
  });  

  const mockQueryRequest = (queryParameter) => ({
    query: queryParameter
  });
  
const mockResponse = () => {
    const res = { };
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res); 
    return res;
  };

const mockTask = {
    id: '3df9a171-282h-47ad-9b5c-6472bb4c669d',
    name: 'CRUD. Developing',
    description: 'Implementing CRUD',
    type: 'Technical task test',
    userId: '7798473a-4759-41d0-d513-954f25a852d3',
    state: 'active'
}

const mockRequestObject = {
    data: {
        id: mockTask.id,
        name: mockTask.name,
        description: mockTask.description,
        type: mockTask.type,
        userId: mockTask.userId,
        state: mockTask.state,
        createdAt: expect.anything(),
        updatedAt: expect.anything()            
    },
    status: 'OK'
}

const mockRequestArrayObject = {
    data: [{
        id: mockTask.id,
        name: mockTask.name,
        description: mockTask.description,
        type: mockTask.type,
        userId: mockTask.userId,
        state: mockTask.state,
        createdAt: expect.anything(),
        updatedAt: expect.anything()            
    }],
    status: 'OK'
}

describe("Task Controller", () => {
    test('responds to getAllTasks', async () => {
        const req = mockQueryRequest('active');
        const res = mockResponse();
        await getAllTasks(req, res);
        expect(res.send).toHaveBeenCalled();
    });

    test('responds to createTask', async () => {
        const req = mockTaskRequest({}, mockTask);
        const res = mockResponse();
        await createTask(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
    });

    test('responds to updateTask', async () => {
        const req = mockTaskRequest(mockTask.id, {createdAt: '4/16/2024, 11:37:08 AM'});
        const res = mockResponse();
        await updateTask(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining(mockRequestObject));
    });     

    test('responds to getTask/:taskId', async () => {
        const req = mockTaskRequest('9999');
        const res = mockResponse();
        await getTask(req, res);
        expect(res.send).toHaveBeenCalledWith({data: {error: 'Не найдена задача с id \'9999\''}, status: 'FAILED'})
    });

    test('responds to getTask/:taskId', async () => {
        const req = mockTaskRequest(mockTask.id);
        const res = mockResponse();
        await getTask(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining(mockRequestObject));
    });
    
    test('responds to getTasksByUser', async () => {
        const req = mockUserRequest(mockTask.userId);
        const res = mockResponse();
        await getTasksByUser(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining(mockRequestArrayObject));
    });     

    test('responds to deleteTask/:taskId', async () => {
        const req = mockTaskRequest(mockTask.id);
        const res = mockResponse();
        await deleteTask(req, res);
        expect(res.status).toHaveBeenCalledWith(204);
    });   
});