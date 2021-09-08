import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import MicIcon from '@material-ui/icons/Mic'
import "../components/Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div class="chat__header">
        <Avatar />

        <div class="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div class="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div class="chat__body">
        <p className="chat__message">
          <span class="chat__name">Jose</span>
          This is a message
          <span class="chat__timestamp">
              {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat__message chat__receiver">
          <span class="chat__name">Jose</span>
          This is a message
          <span class="chat__timestamp">
              {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat__message">
          <span class="chat__name">Jose</span>
          This is a message
          <span class="chat__timestamp">
              {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div class="chat__footer">
          <InsertEmoticon/>
          <form>
              <input
              placeholder="Type a message"
              type="text"
              />
              <button type="submit">Send a message</button>
          </form>
          <MicIcon/>
      </div>
    </div>
  );
}

export default Chat;
