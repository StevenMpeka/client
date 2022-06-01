import React, { useEffect, useState } from 'react'

const Image = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch(`/allpost`,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
             setData(result.posts)
        })
      },[])
    return (
        <div>
             <img src={data.photo} alt=""/>
        </div>
    )
}

export default Image
