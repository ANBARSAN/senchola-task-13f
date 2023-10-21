import React from 'react';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import Video from './pages/video';
import Store from './pages/store';
import Friends from './pages/friends';
import Bell from './pages/bell';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return ( 
    // <AuthProvider>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/video" element={<Video />} />
        <Route path="/store" element={<Store />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/bell" element={<Bell />} />
        
        

      </Routes>
    </Router>
    // <Navigation/>
    /* </AuthProvider> */
  );
}

export default App;