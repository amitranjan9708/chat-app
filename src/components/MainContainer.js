import React from 'react'
import "./mystyles.css";
import Side_bar from './Side_bar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import Login from './Login';
import CreateGroups from './CreateGroups';
import Users_Groups from './Users_Groups';
import { Outlet } from 'react-router-dom';

function MainContainer() {

    const chatData = {
        name: 'Test#1',
        timestamp: 'today',
      };
  return (
    <div className='main-container'>
       <Side_bar />
       <Outlet/>
    
      {/* <ChatArea {...chatData}/> */}
       
       {/* <CreateGroups/> */}
       {/* <Login/> */}
       {/* <Users_Groups /> */}
       
       
    </div>

  )
}

export default MainContainer
