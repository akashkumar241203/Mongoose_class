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

//Schema
const bookSchema = new mongoose.Schema({
    name: 
    { type: String,
      required: true 
 },

    author: { 
        type: String,
    },
    price: { type: Number, 
        required: true 
    },
});

//Model
const Book = mongoose.model("Book", bookSchema);

//Finding all books
Book.find({price: {$gte: 200}})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

//Inserting many books
// Book.insertMany([{
//     name: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 250,
// },
// {
//     name: "The Secret",
//     author: "Rhonda Byrne",
//     price: 300,
// },
// {
//     name: "The Power of Now",
//     author: "Eckhart Tolle",
//     price: 350,
// },
// ])
// .then((res) => {
//     console.log("Books created");
// });
//Inserting one book
// const book1 = new Book({
//     name: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 250,
// });
// book1.save()
// .then((res) => {
//     console.log("Book created");
// })
// .catch((err) => {
//     console.log(err);
// });

//Updating a book
// Book.updateOne({name: "The Alchemist"}, {price: 200})
// .then((res) => {
//     console.log("Book updated");
// })
// .catch((err) => {
//     console.log(err);
// });

//Deleting a book
// Book.deleteOne({name: "The Alchemist"})
// .then((res) => {
//     console.log("Book deleted");
// })
// .catch((err) => {
//     console.log(err);
// });

//Deleting many books
// Book.deleteMany({price: {$gte: 300}})
// .then((res) => {
//     console.log("Books deleted");
// })
// .catch((err) => {
//     console.log(err);
// });

//Find all books
// Book.find()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

//Find one book
// Book.findOne({name: "The Secret"})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

//Find by id
// Book.findById("60b5d0f3b1a0e22a0c2b4b9b")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

//Find by id and update
// Book.findByIdAndUpdate("60b5d0f3b1a0e22a0c2b4b9b", {price: 150})
// .then((res) => {
//     console.log("Book updated");
// })
// .catch((err) => {
//     console.log(err);
// });
