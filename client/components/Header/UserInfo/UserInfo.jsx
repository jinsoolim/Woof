import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../../StateProvider';
import styledItems from '../../../styled-items';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const Register = styled.div`
  color: ${styledItems.darkGray};
  font-size: 1.4em;
`;

const DisplayInfo = styled.div`
  color: ${styledItems.darkGray};
  font-size: 1.4em;
`;

const UserInfo = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userInfo, petInfo }, dispatch] = useStateValue();

  // FACEBOOK RESPONSE
  const responseFacebook = response => {
    if (response.accessToken) {
      // send user data to DB
      fetch('/api/login', {
        method: 'POST',
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(response)
      })
      .then((res) => res.json())
      .then((data) => {
        // data contains email, first_name, full_name, profile_img
        console.log('response from server', data);
      })
      .catch((err) => console.log('POST: FB info to DB ERROR: ', err));

      // send user to destination
      console.log(`You're logged in ${response.name}, ${response.email}, ${response.picture.data.url}`); 

      dispatch({ type: 'clickLogin',
                name: response.name,
                email: response.email,
                profileImage: response.picture.data.url,
              })
    }
  }

  // CONDITIONAL RENDERING OF CORNER DIV
  let cornerDiv;
  if(userInfo.fullName == '') {
    cornerDiv = 
      <FacebookLogin 
        fields="name, email, picture" 
        appId="371520144220769" 
        callback={responseFacebook} 
        render={renderProps => (<Register onClick={renderProps.onClick}>login with facebook</Register>)}
        />;
  } else if(petInfo.name == '') {
    cornerDiv = <Register>{userInfo.firstName}</Register>;
  } else {
    //console.log(JSON.stringify(userInfo));
    cornerDiv = <div><Register>{userInfo.firstName}</Register><Register>{petInfo.name}</Register></div>;
  }
  
  return (
    <div>
      {cornerDiv}
    </div>
  );
}

export default UserInfo;