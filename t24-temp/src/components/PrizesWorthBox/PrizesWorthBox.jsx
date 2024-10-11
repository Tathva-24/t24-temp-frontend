import React from 'react'   
import "./main.css"
const Main = () => {
  return (
    <div className="PrizesWorthBoxflex flex-col justify-center py-8 px-8">
        <div className="head text-8xl text-white flex justify-center border-b-2 py-8">Prizes Worth</div>
        <div className="bod py-8 pb-0 text-white text-2xl flex justify-between">
            <div className="date">
                <span className="">Date: </span>
                <span className="date_day">28/29 Oct</span>
            </div>
            <div className="rt whitespace-normal w-[44%] flex justify-between">
                <div className="venue font-Presstart w-[30%]">Venue:</div>
                <span className="place font-Presstart text-right inline-block w-[60%]">Football ground  </span>
            </div>
        </div>
        <div className="flex space-x-4  justify-center">
            <div className="w-8 h-8 border-2 border-white"></div>
            <div className="w-8 h-8 border-2 border-white"></div>
            <div className="w-8 h-8 border-2 border-white"></div>
        </div>
    </div>
  )
}

export default PrizesWorthBox