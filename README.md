# Issue_Tracker - Work In Progress
 Tracks Issues with the added capability of managing Users 
 
 Issue_Tracker
Backend API for managing issue tickets and users.

Issues
CRUD functionality for issues that are being tracked in the system.
GET GET All Issues 
{{URL}}/api/issues
Displays all issues, includes filtering.


Example Request
GET All Issues
var request = require('request');
var options = {
  'method': 'GET',
  'url': '{{URL}}/api/issues',
  'headers': {
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
GET GET single issue 
{{URL}}/api/issues/:issue_id
Displays single issue by ID
PATH VARIABLES

issue_id



Example Request
GET single issue
var request = require('request');
var options = {
  'method': 'GET',
  'url': '{{URL}}/api/issues/',
  'headers': {
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
POST Create New Issue 
{{URL}}/api/issues
Creates issue for tracking, includes verification of fields.


Example Request
Create New Issue
var request = require('request');
var options = {
  'method': 'POST',
  'url': '{{URL}}/api/issues',
  'headers': {
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
PUT Update Issue 
{{URL}}/api/issues/:issue_id
Update an existing issue by id.
PATH VARIABLES

issue_id



Example Request
Update Issue
var request = require('request');
var options = {
  'method': 'PUT',
  'url': '{{URL}}/api/issues/',
  'headers': {
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
DEL Delete Issue 
{{URL}}/api/issues/:issue_id
Deletes an existing issue by id.
PATH VARIABLES

issue_id



Example Request
Delete Issue
var request = require('request');
var options = {
  'method': 'DELETE',
  'url': '{{URL}}/api/issues/',
  'headers': {
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
Users
CRUD functionality for users who are working with the issue tracker.
GET Get Users 
{{URL}}/api/users
Displays all users in the issue tracker system.


Example Request
Get Users
var request = require('request');
var options = {
  'method': 'GET',
  'url': '{{URL}}/api/users',
  'headers': {
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
POST Create New User 
{{URL}}/api/users
Creates a new user that can manage issues in the tracker.


Example Request
Create New User
var request = require('request');
var options = {
  'method': 'POST',
  'url': '{{URL}}/api/users',
  'headers': {
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
GET Get Single User 
{{URL}}/api/users/:user_id
Displays a single user by their ID.
PATH VARIABLES

user_id



Example Request
Get Single User
var request = require('request');
var options = {
  'method': 'GET',
  'url': '{{URL}}/api/users/',
  'headers': {
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
PUT Update User 
{{URL}}/api/users/:user_id
Updates user information in the tracker.
PATH VARIABLES

user_id



Example Request
Update User
var request = require('request');
var options = {
  'method': 'PUT',
  'url': '{{URL}}/api/users/',
  'headers': {
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
DEL Delete User 
{{URL}}/api/users/:user_id
Deletes user accounts by ID.
PATH VARIABLES

user_id



Example Request
Delete User
var request = require('request');
var options = {
  'method': 'DELETE',
  'url': '{{URL}}/api/users/',
  'headers': {
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
