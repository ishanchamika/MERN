const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://ishanchamika:1001@cluster5.4r8irpb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster5';

const connect = async () =>
{
    try{
        console.log('Connected to the Mngo');
    }
    catch(err){
        console.log(err);
    }
};
connect();

const server = app.listen(3001, 'localhost' , () => 
{ 
    console.log(`Express is running on port ${server.address().port}`);
});

app.use('/api', router);