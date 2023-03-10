import React, {useState} from 'react'



const Calculator = () => {

    //state for the result of eval
    const [output, setOutput]=useState('');

    const decimalFunction = ()=>{
        if(output===''){
            return setOutput('0.')
        }
        if(isNaN(output[output.length-1])){
            return setOutput(output+'0.')
        }
        else{
            setOutput(output+'.')
        }
    }

    const backSpaceFunction =()=>setOutput(output.slice(0,-1))

  return (
    <div className="hi bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 opacity-80 rounded-3xl p-1 h-[460px]">
    <div className='rounded-3xl border-grad pt-2 bg-black h-[450px]  w-[345px] flex flex-col items-center '>
        <div className="screen w-[100%] flex pt-4 justify-around mb-2">
            <input value={output} onChange={(e)=>setOutput(e.target.value)} className='h-14  pl-10 bg-black text-white text-2xl w-[90%] flex justify-end items-end' type="text" />
            {output!==''?<button onClick={backSpaceFunction} className='text-white pr-14 text-3xl'>⌫</button>:
            <button className='text-white pr-14 opacity-25 cursor-default text-3xl'>⌫</button>}
            
        </div>
        <div className="clearButton ml-12 w-[84%] h-8 flex justify-between">
            <button onClick={()=>setOutput('')} className="text-black text-lg  bg-gray-400 text-center   h-8 w-16 rounded-full hover:text-white">AC</button>
        </div>
        <div className="topRow w-[84%] h-18 flex pt-4 justify-center" >
            <button onClick={()=>setOutput(output+'7' )} className='bg-gray-700 text-white hover:text-4xl hover:text-blue-300 mr-2 w-14 h-14 text-3xl rounded-full'>7</button>
            <button onClick={()=>setOutput(output+'8' )} className='bg-gray-700 text-white hover:text-4xl hover:text-blue-300 mr-2 w-14 h-14 text-3xl rounded-full'>8</button>
            <button onClick={()=>setOutput(output+'9' )} className='bg-gray-700 text-white hover:text-4xl hover:text-blue-300 mr-2 w-14 h-14 text-3xl rounded-full'>9</button>
            <button onClick={()=>setOutput(output[output.length-1]==='+'||output[output.length-1]==='-'||output[output.length-1]==='/'||output[output.length-1]==='*'?output.replace(output[output.length-1],'+'):output+'+' )} className='bg-gradient-to-r from-blue-900 via-purple-500 to-blue-300 h-14 border-2 hover:text-4xl  border-purple-700 w-14 text-3xl text-white mr-2 rounded-full'>+</button>
        </div>
        <div className="topNextRow w-[84%] h-18 flex pt-4 justify-center" >
            <button onClick={()=>setOutput(output+'4' )} className='bg-gray-700 text-white hover:text-4xl hover:text-blue-300  mr-2 w-14 h-14 text-3xl rounded-full'>4</button>
            <button onClick={()=>setOutput(output+'5' )} className='bg-gray-700 text-white hover:text-4xl hover:text-blue-300 mr-2 w-14 h-14 text-3xl rounded-full'>5</button>
            <button onClick={()=>setOutput(output+'6' )} className='bg-gray-700 text-white hover:text-4xl hover:text-blue-300 mr-2 w-14 h-14 text-3xl rounded-full'>6</button>
            <button onClick={()=>setOutput(output[output.length-1]==='+'||output[output.length-1]==='-'||output[output.length-1]==='/'||output[output.length-1]==='*'?output.replace(output[output.length-1],'-'):output+'-' )} className='bg-gradient-to-r from-blue-300 via-blue-800 to-purple-500 h-14 border-2 hover:text-4xl  border-purple-700 w-14 text-3xl text-white mr-2 rounded-full'>-</button>
        </div>
        <div className="BottomNextRow w-[84%] h-18 flex pt-4 justify-center" >
            <button onClick={()=>setOutput(output+'1' )} className='bg-gray-700 text-white hover:text-4xl hover:text-blue-300 mr-2 w-14 h-14 text-3xl rounded-full'>1</button>
            <button onClick={()=>setOutput(output+'2' )} className='bg-gray-700 text-white hover:text-4xl hover:text-blue-300 mr-2 w-14 h-14 text-3xl rounded-full'>2</button>
            <button onClick={()=>setOutput(output+'3' )} className='bg-gray-700 text-white hover:text-4xl hover:text-blue-300 mr-2 w-14 h-14 text-3xl rounded-full'>3</button>
            <button onClick={()=>setOutput(output[output.length-1]==='+'||output[output.length-1]==='-'||output[output.length-1]==='/'||output[output.length-1]==='*'?output.replace(output[output.length-1],'*'):output+'*' )} className='bg-gradient-to-r from-purple-500 via-blue-400 to-blue-800 h-14 border-2 border-purple-700 hover:text-4xl  w-14 text-3xl text-white mr-2 rounded-full'>x</button>
        </div>
        <div className="topRow w-[84%] h-18 flex pt-4 justify-center" >
            <button onClick={()=>setOutput(output+'0' )} className='bg-gray-700 text-white hover:text-4xl hover:text-blue-300 mr-2 w-14 h-14 text-3xl rounded-full'>0</button>
            <button onClick={decimalFunction} className='bg-gray-700 text-white hover:text-4xl hover:text-blue-300 mr-2 w-14 h-14 text-3xl rounded-full'>.</button>
            <button onClick={()=>setOutput( output===''?'0':eval(output).toString())} className='bg-gradient-to-r from-blue-900 via-purple-500 to-blue-300 hover:text-4xl  border-purple-700 border-2 text-white mr-2 w-14 h-14 text-3xl rounded-full'>=</button>
            <button onClick={()=>setOutput(output[output.length-1]==='+'||output[output.length-1]==='-'||output[output.length-1]==='/'||output[output.length-1]==='*'?output.replace(output[output.length-1],'/'):output+'/' )} className='bg-gradient-to-r from-blue-300 via-purple-500 to-blue-800 h-14 border-2 border-purple-700 w-14 text-3xl text-white mr-2 hover:text-4xl rounded-full'>/</button>
        </div>
    </div>
    </div>
  )
}

export default Calculator