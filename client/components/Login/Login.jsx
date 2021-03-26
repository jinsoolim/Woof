import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../StateProvider';
import styledItems from '../../styled-items';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url('https://www.pets4homes.co.uk/images/articles/1634/large/how-to-encourage-your-dog-to-play-nicely-with-strange-dogs-536cb967d715c.jpg');
  background-repeat: no-repeat;
`;

const StyledText = styled.div`
  margin-top: 75px;
  width: 300px;
  color: ${styledItems.white};
  font-size: 2em;
  text-align: center;
`;

const Login = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <StyledDiv>
      <StyledText>
        Meet your pup's new best friend today....
      </StyledText>
    </StyledDiv>
  );
}

export default Login;
