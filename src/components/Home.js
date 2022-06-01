import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeCard from './HomeCard'

const Home = () => {
  //   const [fillColors, setFillColors] = useState(Array(22).fill('gray'))
  // const [currentColor, setCurrentColor] = useState('blue')

  // const onFillColor = (i) => {
  //   let newFillColors = fillColors.slice(0)
  //   newFillColors[i] = currentColor
  //   setFillColors(newFillColors)
  // }
    return (
        <div>
          <HomeCard/>
        </div>
    )
}

export default Home
