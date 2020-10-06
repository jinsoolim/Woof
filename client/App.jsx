import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import './styles.css';
import Login from "./components/Login.jsx";
import Feed from "./components/Feed.jsx";
import Signup from "./components/Signup.jsx";
import Bucketlist from "./components/Bucketlist.jsx";
import { StateProvider } from './state';
import reducers from './reducers/reducers.js'

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
      <div>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/feed' component={Feed} />
            <Route exact path='/bucket-list' component={Bucketlist} />
            <Route exact path='/' component={Login} />
          </Switch>
        </Router>
      </div>
    </StateProvider>
  );
};

export default App;
