import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../StateProvider';
import styledItems from '../../styled-items';
import UserInfo from './UserInfo/UserInfo.jsx';

const HeaderBG = styled.div`
  background-color: ${styledItems.primaryBlue};
  font-size: 2em;
  color: ${styledItems.darkGray};
  height: 130px;
  padding: 20px;
  font-weight: 100;
`;

const BlackText = styled.span`
  color: ${styledItems.black}; 
  font-weight: 800;
`

const Header = () => {
  return (
    <HeaderBG>
      Coffee<BlackText>&</BlackText>Woof
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
