import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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

const App = () => {
  // define initialState here as an object
  const initialState = {
    // example initial state:
    // theme: { primary: 'green' }
    userName: '',
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
