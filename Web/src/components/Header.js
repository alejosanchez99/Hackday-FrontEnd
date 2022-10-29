import React, { useEffect } from 'react'
import { useAuth } from '../services/authContext';

const Header = () => {
  const { user, logout } = useAuth();


  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">

          ATOM
        </a>
        {
          user?.email && (
            <>
              <label className="fw-bold" style={{color:'#FFF'}}>{user?.displayName || user?.email}</label>
              <button
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Salir
              </button>
            </>
          )
        }


      </div>
    </nav >
  )
}

export default Header;