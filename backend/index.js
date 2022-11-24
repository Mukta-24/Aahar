import express from "express"
// const express = require(express)
// const app = express()
import mongoose from "mongoose"
import cors from 'cors'
// var bodyParser = require('body-parser')

const app = express()
app.use(express.json())
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://logintest:asdfghjkl@cluster0.gda1bth.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userScheme = new mongoose.Schema({
    name: String,
    email: String,
    password: String

})

const User = new mongoose.model("User", userScheme)

//Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body
    // console.log("Login succesfully");
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login succesfully", user: user })
            }
            else {
                res.send({ message: "password didn't match",lo:"nkj" })
            }

        } else {
            res.send({message: "user not registered"})
        }
    })
})

app.post("/register", (req, res) => {
    // res.send("My APi register")
    console.log(req.body)
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registered" })
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "successfully registered" })
                }
            })
        }
    })

})


app.listen(9002, () => {
    console.log("started at port 9002")
})