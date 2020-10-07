import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../StateProvider';
import styledItems from '../../styled-items';
import UserInfo from './UserInfo/UserInfo.jsx';


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
const HeaderBG = styled.div`
  background-color: ${styledItems.primaryBlue};
`;

const Header = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <HeaderBG>
      Coffee&Woof
      {/* <Button
      onClick={() => dispatch({
      type: 'clickLogin',
      userName: textBox.value
        })}>
      Login!
      </Button> */}
      <UserInfo />
    </HeaderBG>
  );
}

export default Header;

// OLD CODE: 
// const Header = (props) => {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             {/* <Link to='bucket-list'>Bucket List</Link> */}
//           </li>
//           <li>
//             {/* <Link to='feed'>Feed</Link> */}
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };
