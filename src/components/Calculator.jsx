import React from 'react'

const Calculator = () => {
  return (
    <div className='border-solid border-4 border-blue-500 bg-white h-[450px] w-[360px] flex flex-col items-center '>
        <div className="screen w-[100%] flex pt-4 justify-center mb-2">
            <input className='h-14 border-4 border-gray-500 w-[90%] flex justify-end items-end' type="text" />
        </div>
        <div className="clearButton w-[84%] h-8 flex justify-between">
            <button className="text-black text-lg bg-gray-400 text-center  h-8 w-16 rounded-full">AC</button>
        </div>
        <div className="topRow w-[84%] h-20 flex pt-4 justify-between" >
            <button className='bg-gray-700 text-white w-14 h-14 text-3xl rounded-full'>7</button>
            <button className='bg-gray-700 text-white w-14 h-14 text-3xl rounded-full'>8</button>
            <button className='bg-gray-700 text-white w-14 h-14 text-3xl rounded-full'>9</button>
            <button className='bg-orange-500 h-14 border-2 border-orange-800 w-14 text-3xl text-white rounded-full'>+</button>
        </div>
        <div className="topNextRow w-[84%] h-20 flex pt-4 justify-between" >
            <button className='bg-gray-700 text-white w-14 h-14 text-3xl rounded-full'>4</button>
            <button className='bg-gray-700 text-white w-14 h-14 text-3xl rounded-full'>5</button>
            <button className='bg-gray-700 text-white w-14 h-14 text-3xl rounded-full'>6</button>
            <button className='bg-orange-500 h-14 border-2 border-orange-800 w-14 text-3xl text-white rounded-full'>-</button>
        </div>
        <div className="BottomNextRow w-[84%] h-20 flex pt-4 justify-between" >
            <button className='bg-gray-700 text-white w-14 h-14 text-3xl rounded-full'>1</button>
            <button className='bg-gray-700 text-white w-14 h-14 text-3xl rounded-full'>2</button>
            <button className='bg-gray-700 text-white w-14 h-14 text-3xl rounded-full'>3</button>
            <button className='bg-orange-500 h-14 border-2 border-orange-800 w-14 text-3xl text-white rounded-full'>x</button>
        </div>
        <div className="topRow w-[84%] h-20 flex pt-4 justify-between" >
            <button className='bg-gray-700 text-white w-14 h-14 text-3xl rounded-full'>0</button>
            <button className='bg-gray-700 text-white w-14 h-14 text-3xl rounded-full'>.</button>
            <button className='bg-blue-500 border-blue-900 border-2 text-white w-14 h-14 text-3xl rounded-full'>=</button>
            <button className='bg-orange-500 h-14 border-2 border-orange-800 w-14 text-3xl text-white rounded-full'>/</button>
        </div>
    </div>
  )
}

export default Calculator