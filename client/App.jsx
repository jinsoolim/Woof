import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
import { StateProvider } from './StateProvider';

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



const App = () => {
  // define initialState here as an object
  const initialState = {
    // example initial state:
    // theme: { primary: 'green' }
    userInfo: {
      _id: 564345232,
      fullName: 'Stormi Hashimoto',
      firstName: 'Stormi',
      location: 'Los Angeles, CA',
      age: '23',
      avatarUrl: 'https://www.facebook.com/photo/?fbid=2414282795276108&set=a.141715079199569',
      activities: { coffee: 'i like starbucks', },
    },
    petInfo: {
      name: 'Chico',
      age: '2',
      breed: 'Pitbull Terrior Mix',
      size: 'Medium',
      avatarUrl: 'https://www.facebook.com/photo/?fbid=1820209034683490&set=picfp.100000832322052',
    },
    partnerInfo: {
      _id: 564345532,
      fullName: 'Gary Slootskiy',
      firstName: 'Gary',
      location: 'New York, NY',
      age: '30',
      avatarUrl: '',
      activities: { coffee: 'i like mcdonalds coffee', },
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
  };

  const reducer = (state, action) => {
    switch (action.type) {
      // example case:
      case 'clickLogin': 
        return {
          ...state,
          userName: action.userName
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
      <Header />
      <div>HELLLO</div>
      <div>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/profilepage' component={ProfilePage} />
            <Route exact path='/chatpage' component={ChatPage} />
            <Route exact path='/' component={Login} />
          </Switch>
        </Router>
      </div>
    </StateProvider>
  );
};

export default App;
