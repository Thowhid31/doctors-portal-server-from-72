const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://doctor_admin:<password>@cluster0.nf7el.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get('/', (req, res) => {
  res.send('Hello World from Doc Uncle!')
})

app.listen(port, () => {
  console.log(`Doctors App Listening on Port ${port}`)
})