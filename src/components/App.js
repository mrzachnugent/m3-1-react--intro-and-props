import React from "react";

import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";

import "./App.css";

const App = (props) => {
  console.log(props);
  return (
    <div className="wrapper">
      <div>
        <Header
          users={props.conversation.participants}
          currentUser={props.currentUser}
        />
        <ChatStream
          messages={props.conversation.messages}
          currentUser={props.currentUser}
        />
        <Footer />
      </div>
      <div>
        <Header
          users={props.conversation.participants}
          currentUser={props.conversation.participants[0]}
        />
        <ChatStream
          messages={props.conversation.messages}
          currentUser={props.conversation.participants[0]}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
