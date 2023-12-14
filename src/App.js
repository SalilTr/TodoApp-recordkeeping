import React,{useState} from "react";
// import User from "./User";
import Header from "./Header";

import './App.css';
function App() {  
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[data,setData]=useState([])
//  let login="jj";
  return (
    <>
    {/* <h1>hello</h1> */}
    {/* THIS IS HOW WE WRITE ELSE IF ELSE IN TERNARY OPERATOR */}
    
  {/* { login===false?<h1>Login</h1>:login===true?<h1>Login nn</h1>:<h1>Login nn</h1>} */}
   {/* <User title="ram" age={5}/> */}
   {/* ############################  REcord keeping app ############################ */}
   <Header/>
 <div className="container con">
  <div className="first">
 <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="" id="" placeholder=" name" />
 <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" name="" id="" placeholder=" e-mail" />
 <button onClick={()=>{
  setData([...data,{name:name,email:email}])
    setName("")
    setEmail("")
    
}
  }  className="add">Add</button>
 </div>
{/* ###################3  Data show */}



{
  data.map((element,index)=>{
  return( <div key={index} className="data1">
  <h4>name :{element.name}</h4>
  <h4>email :{element.email}</h4>
  <button onClick={(index)=>{
   let arr=data;
   arr.splice(index,1)
   setData([...arr])
  }} className="remove">Remove</button> </div>)
  })
}

 </div>



    </>
  );
}

export default App;
