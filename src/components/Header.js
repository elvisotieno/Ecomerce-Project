import React from 'react'
import { logoDark, logoKenya } from '../assets'

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
            <div>
                <img className="w-28" src={logoDark} alt='TrackingHub'/>
            </div>
            <div>
                <ul className='flex items-center gap-8'>
                    <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
                    <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Products</li>
                    <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
                    <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
                    <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
                </ul>
            </div>
        </div>
       </div>
  )
}

export default Header