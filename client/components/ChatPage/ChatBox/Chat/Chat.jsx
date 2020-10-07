import React from "react";
import {Link} from "react-router-dom";
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../../../StateProvider';
import ChatQuery from './ChatQuery/ChatQuery.jsx';


const Chat = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <div>
      <ChatQuery />
    </div>
  );
}

export default Chat;