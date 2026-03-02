const express = require('express');
const roleController = require('../controllers/roleController');

const router = express.Router();

// CREATE - POST /api/roles
router.post('/', roleController.createRole);

// READ - GET all /api/roles
router.get('/', roleController.getAllRoles);

// READ - GET by ID /api/roles/:id
router.get('/:id', roleController.getRoleById);

// UPDATE - PUT /api/roles/:id
router.put('/:id', roleController.updateRole);

// DELETE (Soft) - DELETE /api/roles/:id
router.delete('/:id', roleController.deleteRole);

module.exports = router;
