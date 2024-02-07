import React from 'react'
import "./mystyles.css"
import logo from "../image/logo3.png"
import { IconButton, colors } from '@mui/material'
import { IoSearchSharp } from "react-icons/io5";
function Users_Groups() {
  return (
    <div className='list-container'>
       <div className="ug-header">
        
        <div className='ug-header'>
            <img src={logo} style={{height:"2rem",width:"2rem"}} alt="" />
           
        </div>
        <p className="ug-title">Online Users</p>
        <div className="online-dot"></div>

       </div>
       <div className="sb-search">
       <IconButton>
        <IoSearchSharp/>

       </IconButton>
       <input   placeholder="search" className='search-box' />
       </div>
       <div className="ug-list">
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>

        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-item">Test User</p>
        </div>
       
        



       </div>
      
    </div>
  )
}

export default Users_Groups
