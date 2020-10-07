import React from "react";
import {Link} from "react-router-dom";
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../StateProvider';
import UserList from './UserList/UserList.jsx';
import ChatBox from './ChatBox/ChatBox.jsx';
import PartnerInfo from './PartnerInfo/PartnerInfo.jsx';


const ChatPage = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <div>
      <UserList />
      <ChatBox />
      <PartnerInfo />
    </div>
  );
}

export default ChatPage;