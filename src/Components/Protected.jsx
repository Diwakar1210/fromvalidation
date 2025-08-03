import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Protected({isLoggedIn,children}){
  const isAuthenticated = sessionStorage.getItem('Signupdata');
  return isAuthenticated ? <Outlet/> : <Navigate to='/login' replace />
}

export default Protected