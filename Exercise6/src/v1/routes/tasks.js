var express = require('express');
var router = express.Router();
const taskController = require('../../controllers/taskController');

/**
 * @openapi
 * /api/v1/tasks:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: Get all tasks
 *     parameters:
 *       - in: query
 *         name: state
 *         schema:
 *           type: string
 *         description: The state of task
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'   
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Server error message"
 */
router.get('/', taskController.getAllTasks);
/**
 * @openapi
 * /api/v1/tasks/{taskId}:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: Get task by id
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         description: ID of a task
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task' 
 *       400:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Параметр ':taskId' не может быть пустым"
 *       404:
 *         description: Task not found 
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Server error message"
 */
router.get('/:taskId', taskController.getTask);
/**
 * @openapi
 * /api/v1/tasks:
 *   post:
 *     tags:
 *       - Tasks
 *     summary: Create new task
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *        application/xml:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *      required: true       
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task' 
 *       400:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Не передан в тело запроса один из обязательных параметров при создании задачи: 'name', 'description', 'type', 'userId', 'state'" 
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Server error message"
 */
router.post('/', taskController.createTask);
/**
 * @openapi
 * /api/v1/tasks/{taskId}:
 *   patch:
 *     tags:
 *       - Tasks
 *     summary: Update exisiting task by ID
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         description: ID of a task
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *        application/xml:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *      required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task' 
 *       400:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Параметр ':taskId' не может быть пустым"
 *       404:
 *         description: Task not found 
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Server error message"
 */
router.patch('/:taskId', taskController.updateTask);
/**
 * @openapi
 * /api/v1/tasks/{taskId}:
 *   delete:
 *     tags:
 *       - Tasks
 *     summary: Delete exisiting task by ID
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         description: ID of a task
 *         required: true
 *     responses:
 *       204:
 *         description: OK
 *       400:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Параметр ':taskId' не может быть пустым"
 *       404:
 *         description: Task not found 
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Server error message"
 */
router.delete('/:taskId', taskController.deleteTask);
/**
 * @openapi
 * /api/v1/tasks/{userId}/tasks:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: Get tasks by user id
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         description: ID of a user
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task' 
 *       400:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Параметр ':userId' не может быть пустым"
 *       404:
 *         description: Task not found 
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Server error message"
 */
router.get('/:userId/tasks', taskController.getTasksByUser);

module.exports = router;