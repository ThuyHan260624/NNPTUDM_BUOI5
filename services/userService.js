const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');

// CREATE - Tạo user mới
exports.createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw error;
  }
};

// READ - Lấy tất cả users (không tính bị xóa)
exports.getAllUsers = async () => {
  try {
    return await User.findAll({
      where: { isDeleted: false },
      include: [{ model: Role, as: 'role' }]
    });
  } catch (error) {
    throw error;
  }
};

// READ - Lấy user theo ID
exports.getUserById = async (id) => {
  try {
    return await User.findOne({
      where: { id, isDeleted: false },
      include: [{ model: Role, as: 'role' }]
    });
  } catch (error) {
    throw error;
  }
};

// UPDATE - Cập nhật user
exports.updateUser = async (id, updateData) => {
  try {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update(updateData);
  } catch (error) {
    throw error;
  }
};

// DELETE (Soft Delete) - Xóa mềm user
exports.deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update({ isDeleted: true });
  } catch (error) {
    throw error;
  }
};

// Enable user (chuyển status thành true) - Yêu cầu email và username đúng
exports.enableUser = async (email, username) => {
  try {
    const user = await User.findOne({
      where: { email, username, isDeleted: false }
    });

    if (!user) {
      throw new Error('User không tồn tại hoặc email/username không đúng');
    }

    return await user.update({ status: true });
  } catch (error) {
    throw error;
  }
};

// Disable user (chuyển status thành false) - Yêu cầu email và username đúng
exports.disableUser = async (email, username) => {
  try {
    const user = await User.findOne({
      where: { email, username, isDeleted: false }
    });

    if (!user) {
      throw new Error('User không tồn tại hoặc email/username không đúng');
    }

    return await user.update({ status: false });
  } catch (error) {
    throw error;
  }
};
