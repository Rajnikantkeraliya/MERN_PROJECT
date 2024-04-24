const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT;
const getdbconnection = require('./Database')
const cors = require('cors');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow only specified HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specified headers
}));


getdbconnection()

app.use(express.json())

app.use("/signup", require('./Router/Createuser'))

app.use("/signup", require('./Router/LoginUser'))

app.use("/signup", require('./Router/Displaydata'))

app.listen(port, () => {
    console.log(`server  listening on port ${port}`)
})