// App.js
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import VideoGrid from './VideoGrid';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Navbar />
        <VideoGrid />
      </div>
    </div>
  );
}

export default App;
