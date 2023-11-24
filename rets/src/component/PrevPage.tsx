import React, { useState } from 'react';
import '../css/PrevPage.css';

interface CounterState {
}

const PrevPage: React.FC = () => {
  return (
    <div>
    <div className='blue-nav'>
        <h4>PrevPage</h4>
    </div>
        <div className='container'>
            <div className='sidebar'>
                <h3>목록</h3>
            <ul className='sidebarList'>
                <li>항목 1</li>
                <li>항목 2</li>
                <li>항목 3</li>
            </ul>
            </div>
        <div className='content'>
            <div className='center'>
            <h1>블로그 제목</h1>
            <p>작성자: John Doe</p>
            <p>
                블로그 내용이 여기에 들어갑니다. 자세한 내용은 계속해서 추가할 수 있습니다.
            </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PrevPage;