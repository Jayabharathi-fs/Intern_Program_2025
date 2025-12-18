import React from 'react'
import AnimationPage from './components/AnimationPage.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AnimationPage />} />
    </Routes>
  )
}

export default App;