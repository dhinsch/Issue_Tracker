// @desc Display All Issues
// @route GET /issues
// @access Public

exports.getIssues = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Display Issues" });
};

// @desc Display Issue
// @route GET /issues/:issue_id
// @access Public

exports.getIssue = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Display Single Issue" });
};

// @desc Update Issue
// @route PUT /issues/:issue_id
// @access Public

exports.updateIssue = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update Issue ${req.params.id}` });
};

// @desc Create Issue
// @route POST /issues/issues
// @access Public

exports.createIssue = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create New Issue` });
};

// @desc Delete Issue
// @route DELETE /issues/:issue_id
// @access Public

exports.deleteIssue = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete Issue ${req.params.id}` });
};
