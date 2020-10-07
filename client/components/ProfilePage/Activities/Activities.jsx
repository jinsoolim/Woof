import React from "react";
import {Link} from "react-router-dom";
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../../StateProvider';
import ActivityItem from './ActivityItem/ActivityItem.jsx';


const Activities = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <div>
      <ActivityItem />
    </div>
  );
}

export default Activities;