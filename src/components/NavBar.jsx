import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-purple-200 backdrop-blur-sm border-b border-n-6 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8">
          <img src="./src/assets/images/logo.png" alt="" width={190} height={50}/>
        </a>
        <nav className=" top-[5rem] right-0 w-full flex justify-end bottom-0 bg-purple-200 lg:static lg:flex lg:mx-auto lg:">
          <div className="flex items-center justify end">
          <ul className="right-0 relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                  {[
                    { id: 1, path: "/", name: "HOME" },
                    { id: 2, path: "/places", name: "PHOTOS" },
                    { id: 3, path: "/videos", name: "VIDEOS" }
                    
                  ].map(({ id, path, name }) => (
                    <li className="px-[40px]" key={id}>
                      <Link to={path} className="flex justify-end text-black font-bold hover:text-purple-500">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar