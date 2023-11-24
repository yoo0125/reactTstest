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