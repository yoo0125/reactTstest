import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './component/Page';
import PrevPage from './component/PrevPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Page someDynamicValue="example"/>} />
        <Route path= "/PrevPage" element={<PrevPage />}/>
      </Routes>
    </Router>
  )
}

export default App;

/*
----------------------- Redux -----------------------

상태를 관리할 곳, 예를 들어 user.js라는 파일을 만든다. 그 파일에 createSlice를 사용한다.
createSlice는 상태(state), 리듀서(reducers), 액션 크리에이터(action creators)를 한곳에서 정의할 수 있도록 해준다.

----------------------- user.js -----------------------
import { createSlice } from '@reduxjs/toolkit';

// 슬라이스 정의
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: 0,
  },
  reducers: {
    // 액션 타입: 'user/setName'
    setName: (state, action) => {
      state.name = action.payload;
    },
    // 액션 타입: 'user/setAge'
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

// 생성된 액션 크리에이터
export const { setName, setAge } = userSlice.actions;

// 리듀서
export default userSlice.reducer;
----------------------- 설명 -----------------------

store.js라는 파일을 만들어서 그곳에서 리듀서를 합친다.
combineReducers 함수를 사용하여 여러 리듀서를 하나의 메인 리듀서로 합치고 persistReducer 함수를 사용하여 리듀서를 감싸고 configureStore(최신 Redux 에서는 createStore를 사용하지 않는다.)를 사용하여 리덕스를 사용하고자 하는 페이지에서
const user = useSelector((state) => state.user.value);를 사용하여 불러와서 사용

----------------------- user.js에 initialState에 value를 사용했을 때의 store.js 예시 -----------------------
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: { value:{id:"", name:""}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    },
});

export const {login} = userSlice.actions;

export default userSlice.reducer;

----------------------- user.js에 initialState에 value를 사용하지 않았을 때의 store.js 예시 -----------------------
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage를 사용하기 위한 임포트
import userReducer from './user'; // 'user.js'에서 export한 리듀서

// Redux Persist의 설정
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // 여기서는 'user' 리듀서만 지속적으로 저장하도록 설정
};

// 여러 리듀서를 하나로 합칩니다. 현재는 'user' 리듀서만 있지만, 필요시 다른 리듀서들을 추가할 수 있습니다.
const rootReducer = combineReducers({
  user: userReducer,
});

// persistReducer를 사용하여 rootReducer를 감싸줍니다.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configureStore를 사용하여 스토어를 구성합니다.
const store = configureStore({
  reducer: persistedReducer,
});

// persistStore를 사용하여 스토어를 persist하게 만듭니다.
const persistor = persistStore(store);

export { store, persistor };
----------------------- value 없을 때 사용할 페이지 -----------------------
import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const userName = useSelector((state) => state.user.name);
  const userAge = useSelector((state) => state.user.age);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userName}</p>
      <p>Age: {userAge}</p>
    </div>
  );
};

export default UserProfile;
----------------------- 설명 -----------------------
value를 사용하지 않았을 때와 사용했을 때의 useSelector 사용법이 다름
 */