import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="wrapper">
          <Sidebar />
          <main className="content">
            <Profile />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
