import React, { useState } from 'react';
import "./mystyles.css";
import { FaRegUserCircle } from "react-icons/fa";
import { IconButton } from "@mui/material";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import ConversationsItem from "./Conversationitem"; // Make sure the import statement is correct
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "last message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "last message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "last message #3",
      timeStamp: "today",
    }
  ]);

  const navigate = useNavigate();

  return (
    <div className="sidebar-container">
      <div className='sb-header'>
        <div>
          <IconButton >
            <FaRegUserCircle />
          </IconButton>
        </div>
        <div>
          <IconButton 
          onClick={()=>
            {navigate('users')
          }
        }
          >
            <AiOutlineUserAdd />
          </IconButton>
          <IconButton 
           onClick={()=>
            {navigate('creategroups')
          }
        }
        >
            <AiOutlineUsergroupAdd />
          </IconButton>
          <IconButton>
            <IoMdAddCircleOutline />
          </IconButton>
          <IconButton>
            <FaRegMoon />
          </IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
          <IoSearchSharp />
        </IconButton>
        <input placeholder='search' className='search-box' />
      </div>
      <div className="sb-conversations">
        {conversations.map((conversation) =>
         (
          <ConversationsItem key={conversation.name} props={conversation} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
