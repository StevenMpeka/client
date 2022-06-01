import React, { useState } from 'react'
import { useParams } from 'react-router'
import {livingRoom} from './Data'


const PaintPhoto = () => {
    const [data,setData] = useState(livingRoom)
   const {id} = useParams()
//    const photos = data.filter(prod => prod.id === id)
    console.log(data.photo)
    return (
        <div className="card home-card">
            {data.filter(photos => photos.id === id).map(photos => {
                return(
                    <div>
                 <img src={photos.photo} alt="img"/>
                    </div>
                )
            })
           
        }
        </div>
    
    )
}

export default PaintPhoto
