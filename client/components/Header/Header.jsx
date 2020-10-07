import React from "react";
import {Link} from "react-router-dom";
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../StateProvider';


const Header = () => {
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
    </div>
  );
}

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
export default Header;