var express = require('express');
var router = express.Router();
const userController = require('../../controllers/userController');

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'   
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
router.get('/', userController.getAllUsers);
/**
 * @openapi
 * /api/v1/users/{userId}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user by id
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
 *                 $ref: '#/components/schemas/User' 
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
 *         description: User not found 
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
router.get('/:userId', userController.getUser);
/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create new user
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *        application/xml:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *      required: true       
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User' 
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
 *                       example: "Не передан в тело запроса один из обязательных параметров при создании пользователя: 'name', 'role', 'organization', 'skills'" 
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
router.post('/', userController.createUser);
/**
 * @openapi
 * /api/v1/users/{userId}:
 *   patch:
 *     tags:
 *       - Users
 *     summary: Update exisiting user by ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         description: ID of a user
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *        application/xml:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *        application/x-www-form-urlencoded:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *      required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User' 
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
 *         description: User not found 
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
router.patch('/:userId', userController.updateUser);
/**
 * @openapi
 * /api/v1/users/{userId}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete exisiting user by ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         description: ID of a user
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
 *                       example: "Параметр ':userId' не может быть пустым"
 *       404:
 *         description: User not found 
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
router.delete('/:userId', userController.deleteUser);

module.exports = router;
