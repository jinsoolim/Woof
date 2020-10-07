import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext , createContext} from '../../../../StateProvider';
import styledItems from '../../../../styled-items';

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`;

const ButtonDiv = styled.div`
  width: 40%;
  height: 50px;
  border: 1px solid ${styledItems.darkGray};
  border-radius: 2px;
  background-color: ${styledItems.secondaryBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${styledItems.darkGray};
  &:hover {
    background-color: ${styledItems.primaryBlue};
    color: ${styledItems.white};
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  margin: 0;
  font-size: 1em;
`;

const StyledInput = styled.input`
  padding: 5px;
  margin-top: 4px;
  width: 100%;
  border: 1px solid ${styledItems.darkGray};
  border-radius: 4px;
  color: ${styledItems.darkGray}:
`;

const ActivityItem = (props) => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const activityName = props.activity;
  const [{ userInfo }, dispatch] = useStateValue();
  let showform = 'none';
  let formItem;
  if(activityName in userInfo.activities) {
    formItem = 
    <StyledForm  >
      <StyledInput type="input" placeholder = {`I like ${activityName}`}/>
    </StyledForm>;
  }
  return (
    <OuterDiv>
      <ButtonDiv onClick={() => {dispatch({ 
          type: 'addActivity',
          activity: activityName,
        })}}>
        {activityName}
      </ButtonDiv>
      {formItem}
    </OuterDiv>
  );
}


// class ActivityItem extends Component {
//   static contextType = StateContext;
//   render() {
//     // const [{ userInfo }, dispatch] = this.context;
//     return (
//       <OuterDiv>
//         <ButtonDiv onClick={() => {dispatch({ 
//             type: 'addActivity',
//             activity: activityName,
//           });
//           console.log(userInfo.activities);
//           showForm = 'block'}}>
//           {activityName}
//         </ButtonDiv>
//         <StyledForm>
//           <StyledInput type="input" placeholder="I like walks to starbucks"/>
//         </StyledForm>
//       </OuterDiv>
//     );
//   }
// }

export default ActivityItem;