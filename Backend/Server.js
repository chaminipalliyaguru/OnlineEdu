const express = require ('express')
const mongoose = require ('mongoose')
const cors = require('cors')
const UserModel = require('./Users');

require ('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.MONGO_URI,{userNewUrlParser: true, useUnifiedTopology: true})
// .then(() => console.log('MongoDB connected'))
// .catch( err => console.error (err));

const uri = 'mongodb://localhost:27017/Testing'; // Example local URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

app.get('/getUsers',(req,res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.post('/addUsers',async(req, res)=>{
  try{
    const newData = new UserModel(req.body);
    const saveData = await newData.save();
    res.json(saveData)
  } catch(err){
    res.status(500).send(err);
  }
})


app.listen(3001,()=>{
  console.log("Server is running on http://localhost:3001");
})

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const UserModel = require('./Users'); // This is your schema

// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// const uri = 'mongodb://localhost:27017/Testing';
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Database connected successfully'))
//   .catch(err => console.error('Database connection error:', err));

// // Route to fetch users (GET request)
// app.get('/getUsers', (req, res) => {
//   UserModel.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(500).json({ error: 'Error fetching users', details: err.message }));
// });

// // Route to add a new user (POST request)
// app.post('/addUser', async (req, res) => {
//   try {
//     const newData = new UserModel(req.body); // Create new document based on schema
//     const saveData = await newData.save(); // Save document to the database
//     res.status(201).json(saveData); // Return saved data
//   } catch (err) {
//     console.error('Error saving user:', err);
//     res.status(500).json({ error: 'Failed to save user', details: err.message });
//   }
// });

// // Start the server
// app.listen(3001, () => {
//   console.log("Server is running on http://localhost:3001");
// });


