import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../StateProvider';
import styledItems from '../../styled-items';
import Activities from './Activities/Activities.jsx';
import Profile from './Profile/Profile.jsx';

const OuterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SaveButton = styled.div`
  font-size: 1.7em;
  padding: 10px;
  width: 180px;
  border: 1px solid ${styledItems.darkGray};
  border-radius: 2px;
  background-color: ${styledItems.primaryBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${styledItems.white};
  justify-self: flex-end;
  text-decoration: none;
  &:hover {
    background-color: ${styledItems.darkGray};
    color: ${styledItems.secondaryBlue};
    cursor: pointer;
  }
`;

const ProfilePage = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  return (
    <OuterDiv>
      <Activities />
      <RightDiv>
        <Profile />
        <Link to='/chatpage'><SaveButton>Save</SaveButton></Link>
      </RightDiv>
    </OuterDiv>
  );
}

export default ProfilePage;