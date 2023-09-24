import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import InternetMediaPlayer from './components/InternetMediaPlayer';
import Test from './Test';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/internet-media' element={<InternetMediaPlayer/>} />
        <Route path='/test' element={<Test/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
