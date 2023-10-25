import React, { useState } from 'react'
import { deliveryPlanning, fleetManagement, fuelManagement, howitWorks, workflowIntergration } from '../assets'
import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai";

const Banner = () => {
    const [currentSlide,setCurrentSlide]=useState(0)
    const data = [
        howitWorks,fuelManagement,fleetManagement,deliveryPlanning,workflowIntergration
    ];

    const prevSlide =()=>{
        setCurrentSlide(currentSlide === 0? 4:(prev)=>prev-1)
    }

    const nextSlide =()=>{
        setCurrentSlide(currentSlide === 4? 0:(prev)=>prev+1)
    }

  return (
    <div className="w-full h-auto overflow-x-hidden">
        <div className="w-screen h-[650px] relative">
            <div style={{transform:`translateX(-${currentSlide*100}vw)`}} 
            className="w-[400vw] h-full flex transition-transform duration-1000">
                <img className="w-full h-screen object-cover" 
                src={data[0]} 
                alt="ImageOne"
                loading="priority"/>
                <img className="w-full h-screen object-cover" 
                src={data[1]} 
                alt="ImageOne"
                />
                
                <img className="w-full h-screen object-cover" 
                src={data[2]} 
                alt="ImageOne"
                />

                <img className="w-full h-screen object-cover" 
                src={data[3]} 
                alt="ImageOne"
                />

                <img className="w-full h-screen object-cover" 
                src={data[4]} 
                alt="ImageOne"
                />
            </div>
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
            <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center
            justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
             active:bg-gray-900 duration-300">
                <AiOutlineLeft />
            </div>
            <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center
            justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
             active:bg-gray-900 duration-300">
                <AiOutlineRight />
            </div>
        </div>
    </div>
  )
}

export default Banner