import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../actions/userAction'
import { useNavigate } from 'react-router-dom'


const Logout = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(() => {
    dispatch(logout());
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; secure;";

    navigate("/");
    }, [dispatch,navigate])
    
  return (
    <></>
  )
}

export default Logout