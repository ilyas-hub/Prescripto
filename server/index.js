// Importing necessary modules and packages
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./config/database");
// Loading environment variables from .env file
dotenv.config();
// Setting up port number
const PORT = process.env.PORT || 4000;

// Connecting to database
database.connect();

app.listen(PORT, () => {
  console.log(`Server is up and running at PORT ${PORT}`);
});



