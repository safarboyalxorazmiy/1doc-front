import React from 'react';
import { HashRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <HashRouter basename="/app">
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route exact path="/" element={<Home />} />

        <Route exact path="/dashboard" element={<Sidebar />} />

        {/* For other routes */}
        <Route path="/*" element={<Sidebar />} />
      </Routes>
    </HashRouter> 
  );
}

export default App;