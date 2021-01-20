import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
const Example = (props) => {
  return (
    <div>
      <p>Lucianne Vazquez</p>
      <Nav>
        <NavItem>
          <NavLink to="/About">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/Contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/Portfolio">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/Resume">Resume</NavLink>
        </NavItem>
      </Nav>
      <hr />
      {/* <p>Link Based</p>
      <Nav>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav> */}
    </div>
  );
}

//import React from 'react';
// import { capitalizeFirstLetter } from '../utils/helpers';

// function Nav(props) {
//   const {
//     categories = [],
//     setCurrentCategory,
//     contactSelected,
//     currentCategory,
//     setContactSelected,
//   } = props;

//   return (
//     <header className="flex-row px-1">
//       <h2>
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="camera"> </span> Lucianne
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
//               About me
//             </a>
//           </li>
//           <li className={`mx-2 ${contactSelected && 'navActive'}`}>
//             <span onClick={() => setContactSelected(true)}>Contact</span>
//           </li>
//           {categories.map((category) => (
//             <li
//               className={`mx-1 ${
//                 currentCategory.name === category.name && !contactSelected && 'navActive'
//                 }`}
//               key={category.name}
//             >
//               <span
//                 onClick={() => {
//                   setCurrentCategory(category);
//                   setContactSelected(false);
//                 }}
//               >
//                 {capitalizeFirstLetter(category.name)}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;



export default Example;