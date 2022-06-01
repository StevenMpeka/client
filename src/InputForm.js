import React, { useState, useEffect } from 'react'
import axios from 'axios';

const InputForm =() => {
    const [item,setItem] = useState({
        title:'',
        description:'',
      })
      
      const handleChange = (event) => {
        const {name,value} = event.target;
        setItem(prevInput =>{
          return{
            ...prevInput,
            [name]: value,
          }
          console.log(item)
        })
      }
    
      
     
      const handleSubmit =(e)=>{
         e.preventDefault()
         const newItem = {
           title: item.title,
           description: item.description
         }
         axios.post("/newItem",newItem)
         console.log(newItem)
         alert('item added')
    
         setItem({
           title: "",
           description: "",
         })
      }
    
    return(
     <div>
          <input
      type="text"
      name="title"
      value={item.title}
      placeholder="enter title"
      onChange={handleChange}
      />
      <input
      type="text"
      name="description"
      value={item.description}
      placeholder="enter description"
      onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>

     </div>
    )
}

export default InputForm