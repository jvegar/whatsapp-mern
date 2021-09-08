import { Avatar } from '@material-ui/core';
import React from 'react';
import "../components/SidebarChat.css";
import Sidebar from './Sidebar';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div class="sidebarChat__info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat;
