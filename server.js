const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

//Route Files
const issues = require("./routes/issues");
const users = require("./routes/users");

const app = express();

//Mount Routers
app.use("/api/issues", issues);
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
