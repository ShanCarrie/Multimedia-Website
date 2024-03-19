import React from 'react'
import Hero from './Hero'
import Content from './Content'

const Home = () => {
  return (
    <div>
      <Hero />
      <Content />
      <div>
        <h3 className="text-xl flex justify-center py-4">I told myself that I would make the most of 2023 and I'm pretty sure I did.<br></br>As you go through my memories, I hope that you will get some inspiration or ideas for future use.</h3>
      </div>
    </div>
  )
}

export default Home