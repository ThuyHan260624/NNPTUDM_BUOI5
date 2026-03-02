const Role = require('../models/Role');

// CREATE - Tạo role mới
exports.createRole = async (roleData) => {
  try {
    const role = await Role.create(roleData);
    return role;
  } catch (error) {
    throw error;
  }
};

// READ - Lấy tất cả roles (không tính bị xóa)
exports.getAllRoles = async () => {
  try {
    return await Role.findAll({
      where: { isDeleted: false }
    });
  } catch (error) {
    throw error;
  }
};

// READ - Lấy role theo ID
exports.getRoleById = async (id) => {
  try {
    return await Role.findOne({
      where: { id, isDeleted: false }
    });
  } catch (error) {
    throw error;
  }
};

// UPDATE - Cập nhật role
exports.updateRole = async (id, updateData) => {
  try {
    const role = await Role.findByPk(id);
    if (!role) return null;
    return await role.update(updateData);
  } catch (error) {
    throw error;
  }
};

// DELETE (Soft Delete) - Xóa mềm role
exports.deleteRole = async (id) => {
  try {
    const role = await Role.findByPk(id);
    if (!role) return null;
    return await role.update({ isDeleted: true });
  } catch (error) {
    throw error;
  }
};
