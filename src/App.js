import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Login from './components/Login';
import Sidebar from './components/Sidebar'; 
import Feed from './components/Feed'; 
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="app">
      {
        user ? (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Feed />
            </div>
          </>
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
