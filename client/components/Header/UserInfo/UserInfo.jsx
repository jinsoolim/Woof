import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../../StateProvider';
import styledItems from '../../../styled-items';


const UserInfo = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <div>
    </div>
  );
}

export default UserInfo;