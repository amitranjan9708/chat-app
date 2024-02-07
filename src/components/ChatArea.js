import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { IconButton } from '@mui/material';
import { IoMdSend } from "react-icons/io";
import "./mystyles.css";
import Messageothers from './Message_Others';
import MessageSelf from "./MessageSelf"
function ChatArea({name, timestamp}) {
  return (
    <div className='chatArea-container'>
<div className='chatArea-header'>
<p className='con-icon'>{name[0]}</p>
<div className='header-text'>
    <p className='con-title'>{name}</p>
    <p className="con-timestamp">{timestamp}</p>
</div>
<IconButton style={{ marginLeft: 'auto' }}>
<MdDeleteOutline />
</IconButton>
</div>
<div className='messages-container'>
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    <Messageothers />
    <MessageSelf />
    
    
</div>
<div className='text-input-area'>
   
<input placeholder='Type a Message' className='search-box' />
<IconButton>
< IoMdSend />
</IconButton>
    </div>    
    </div>
  )
}

export default ChatArea

