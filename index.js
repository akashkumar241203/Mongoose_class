const mongoose = require('mongoose');

//Connection with mongoose
main()
   .then((res) =>
{
    console.log("connection sucessful");
})
.catch((err) => {
    console.log(err);
});


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//Schema for user
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
});

//Model for user
const User = mongoose.model("User", userSchema);

//Finding all users
User.find({age: {$gte: 30}})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

//Inserting many users
// User.insertMany([{
//     name: "Ram",
//     email: "ram@gmail.com",
//     age: 25,
// },
// {
//     name: "Shyam",
//     email: "shayam@gmail.com",
//     age: 30,
// },
// {
//     name: "Mohan",
//     email: "mohan@gmail.com",
//     age: 35,
// },
// ])
// .then((res) => {
//     console.log("Users created");
// });




//Creating a new user
/*const user1 = new User({
    name: "Adam",
    email: "adam@yahoo.in", 
    age : 48,
});


//Saving the user
user1.save()
.then((res) => {
    console.log("User created");
})
.catch((err) => {
    console.log(err);
});*/

