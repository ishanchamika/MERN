const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://project_tea:1001@cluster2024.nkb8m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2024';

const connect = async () => {
    try 
    {
      await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
    } 
    catch (err) 
    {
      console.error('Failed to connect to MongoDB:', err);
    }
  };
  connect();
  
app.use('/api', router);

const server = app.listen(port, 'localhost' , () => 
{ 
    console.log(`Express is running on port ${server.address().port}`);
});
