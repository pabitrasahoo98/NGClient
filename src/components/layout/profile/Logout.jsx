import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../actions/userAction'
import { useNavigate } from 'react-router-dom'


const Logout = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(() => {
    dispatch(logout());
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
    //window.location.reload();
    }, [dispatch,navigate])
    
  return (
    <></>
  )
}

export default Logout