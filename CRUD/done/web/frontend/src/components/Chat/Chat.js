import React from "react";
import "./chat.css";
import Nav from "../Nav/AfterNav";

function Chat() {
  return (
    <div>
      <Nav />
      {/* cover photo */}
      <div className="maincontainer">
        <div className="coverhoto"></div>
      </div>
      {/* Chat side */}
      <div class="row">
        <div class="column cone">
        </div>
        <div class="column ctwo">
          <h2 className="ctwot1">Welcome</h2>
          <h2 className="ctwot2">How Can I help You</h2>
          <div className="inptchat">
            <input
              type="text"
              className="ctwot-chat-input"
              placeholder="type Heare"
            ></input>
            <button className="ctwot-chat-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
