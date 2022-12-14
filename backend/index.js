const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken");
const app = express();

app.use(bodyParser.json());

const MemeSchema = mongoose.Schema({
    description: { type: String, require: true },
})
const Meme = mongoose.model("Memes", MemeSchema);

app.post("/memes", async function (req, res) {
    const description = req.body.title;

    const errors = [];
    
    if(description.length === 0 || description.length > 2500) {
        errors.push("Title is too short");
    }
    

    if(errors.length > 0) {
        res.send(errors);
        return;
    }

    const newMeme = new Meme({
        description: description,
    });

    await newMeme.save();
    

    res.send("Meme was created");
})

app.get("/meme/all", async function (req, res) {

    const memes = await Meme.find();
    res.send(memes);
})

app.get("/meme/:id", async function (req, res) {
    const id = req.params.id;

    const memeWithId = await Meme.findById(id);

    res.send(memeWithId);
});

app.patch("/meme/update/:id", async function (req, res) {
    const id = req.params.id;
    const description = req.body.description;

    await Meme.findOneAndUpdate(
        { id: id },
        { $set: { description: description } }
    );

    res.send("Meme was updated");
});

app.delete("/meme/delete/:id", async function (req, res) {
    const id = req.params.id;

    await Meme.deleteOne({id: id});

    res.send("The meme was deleted!");
})

const UserSchema = mongoose.Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
})
const User = mongoose.model("Users", UserSchema);

app.post("/register", async function (req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const errors = [];
    
    if(username.length < 8 || username.length > 32) {
        errors.push("Username must be between 8 and 32 characters");
    }
    
    if(password.length < 8 || password.length > 32) {
        errors.push("Password must be between 8 and 32 characters");
    }

    if(errors.length > 0) {
        res.send(errors);
        return;
    }

    const newUser = new User({
        email: email,
        username: username,
        password: password,
    });

    await newUser.save();
    

    res.send("User was created");
})


mongoose.connect("mongodb://127.0.0.1:27017/demo", () => {
    console.log("Mongo connection started");

    app.listen(3000, () => {
        console.log("Running on port: " + 3000);
    });
});