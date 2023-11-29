import React, {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/PrevPage.css';

const PrevPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const navigate = useNavigate();

    const handleItemClick = (item : string) => {
        setSelectedItem(item);
    };

    const handleCopyClick = async () => {
        try {
            if (contentRef.current) {
              await navigator.clipboard.writeText(contentRef.current.value);
              alert('복사되었습니다.');
            }
          } catch (err) {
            console.error('복사 중 오류가 발생했습니다:', err);
            alert('복사에 실패했습니다.');
          }
      };

    const handlePageClick = () => {
    navigate('/');
    };

    const getContentForSelectedItem = () => {
        switch (selectedItem) {
          case '항목 1':
            return  <div className='center'>
                    <p>useState: 상대 값을 관리하기 위해 사용하는 Hook</p>
                    <div className='textareaContainer'>
                    <div className='kGQJNI'>
                <div className='bMwTGV'>
                  jsx
                <span style={{marginLeft:'538px'}} onClick={handleCopyClick}>📄</span>
                </div>
              <textarea
                className='codeTextArea'
                readOnly
                value={`
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`}
                ref={contentRef}
              />
              </div>
            </div>
            </div>
          case '항목 2':
            return <div className='center'>
              <p>useEffect: 컴포넌트의 생명주기와 관련된 작업을 수행하기 위해 사용하는 Hook</p>
              <div className='textareaContainer'>
                <div className='kGQJNI'>
                <div className='bMwTGV'>
                  jsx
                <span style={{marginLeft:'538px'}} onClick={handleCopyClick}>📄</span>
                </div>
                <textarea className='codeTextArea' readOnly value={`
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count updated');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`} ref={contentRef}/>
                </div>
                </div>
                </div>
          case '항목 3':
            return <div className='center'>
            <p>useContext: Context 값을 사용하기 위해 사용하는 Hook</p>
            <div className='textareaContainer'>
            <div className='kGQJNI'>
                <div className='bMwTGV'>
                  jsx
                <span style={{marginLeft:'538px'}} onClick={handleCopyClick}>📄</span>
                </div>
              <textarea className='codeTextArea' readOnly value={`
import React, { useContext } from 'react';

// Context 객체 생성
const MyContext = React.createContext();

function ParentComponent() {
  return (
    // Provider를 통해 Context 값을 제공
    <MyContext.Provider value="Hello from Context">
      <ChildComponent />
    </MyContext.Provider>
  );
}

function ChildComponent() {
  // useContext를 사용하여 Context 값을 받아옴
  const value = useContext(MyContext);

  return <p>{value}</p>;
}`} ref={contentRef}/>
            </div>
            </div>
            </div>
          case '항목 4':
            return <div className='center'>
            <p>useReducer: 상태 관리를 위해 Redux와 유사한 방식으로 사용하는 Hook<br/>
            장점: 복잡한 상태 로직을 효과적으로 관리할 수 있음
            </p>
            <div className='textareaContainer'>
            <div className='kGQJNI'>
                <div className='bMwTGV'>
                  jsx
                <span style={{marginLeft:'538px'}} onClick={handleCopyClick}>📄</span>
                </div>
              <textarea className='codeTextArea' style={{height:'700px'}}readOnly value={`
import React, { useReducer } from 'react';

// reducer 함수 정의
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

function Counter() {
  // useReducer를 통해 상태와 dispatch 함수를 생성
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
              `} ref={contentRef}/>
            </div>
            </div>
            </div>
          case '항목 5':
            return <div className='center'>
            <p>useRef: DOM 요소에 접근하거나 이전 값을 유지하기 위해 사용하는 Hook</p>
            <div className='textareaContainer'>
              <p>useRef를 사용하여 DOM 요소에 접근하는 예시</p>
              <div className='kGQJNI'>
                <div className='bMwTGV'>
                  jsx
                <span style={{marginLeft:'538px'}} onClick={handleCopyClick}>📄</span>
                </div>
              <textarea className='codeTextArea' readOnly value={`
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
              `} ref={contentRef}/>
            </div>
            </div>
            </div>
          case '항목 6':
            return <div className='center'>
            <p>useRef: DOM 요소에 접근하거나 이전 값을 유지하기 위해 사용하는 Hook</p>
            <div className='textareaContainer'>
              <p>useRef를 사용하여 이전 값을 유지하는 예시</p>
              <div className='kGQJNI'>
                <div className='bMwTGV'>
                  jsx
                <span style={{marginLeft:'538px'}} onClick={handleCopyClick}>📄</span>
                </div>
              <textarea className='codeTextArea' readOnly value={`
import React, { useState, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
              `} ref={contentRef}/>
            </div>
            </div>
            </div>
          case '항목 7':
            return <div className='center'>
            <p>useCallback: 콜백 함수를 메모이제이션하여 성능을 최적화하기 위해 사용하는 Hook<br/>
            장점: 콜백 함수가 변경되지 않는 한 동일한 함수 인스턴스를 재사용 가능</p>
            <div className='textareaContainer'>
            <div className='kGQJNI'>
                <div className='bMwTGV'>
                  jsx
                <span style={{marginLeft:'538px'}} onClick={handleCopyClick}>📄</span>
                </div>
              <textarea className='codeTextArea' readOnly value={`
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // useCallback을 사용하여 콜백 함수를 메모이제이션
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

              `} ref={contentRef}/>
            </div>
            </div>
            </div>
          case '항목 8':
            return <div className='center'>
            <p>useMemo: 계산 비용이 많이 드는 함수의 결과 값을 메모이제이션하여 성능을 최적화하기 위해 사용하는 Hook</p>
            <div className='textareaContainer'>
            <div className='kGQJNI'>
                <div className='bMwTGV'>
                  jsx
                <span style={{marginLeft:'538px'}} onClick={handleCopyClick}>📄</span>
                </div>
              <textarea className='codeTextArea' readOnly value={`
import React, { useMemo } from 'react';

function ExpensiveCalculation({ number }) {
  // 계산 비용이 많이 드는 함수
  const calculateResult = useMemo(() => {
    console.log('Calculating result...');
    let result = 0;
    for (let i = 1; i <= number; i++) {
      result += i;
    }
    return result;
  }, [number]);

  return <p>Result: {calculateResult}</p>;
}`} ref={contentRef}/>
            </div>
            </div>
            </div>
          case '항목 9':
            return <p className='center'>
            useLayoutEffect: useEffect와 유사하게 컴포넌트의 생명주기와 관련된 작업을 수행하지만, 렌더링 결과가 돔에 반영된 후 동기적으로 실행됩니다. <br/><br/>
            useImperativeHandle: 부모 컴포넌트에서 자식 컴포넌트의 인스턴스에 접근하여 특정 함수를 호출할 수 있게 해주는 Hook입니다. <br/><br/>
            useDebugValue: 커스텀 Hook을 디버깅하기 위해 사용하는 Hook입니다. <br/><br/>
            나열된 Hooks는 주요한 Hooks이지만, 추가적으로 커스텀 Hooks를 생성하여 자신만의 로직을 구현할 수도 있습니다. <br/><br/>
            React Hooks를 사용하면 함수형 컴포넌트에서도 상태 관리와 생명주기를 효율적으로 다룰 수 있습니다.
            </p>;
          default:
            return <p className='center'>목록을 클릭하십시오</p>;
        }
      };

  return (
    <div>
    <div className='blue-nav'>
        <h4>PrevPage</h4>
        <button onClick={handlePageClick} className='Previousbutton'>이전 페이지</button>
    </div>
        <div className='container'>
            <div className='sidebar'>
                <h3 style={{backgroundColor: '#f4f4f4'}}>목록</h3>
            <ul className='sidebarList'>
                <li onClick={() => handleItemClick('항목 1')}>useState</li>
                <li onClick={() => handleItemClick('항목 2')}>useEffect</li>
                <li onClick={() => handleItemClick('항목 3')}>useContext</li>
                <li onClick={() => handleItemClick('항목 4')}>useReducer</li>
                <li onClick={() => handleItemClick('항목 5')}>useRef DOM</li>
                <li onClick={() => handleItemClick('항목 6')}>useRef 이전 값 유지</li>
                <li onClick={() => handleItemClick('항목 7')}>useCallback</li>
                <li onClick={() => handleItemClick('항목 8')}>useMemo</li>
                <li onClick={() => handleItemClick('항목 9')}>그 외</li>
            </ul>
            </div>
        <div className='content'>
            <div className='center'>
            <h1>React Hook 종류</h1>
            </div>
            {getContentForSelectedItem()}
        </div>
    </div>
    </div>
  )
}

export default PrevPage;