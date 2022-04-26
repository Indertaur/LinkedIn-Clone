import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import "./App.css"
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
