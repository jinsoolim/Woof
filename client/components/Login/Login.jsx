import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../StateProvider';
// import FacebookLogin from "./FacebookLogin.jsx";


const Login = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <div>
      {/* <FacebookLogin /> */}
    </div>
  );
}

export default Login;