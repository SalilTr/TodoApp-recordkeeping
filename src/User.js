import React,{useState} from 'react'

function User(props) {
    let {title,age}=props
    const [Age,setAge]=useState(age)
    // THIS IS HOW WE DESTRUCTURE PROPS
    
    
  return (
    <div>
      <h1>I m user 1{ title}{Age}</h1>
      <button  onClick={()=>{setAge(Age+1)}}>Age inc</button>
      <button  onClick={()=>{setAge(Age+1)}}>dec</button>
    </div>
  )
}

export default User
