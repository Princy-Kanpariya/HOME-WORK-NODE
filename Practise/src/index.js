const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require('http');
const { connectDB } = require('./db/dbconnection');
const routes = require("./routes/v1");
require("./helpers/crons");
const config = require("./config/config");

// server with express
const app = express();

// allow form-data from body
app.use(bodyParser.urlencoded({ extended: false }));

// allow json data from body
app.use(bodyParser.json());

// cors enable
app.use(cors());
app.options("*", cors());

// route folder
app.use("/v1", routes);

// use to throw error when route is not created
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

// database connection
connectDB()

// server using http
const server = http.createServer(app);

server.listen(config.port, () =>{
  console.log("server listining port number 3000");
});

