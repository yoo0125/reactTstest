import React, { useState } from 'react';
import '../css/Page.css';
import { useNavigate } from 'react-router-dom';

interface CounterState {
  someDynamicValue: string;
}

const Page: React.FC<CounterState> = ({ someDynamicValue }) => {
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();

  const increaseCountState = () => {
  setCount((prevState) => ( prevState + 1 ));
  };

  const decreaseCountState = () => {
  setCount((prevState) => ( prevState - 1 ));
  };
  
  const resetCountState = () => {
  setCount(0);
  };

  const handleClick = () => {
  navigate('/PrevPage')}

  return (
    <div>
      <div className='green-nav'>
        <h4>React+TypeScript Test</h4>
      </div>
    <div>
      <h2 className='state-img'>State: {count}</h2>
      <div>
      <button onClick={increaseCountState} className='Upbutton'>State 올리기</button>
      <button onClick={decreaseCountState} className='Downbutton'>State 내리기</button>
      <button onClick={resetCountState} className='Resetbutton'>State 초기화</button>
      <button onClick={handleClick} className='Prevbutton'> 다음페이지로 이동</button>
      </div>
    </div>
    </div>
  );
}

export default Page;
