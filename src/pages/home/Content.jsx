import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Content = () => {
  const [text] = useTypewriter({
    words: [' Boat Riding', ' Painting', ' Bunjee Jumping', ' Bowling', ' Ziplining', ' Pet Adoption'],
    loop: 0
  })

  return (
    <div className="pl-[200px] text-4xl pt-10 font-semibold">
        <h1>I've done many things throughout the year: 
      <span className="text-purple-300">{text}</span><Cursor/></h1>
    </div>
  )
}
export default Content