// @desc Display Users
// @route GET /users
// @access Public

exports.getUsers = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Display Users" });
};

// @desc Create Users
// @route POST /users/users
// @access Public

exports.createUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create New User` });
};

// @desc Display User
// @route GET /api/users/:user_id
// @access Public

exports.getUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Display Single User" });
};

// @desc Update User
// @route PUT /api/users/:user_id
// @access Public

exports.updateUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update User ${req.params.id}` });
};

// @desc Delete Users
// @route POST /api/users/:user_id
// @access Public

exports.deleteUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete User ${req.params.id}` });
};
