import React, { useState } from 'react';
import './Page.css';

interface CounterState {
  count: number;
}

const Page= () => {
  const [count, setCount] = useState<CounterState>({ count: 0 });

  const increaseCountState = () => {
  setCount((prevState) => ({ count : prevState.count + 1 }));
  };

  const decreaseCountState = () => {
  setCount((prevState) => ({ count : prevState.count + 1 }));
  };
  
  const resetCountState = () => {
  setCount({ count : 0 });
  };

  return (
    <div>
      <p>State: {count.count}</p>
      <button onClick={increaseCountState} className='Upbutton'>State 올리기</button>
      <button onClick={decreaseCountState} className='Downbutton'>State 내리기</button>
      <button onClick={resetCountState} className='Resetbutton'>State 초기화</button>
    </div>
  );
}

export default Page;
