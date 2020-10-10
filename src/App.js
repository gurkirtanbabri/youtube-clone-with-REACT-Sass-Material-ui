import React from 'react';

import './App.scss';
import firebase from "./firebase";
import Header from './Header';
import SideBar from "./Sidebar";
import Main from "./Main";

function App() {


  const todoRef = firebase.database().ref('Too');
 

  return (
    <div className="App">
      <Header/>
<div className = "videoArea">

      <SideBar/>
      <Main/>
</div>
    </div>
  );
}

export default App;
