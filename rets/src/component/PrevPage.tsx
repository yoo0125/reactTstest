import React, {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/PrevPage.css';

interface CounterState {
}

const PrevPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [title, setTitle] = useState<string>('');
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const navigate = useNavigate();

    const handleItemClick = (item : string) => {
        setSelectedItem(item);
    };

    const handleCopyClick = async () => {
        try {
            if (contentRef.current) {
              await navigator.clipboard.writeText(contentRef.current.value);
              alert('클립보드에 복사되었습니다.');
            }
          } catch (err) {
            console.error('복사 중 오류가 발생했습니다:', err);
            alert('클립보드 복사에 실패했습니다.');
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
                    <div className={`$'textareaContainer' $'center'`}>
              <div className='buttonContainer'>
                <button onClick={handleCopyClick}>텍스트 복사</button>
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
          case '항목 2':
            return <p className='center'>useEffect: 컴포넌트의 생명주기와 관련된 작업을 수행하기 위해 사용하는 Hook</p>;
          case '항목 3':
            return <p className='center'>useContext: Context 값을 사용하기 위해 사용하는 Hook</p>;
          case '항목 4':
            return <p className='center'>useReducer: 상태 관리를 위해 Redux와 유사한 방식으로 사용하는 Hook</p>;
          case '항목 5':
            return <p className='center'>useRef: DOM 요소에 접근하거나 이전 값을 유지하기 위해 사용하는 Hook</p>;
          case '항목 6':
            return <p className='center'>useCallback: 콜백 함수를 메모이제이션하여 성능을 최적화하기 위해 사용하는 Hook</p>;
          case '항목 7':
            return <p className='center'>useMemo: 계산 비용이 많이 드는 함수의 결과 값을 메모이제이션하여 성능을 최적화하기 위해 사용하는 Hook</p>;
          case '항목 8':
            return <p className='center'>
            useLayoutEffect: useEffect와 유사하게 컴포넌트의 생명주기와 관련된 작업을 수행하지만, 렌더링 결과가 돔에 반영된 후 동기적으로 실행됩니다. <br/>
            useImperativeHandle: 부모 컴포넌트에서 자식 컴포넌트의 인스턴스에 접근하여 특정 함수를 호출할 수 있게 해주는 Hook입니다. <br/>
            useDebugValue: 커스텀 Hook을 디버깅하기 위해 사용하는 Hook입니다. <br/>
            나열된 Hooks는 주요한 Hooks이지만, 추가적으로 커스텀 Hooks를 생성하여 자신만의 로직을 구현할 수도 있습니다. <br/>
            React Hooks를 사용하면 함수형 컴포넌트에서도 상태 관리와 생명주기를 효율적으로 다룰 수 있습니다.
            </p>;
          default:
            return <p className='center'>아무 항목도 선택되지 않았습니다.</p>;
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
                <li onClick={() => handleItemClick('항목 5')}>useRef</li>
                <li onClick={() => handleItemClick('항목 6')}>useCallback</li>
                <li onClick={() => handleItemClick('항목 7')}>useMemo</li>
                <li onClick={() => handleItemClick('항목 8')}>그 외</li>
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