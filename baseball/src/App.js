import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
       <h1>BaseBall</h1>
        <Display balls = {balls} strikes = {strikes}/>
        <div>
        <Dashboard balls = {balls} strikes= {strikes} setBalls= {setBalls} setStrikes = {setStrikes}/>
        </div>
      </header>
    </div>
  );
}

export default App;
