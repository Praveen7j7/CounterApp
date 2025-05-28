import {React, useState} from 'react';

export default function App(){
  const [count, setCount] = useState(0);

  function handleIncrement(){
    setCount((e)=>e+1);
  }
  function handleDecrement(){
    setCount((e)=>e-1);
  }

  return (
    <div className="flex flex-col items-center justify-center h-[200px] bg-gray-100 m-10 p-3 border-2 border-gray-300 rounded-lg shadow-md p-2">
      <h1 className='bg-blue-300 p-3 m-3 rounded-lg'>Counter: {count}</h1>
      <button className='border-2 rounded p-2 shadow-lg m-1' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='border-2 rounded p-2 shadow-lg m-1' onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
  return (
    <>

    
    </>
  )
}