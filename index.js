// import express

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', function (req, res) {
  console.log("EXPRESS RESPONSES: ", res);
  console.log("DIRNAME: ", __dirname);
  res.sendFile(__dirname + '/index.html');
})

app.get('/message', function (req, res) {
  console.log("MESSAGE ROUTE");
  res.send({ message: 'responsible!' });
})

app.get('/Keegan', function (req, res) {
  console.log("MESSAGE ROUTE");
  res.send({ message: 'Keegan!' });
})

app.get('/Leila', function (req, res) {
  console.log("MESSAGE ROUTE");
  res.send({ message: 'Leila!' });
})

app.get('/Lynn', function (req, res) {
  console.log("MESSAGE ROUTE");
  res.send({ message: 'Lynn!' });
})

app.get('/Thomas', function (req, res) {
  console.log("MESSAGE ROUTE");
  res.send({ message: 'Thomas!' });
})

app.listen("3000", () => {
  console.log("App listening on port 3402");
})