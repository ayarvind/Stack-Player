import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import InternetMediaPlayer from './components/InternetMediaPlayer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/internet-media' element={<InternetMediaPlayer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
