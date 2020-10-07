import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../../StateProvider';
import Chat from './Chat/Chat.jsx';


const ChatBox = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <div>
      <Chat />
    </div>
  );
}

export default ChatBox;