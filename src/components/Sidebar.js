import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar, IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
                <div className="sidebar__header">
                    <Avatar src="https://lh3.googleusercontent.com/pw/AM-JKLWVSwt2Pt3TkS_MlPvmWu28K8IfzimKzMC-V8CyJbF8O2IU4OWEwo5sQr2qjILLa_-8vE2O8z5SOWyPCaaleykSgb4CSWbzapZDAwt1S9DS00vsArDK8_qSbquE6eCNHzym8QGj0gGZaIvPhV3wOgL2MQ=s400-no?authuser=0" />
                    <div class="sidebar__headerRight">
                        <IconButton>
                            <DonutLargeIcon/>
                        </IconButton>
                        <IconButton>
                            <ChatIcon/>
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    </div>
                </div>

                <div class="sidebar__search">
                    <div class="sidebar__searchContainer">
                        <SearchOutlined/>
                        <input placeholder="Search or start new chat" type="text"/>                    </div>
                </div>

                <div class="sidebar__chats">
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>
                </div>
        </div>
    )
}

export default Sidebar
