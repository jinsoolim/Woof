import React from "react";
import {Link} from "react-router-dom";
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '..../StateProvider';
import UserItem from './UserItem/UserItem.jsx';


const UserList = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <div>
      <UserItem />
    </div>
  );
}

export default UserList;