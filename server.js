import express from "express"
import cors from "cors"
import db from "./db.js"
// import db ("./db.js");

const app = express();

app.use(cors());
app.use(express.json())

// app.post("/todo",(req,res)=>
// {
//    console.log(req.body.text)
//    // db.addTodo(req.body)
//    console.log(getTodo())
//    res.send("added")
// })

app.post("/todo", (req, res) => {
   const body = req.body;
   const todo = body.todo;
   console.log(body)
   db.addTodo(body);
   
   
   res.send("");
 });

app.get("/todo",(req,res)=>
{
   res.json(db.getTodo())
   
})

app.delete("/todo", (req, res) => {
   const index = parseInt(req.body.index);
   console.log(index)
   db.deleteTodo(index);
   res.send("");
 })

app.put("/todo",(req,res)=>{
   console.log(req.body)
   db.updateTodo(req.body.index,req.body.new);
   console.log(db.getTodo())
   res.json(db.getTodo());
})

app.listen(5000,()=>
{
   console.log("Server Connected");
})