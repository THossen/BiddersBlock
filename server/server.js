/*
import React from "react";

const server = () => {
  return <div>server</div>;
};

export default server;
*/

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con  = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "biddersblock",
    port: 3001
})

con.connect((error) => {
  if (error) {
    console.error('Error connecting to database:', error);
  } else {
    console.log('Connected to database!');
  }
});

app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const address = req.body.address;

    con.query("INSERT INTO users (email, username, password, firstname, lastname, address) VALUES (?, ?, ?, ?, ?, ?)", [email, username, password, firstname, lastname, address], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})

app.listen(3001, () => {
    console.log("running backend server");
})