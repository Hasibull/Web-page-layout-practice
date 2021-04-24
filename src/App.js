import React, { Component } from 'react';
// import GridLayout from './Basic Layout/grid-layout';
import NavBar from './Multiple Component Layout/navbar';
import LeftSideBar from './Multiple Component Layout/leftSideBar';
import MainContent from './Multiple Component Layout/mainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <GridLayout/> */}
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="LeftSideBar">
        <LeftSideBar />
      </div>
      <div className="MainContent">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
