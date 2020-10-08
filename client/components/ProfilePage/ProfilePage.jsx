import React, {Component} from "react";
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
  width: 40%;
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

class ProfilePage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userLocation: '',
      userAge: '',
      petName: '',
      petAge: '',
      petBreed: '',
      petSize: '',
      petAvatar: '',
      Coffee: '',
      Hiking: '',
      Birdwatch: '',
      Running: '',
      Fetch: '',
      Swimming: '',
      Grooming: '',
      Beach: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    })
  }

  componentDidMount() {
    const [{ userInfo, petInfo }, dispatch] = this.context;
    this.setState({
      userLocation: userInfo.location,
      userAge: userInfo.age,
      petName: petInfo.name,
      petAge: petInfo.age,
      petBreed: petInfo.breed,
      petSize: petInfo.size,
      petAvatar: petInfo.avatarUrl,
      Coffee: userInfo.activities.Coffee || '',
      Hiking: userInfo.activities.Hiking || '',
      Birdwatch: userInfo.activities.Birdwatch || '',
      Running: userInfo.activities.Running || '',
      Fetch: userInfo.activities.Fetch || '',
      Swimming: userInfo.activities.Swimming || '',
      Grooming: userInfo.activities.Grooming || '',
      Beach: userInfo.activities.Beach || '',
    })
  }

  static contextType = StateContext;
  render() {
    const [{ userInfo, petInfo }, dispatch] = this.context;

    const saveProfile = () => {
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

      const userInfo = {
        location: this.state.userLocation,
        age: this.state.userAge,
        activities: {},
      };

      const petInfo = {
        name: this.state.petName,
        age: this.state.petAge,
        breed: this.state.petBreed,
        size: this.state.petSize,
        avatarUrl: this.state.petAvatar,
      }

      stockActivities.forEach(activity => {
        if(this.state[activity] != '') {
          userInfo.activities[activity] = this.state[activity];
        }
      })
      console.log(this.state);
      console.log(stockActivities);
      console.log(userInfo);

      dispatch({ 
        type: 'saveProfile',
        userInfo,
        petInfo,
      });
    }

    return (
      <OuterDiv>
        <Activities handleChange = {this.handleChange} state = {this.state}/>
        <RightDiv>
          <Profile handleChange = {this.handleChange} state = {this.state}/>
          <Link to='/chatpage'><SaveButton onClick={() => {saveProfile()}}>Save</SaveButton></Link>
        </RightDiv>
      </OuterDiv>
    );
  }
}

export default ProfilePage;