import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
const images = [
    "src/assets/images/bambino/c1.jpg",
    "src/assets/images/bambino/c1.jpg",
    "src/assets/images/bambino/c1.jpg",
    "src/assets/images/bambino/c1.jpg",
    "src/assets/images/bambino/c1.jpg",
    "src/assets/images/bambino/c1.jpg",
    "src/assets/images/bambino/c1.jpg",
]

const Mix = () => {
  return (
    <>
    <div>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry>
                {
                images.map((image, i) => (
                    <img
                    key={i}
                    src={image}
                    style={{width: "100%", display: "block"}}
                    />
                ))
                }
            </Masonry>
        </ResponsiveMasonry>
    </div>
    </>
  )
}

export default Mix