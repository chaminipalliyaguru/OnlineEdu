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

const uri = 'mongodb://localhost:27017/Testing '; // Example local URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

app.get('/getUsers',(req,res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3001,()=>{
  console.log("Server is running on localhost://3001")
})



