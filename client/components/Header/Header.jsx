import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../StateProvider';
import UserInfo from './UserInfo/UserInfo.jsx';


const Header = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <div>
      {/* <Button
      onClick={() => dispatch({
      type: 'clickLogin',
      userName: textBox.value
        })}>
      Login!
      </Button> */}
      <UserInfo />
    </div>
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
