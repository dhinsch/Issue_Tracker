const mongoose = require('mongoose');

const IssueSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title that summarizes your issue.'],
    unique: true,
    trim: true
  },
  status: {
    type: String,
    required: [
      true,
      'Please add an "Unresolved","In Progress", or "Resolved" status.'
    ]
  },
  description: {
    type: String,
    required: [true, 'Please describe the issue'],
    maxlength: [1000, 'Description can not be more than 1000 characters']
  },
  priority: {
    type: Number,
    max: [4, 'Priority Level must be at least 4'],
    min: [1, 'Priority Level can not be higher than 1.']
  },
  assignedTo: {
    type: String,
    required: [true, 'Please enter the teammate assigned to this issue.']
  },
  timeSpent: {
    type: Number
  },
  timeCreated: {
    type: Date,
    default: Date.now
  },
  browsers: {
    type: [String],
    required: true,
    enum: [
      'All',
      'Chrome',
      'IE',
      'Opera',
      'Opera Mini',
      'Edge',
      'Safari',
      'iOS Safari',
      'Android Browser',
      'Opera Mobile',
      'Firefox for Android',
      'Firefox',
      'UC Browser for Android',
      'Samsung Internet',
      'QQ Browser',
      'Baidu Browser',
      'KaiOS Browser',
      'Other'
    ]
  },
  notesLog: {
    type: String,
    required: [true, 'Please enter any relevant progress or notes']
  }
});

module.exports = mongoose.model('Issue', IssueSchema);
