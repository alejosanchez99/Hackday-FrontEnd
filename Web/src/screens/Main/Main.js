import React from 'react'
import Header from '../../components/Header';
import LoginScreen from '../Login/LoginScreen';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './styles.css';
import Home from '../../components/Home';
import { ProtectedRoute } from '../../common/ProtectedRoute';

const Main = () => {

  return(
    <div className='main'>
      <Header />
      <div className='d-flex justify-content-center'>
        <div className=''>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={ <LoginScreen />} />
              <Route path='/home' element={<ProtectedRoute> <Home/> </ProtectedRoute> }/>
            </Routes>
            </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default Main;