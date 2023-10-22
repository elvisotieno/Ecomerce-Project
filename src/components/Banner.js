import React from 'react'
import { deliveryPlanning, fleetManagement, fuelManagement, howitWorks, workflowIntergration } from '../assets'
import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai";

const Banner = () => {
    const data = [
        howitWorks,fuelManagement,fleetManagement,deliveryPlanning,workflowIntergration
    ];
  return (
    <div className="w-full h-auto overflow-x-hidden">
        <div className="w-screen h-[650px] relative">
            <div className="w-[400vw] h-full flex">
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
            <div><AiOutlineLeft /></div>
            <div><AiOutlineRight /></div>
        </div>
    </div>
  )
}

export default Banner