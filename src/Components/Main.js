import React  from 'react'
 import './main.css'

export default function Main() {
    
     var a;
    var b;
     const myFunction=()=>{
        a=document.querySelector('#myName').value;
        
        b=document.querySelector('#myTodo').value;
         var obj=JSON.stringify({ 
            name :a,
            todo: b

        })
        document.querySelector('#myTodo').value="";
        
        fetch("http://localhost:5000/todo",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:obj
        })
        
        
        


     }


     
  return (
    <>
    <div className='fron'>
      <h2>Create Your TODO</h2>
      <div className="bac">
    <div className="comp">
    <span>Name :</span><input type="text"  id="myName"  style={{width:"250px",height:"35px",borderRadius:"20px",paddingLeft:"12px",fontSize:"25px"}} required/>
    </div>
    <br/>
    
    <div className="comp">
    <span>Todo :</span ><input type="text" id="myTodo" style={{width:"250px",height:"35px",borderRadius:"20px",paddingTop:"9px",fontSize:"25px",paddingLeft:"12px"}} required />
    </div>
    <br/>
    {/* <button type="button" style={{height:"40px"}}><strong>Try it</strong></button> */}
    <button type="button" class="btn btn-dark" onClick={myFunction} style={{width:"100px",}}><strong>Create</strong></button>
    </div>
    </div>
    
    </>
  )
}
