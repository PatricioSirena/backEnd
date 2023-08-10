// const express = require("express");
// const app = express();

// app.get("/",(req,res)=>{
//     res.send("Bienvenido/a a nuestro servidor 27-07-2023!")
// })
// app.get("/search",(req,res)=>{
//     res.send(`Bienvenido/a a nuestro servidor!${req.query.q}`)
// })
// app.post("/",(req,res)=>{
//     res.status(201).send(`Bienvenido/a a nuestro servidor post! ${req.query.name}`)
// })
// app.put("/:pepito",(req,res)=>{
//     res.send(`Bienvenido/a a nuestro servidor put! ${req.params.pepito}`)
// })
// app.delete("/:id",(req,res)=>{
//     res.send("Bienvenido/a a nuestro servidor delete!")
// })

// app.listen(8081,()=>{
//     console.log("Se está escuchando en el puerto 8081");
// })
require("dotenv").config();
const Server = require('./models/server');
const server = new Server();
server.listen();