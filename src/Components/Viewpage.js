import React,{useEffect,useState} from 'react'
import axios from "axios"
import './viewpage.css'

function App() {
    const [user,setUser] = useState([])
    async function getData() {
      const response = await axios.get("http://localhost:5000/todo");
      setUser(response.data.data)
      console.log(response)
    }
  
    // async function del(e)
    // {
    //   await console.log(e.index)
    // }

   
    useEffect(()=>
    {
      getData();
    },[]);

    return (
       
          <div className="eles">
        {user.map((nalue,ind)=>{
          // key={index}
          const inde = JSON.stringify({index : ind});
          var upd = {index : ind}
          return(
            
            <div className='ele'>
              
            <div className="todo">{nalue.todo}</div>
            
            <button className="delete" style={{backgroundColor:"rgb(244, 198, 244)"}} onClick={
              async function deleteTodo() {
                  // const url = 
                  await fetch("http://localhost:5000/todo",{method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify({index:ind})})
                  .then(()=>{
                    getData()
                  })
                  // const data = res.json()
                  
              }
              }>delete</button>
              <button className="update" style={{backgroundColor:"#7288bd"}} onClick = {
                async function(){
                  var new1 = prompt("Enter new todo")
                  upd.new = new1
                  upd = JSON.stringify(upd) 
                  console.log(upd)
                  await fetch("http://localhost:5000/todo",{method:"PUT",headers:{"Content-type":"application/json"},body:upd})
                  .then(()=>{getData()})
                }
              }>update</button>
              <span className="name"><strong>-{nalue.name}</strong></span>
            </div>
            )})}
        </div>
        // </div>
      )
      
    }
    
    
    export default App
    