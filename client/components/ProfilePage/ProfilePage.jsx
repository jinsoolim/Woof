import React from "react";
import {Link} from "react-router-dom";
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../StateProvider';
import Activities from './Activities/Activities.jsx';
import Profile from './Profile/Profile.jsx';


const ProfilePage = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <div>
      <Activities />
      <Profile />
    </div>
  );
}

export default ProfilePage;