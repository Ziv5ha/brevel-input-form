import React from 'react';
import InsertForm from './components/InsertForm';
// ts-lint ignore
import logo from './logo.jpg';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <img src={logo} className='App-logo' alt='logo' />
      <InsertForm />
    </div>
  );
}

export default App;
