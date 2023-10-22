import React from 'react'
import { cart, logoDark, shoppingBag } from '../assets'

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
            <div>
                <img className="w-28" src={logoDark} alt='TrackingHub'/>
            </div>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
                    <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Products</li>
                    <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
                    <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
                    <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
                </ul>
                <div className="relative">
                    <img className='w-6' src={shoppingBag} alt='Shop'/>
                    <span className="absolute w-6 top-1 left-0 text-sm flex items-center justify-center 
                    font-semibold">0</span>
                </div>
                <div className="w-8 h-8 rounded-full">
                    <img src={cart} alt="cart"/>
                </div>
            </div>
        </div>
       </div>
  )
}

export default Header