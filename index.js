const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});


// Define the database URL to connect to.
const mongoDB = "mongodb+srv://testuser:pWtO6ZPNfgNE8vyw@cluster0.xrgraod.mongodb.net/helloworld?retryWrites=true&w=majority";

// Wait for database to connect, logging an error if there is a problem

mongoose.connect(mongoDB, {
  useNewUrlParser:true
  , useUnifiedTopology:true})
  .then(() => console.log("Connected"))
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    reEnterPassword: String,
    dob: Number,
    phone: Number,
    address: String,
    pincode: Number
});

const User = new mongoose.model("User", userSchema);

const user = new User(
  {firstName:'fname', lastName:'lName', email:'email'
   , password:'pwd', reEnterPassword:'pwd', dob:111222
   , phone:120312, address:'adr', pincode:1234}
);

//user.validate();

user.save().then(savedDoc => {
  savedDoc === user; // true
});