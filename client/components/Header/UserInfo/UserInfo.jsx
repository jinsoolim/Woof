import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../../StateProvider';
import styledItems from '../../../styled-items';

const Register = styled.div`
  color: ${styledItems.darkGray};
  font-size: 1.4em;
`;

const DisplayInfo = styled.div`
  color: ${styledItems.darkGray};
  font-size: 1.4em;
`;

// const 
//display: none
// ${styledItems.hidden}

const UserInfo = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userInfo, petInfo }, dispatch] = useStateValue();
  
  // conditional rendering on cornerDiv
  let cornerDiv;
  if(userInfo.fullName == '') {
    cornerDiv = <Register>register</Register>;
  } else if(petInfo.name == '') {
    cornerDiv = <Register>{userInfo.firstName}</Register>;
  } else {
    cornerDiv = <div><Register>{userInfo.firstName}</Register><Register>{petInfo.name}</Register></div>;
  }
  
  return (
    <div>
      {cornerDiv}
    </div>
  );
}

export default UserInfo;