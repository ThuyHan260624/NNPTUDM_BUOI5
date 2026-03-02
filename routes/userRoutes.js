const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// CREATE - POST /api/users
router.post('/', userController.createUser);

// READ - GET all /api/users
router.get('/', userController.getAllUsers);

// READ - GET by ID /api/users/:id
router.get('/:id', userController.getUserById);

// UPDATE - PUT /api/users/:id
router.put('/:id', userController.updateUser);

// DELETE (Soft) - DELETE /api/users/:id
router.delete('/:id', userController.deleteUser);

// POST - Enable user /api/users/enable
router.post('/enable', userController.enableUser);

// POST - Disable user /api/users/disable
router.post('/disable', userController.disableUser);

module.exports = router;
