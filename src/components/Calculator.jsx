import React from 'react'

const Calculator = () => {
  return (
    <div className='border-solid border-4 border-blue-500 bg-white h-[450px] w-[360px] flex flex-col items-center'>
        <div className="screen w-[100%] flex pt-4 justify-center">
            <input className='h-14 border-4 border-gray-500 w-[90%] flex justify-end items-end' type="text" />
        </div>
        <div className="topRow w-[84%] flex pt-12 justify-between" >
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className='bg-orange-500 h-14 border-2 border-orange-800 w-14 text-3xl text-white rounded-full'>+</button>
        </div>
    </div>
  )
}

export default Calculator