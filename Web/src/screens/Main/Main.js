import React from 'react'
import Header from '../../components/Header';
import LoginScreen from '../Login/LoginScreen';
import './styles.css';

const Main = () => {

  return(
    <div className='main'>
      <Header />
      <div className='d-flex justify-content-center align-items-center'>
        <div className='col-4'>
          <LoginScreen />
        </div>
      </div>
    </div>
  );
}

export default Main;