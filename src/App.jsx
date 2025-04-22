import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';

function App() {
return (
  <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/posts/create" element={<CreatePost/>} />
      </Routes>
    <Footer/>
  </BrowserRouter>
);
}

export default App;