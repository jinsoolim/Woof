import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../../StateProvider';
import ActivityItem from './ActivityItem/ActivityItem.jsx';
import styledItems from '../../../styled-items';

const OuterDiv = styled.div`
  width: 35%;
  align-self: flex-start;
  background-color: ${styledItems.lightGray};
  min-height: 600px;
  margin: 25px;
  padding: 20px;
`;
const Heading = styled.div`
  font-size: 1.6em;
  color: ${styledItems.darkGray};
`;

const stockActivities = [
  'Coffee',
  'Hiking',
  'Birdwatch',
  'Running',
  'Fetch',
  'Swimming',
  'Grooming',
  'Beach',
];

const activitiesList = [];

stockActivities.forEach((activity, index) => {
  const item = <ActivityItem activity={activity} id={`act${index}`} key={`act${index}`}/>
  activitiesList.push(item);
});

const Activities = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <OuterDiv>
      <Heading>Activities</Heading>
      {activitiesList}
    </OuterDiv>
  );
}

export default Activities;