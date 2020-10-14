import React from "react";
import SideBar from "../SideBar";
import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";

import "./App.css";

const App = (props) => {
  console.log(props);
  return (
    <div className="wrapper">
      <Header
        users={props.conversation.participants}
        currentUser={props.currentUser}
      />
      <ChatStream
        messages={props.conversation.messages}
        currentUser={props.currentUser}
        // timeStamp={props.conversation.messages.timestamp}
      />
      <Footer />
      <SideBar
        users={props.conversation.participants}
        messages={props.conversation.messages}
      />
    </div>
  );
};

export default App;
