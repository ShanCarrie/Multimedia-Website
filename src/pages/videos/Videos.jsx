import React from 'react'
import { VideosCarousel } from './VideosCarousel'

function Videos () {
  return (
    <div className="bgContainer">
        <h1 className="pt-[130px] flex items-center justify-center text-4xl font-semibold text-purple-500">
            VIDEO OF THE YEAR
        </h1>
        <div className="flex flex-row justify-start h-[500px] pt-2 pb-10">
            <video src='src/assets/images/videos/v1.mp4' autoPlay loop width={400} />
            <h3 className=" text-2xl font semibold pr-10">Among the many highlights of my birthday, one moment stands out with vivid clarity - this performance.<br></br><br></br> My friends surprised me with a saxophone serenade. I was very grateful and had an amazing time.<br></br><br></br>With each passing year, I am afforded the chance to deepen my understanding of myself, to cultivate meaningful relationships, and to pursue my passions with renewed vigor. So here's to another year older, a testament to resilience, wisdom gained, and the infinite possibilities that lie ahead.</h3>
        </div>
        <div className="flex flex-row justify-between h-[600px] pt-2 pb-10">
            <video src='src/assets/images/videos/v2.mp4' autoPlay loop muted width={400}/>
            <video src='src/assets/images/videos/v4.mp4' autoPlay loop muted width={400}/>
            <video src='src/assets/images/videos/v3.mp4' autoPlay loop muted width={400}/>
        </div>
        <div className="flex flex-row justify-between h-[600px] pt-2 pb-10">
            <video src='src/assets/images/videos/v5.mp4' autoPlay loop muted width={400}/>
            <video src='src/assets/images/videos/v6.mp4' autoPlay loop muted width={400}/>
            <video src='src/assets/images/videos/v7.mp4' autoPlay loop muted width={400}/>
        </div>
    </div>
  )
}

export default Videos