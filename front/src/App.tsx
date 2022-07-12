import React from 'react';
import InsertForm from './components/InsertForm';
// ts-lint ignore
import logo from './logo.jpg';
import './styles/App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <img src={logo} className='App-logo' alt='logo' />
      <InsertForm />
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{' '}
    </div>
  );
}

export default App;
