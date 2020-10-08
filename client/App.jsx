import React, {Component, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import styled from 'styled-components';
// import './styles.css';
// OLD IMPORTS
// import Login from "./components/Login.jsx";
// import Feed from "./components/Feed.jsx";
// import Signup from "./components/Signup.jsx";
// import Bucketlist from "./components/Bucketlist.jsx";

import Header from "./components/Header/Header.jsx"
import Login from "./components/Login/Login.jsx"
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx"
import ChatPage from "./components/ChatPage/ChatPage.jsx"
import { StateProvider, useStateValue} from './StateProvider';
import styledItems from './styled-items';

// EXAMPLE STYLECOMPONENT
// Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// // Use Title and Wrapper like any other React component – except they're styled!
// render(
//   <Wrapper>
//     <Title>
//       Hello World!
//     </Title>
//   </Wrapper>
// );
const RouterDiv = styled.div`
      width: 85%;
      background-color: ${styledItems.white};
      min-height: 1000px;
      display: flex;
      justify-content: center;
`;

const StyledDiv = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
`;

const App = () => {

  // define initialState here as an object
  const initialState = {
    userInfo: {
      _id: 0,
      fullName: '',
      firstName: 'Stormi',
      location: 'Los Angeles, CA',
      age: '23',
      avatarUrl: '',
      activities: { },
    },
    petInfo: {
      name: '',
      age: '',
      breed: '',
      size: '',
      avatarUrl: '',
    },
    partnerInfo: {
      _id: 564345532,
      fullName: 'Gary Slootskiy',
      firstName: 'Gary',
      location: 'New York, NY',
      age: '30',
      avatarUrl: '',
      activities: { },
      petInfo: {
        name: 'Tully',
        age: '7',
        breed: 'Labrador',
        size: 'Medium',
        avatarUrl: 'https://www.facebook.com/photo/?fbid=1820209034683490&set=picfp.100000832322052',
      }
    },
    chatItems: {},
    matchList: [{_id: 564345532, firstName: 'Gary', petName: 'Tully'}],
    mainMatch: false,
    loggedIn: false,
  };

  const reducer = (state, action) => {
    let userInfo;
    let petInfo;

    switch (action.type) {
      
      case 'clickLogin': 
        userInfo = Object.assign({}, state.userInfo);
        userInfo.fullName = action.full_name;
        userInfo.firstName = action.first_name;
        userInfo.email = action.email;
        userInfo.avatarUrl = action.profile_img;
        userInfo._id = action.id
        return {
          ...state,
          userInfo,
          loggedIn: true,
        };

        case 'addActivity': 
        userInfo = Object.assign({}, state.userInfo);
        userInfo.activities[action.activity] = `i like ${action.activity}`;
        return {
          ...state,
          userInfo,
        };

        case 'saveProfile':
          userInfo = Object.assign({}, state.userInfo);
          petInfo = Object.assign({}, state.petInfo);
          userInfo.location = action.userInfo.location;
          userInfo.age = action.userInfo.age;
          // userInfo.activities = action.userInfo.activities;
          petInfo.name = action.petInfo.name;
          petInfo.age = action.petInfo.age;
          petInfo.breed = action.petInfo.breed;
          petInfo.size = action.petInfo.size;
          petInfo.avatarUrl = action.petInfo.avatarUrl;
          console.log(userInfo);
          console.log(petInfo);
          return {
            ...state,
            userInfo,
            petInfo,
          };
      // example component later in the process...
      // import { useStateValue } from './state';
      // const ButtonComponent = () => {
      //   const [{ userName }, dispatch] = useStateValue();
      //   return (
      //     <Button
      //       onClick={() => dispatch({
      //         type: 'clickLogin',
      //         userName: textBox.value
      //       })}>
      //       Login!
      //     </Button>
      //   );
      // }

      // USING STATE IN A CLASS COMPONENT
      // import React, { Component } from 'react';
      // import { StateContext } from './state';
      // class ThemedButton extends Component {
      //   static contextType = StateContext;
      //   render() {
      //     const [{ theme }, dispatch] = this.context;
      //     return (
      //       <Button
      //         primaryColor={theme.primary}
      //         onClick={() => dispatch({
      //           type: 'changeTheme',
      //           newTheme: { primary: 'blue'}
      //         })}
      //       >
      //         Make me blue!
      //       </Button>
      //     );
      //   }
      // }

      default:
        return state;
    }
  };

  return (
    // CONTEXT API: everything inside of StateProvider will now be able to access state
    <StateProvider initialState={initialState} reducer={reducer}>
      <StyledDiv>
          <Router>
            <Header />
      <RouterDiv>
            
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/chatpage' component={ChatPage} />
              <Route exact path='/profilepage' component={ProfilePage} />
            </Switch>
        </RouterDiv>
          </Router>
      </StyledDiv>
    </StateProvider>
  );
};

export default App;
