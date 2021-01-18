import React from 'react';
import { Link } from 'react-router-dom';
//import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Table } from 'reactstrap';

const portfolio = (props) => {
  return (
    <Table hover>
    <thead>
      <tr>
        <th>Image</th>
        <th>Project name</th>
        <th>Project Description</th>
        <th>GitHub Page</th>
        <th>GitHub Repository</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Fan Page</td>
        <td>My first HTTP Page</td>
        <td><Link>https://lucianne302.github.io/FanPage/index.html</Link></td>
        <td>git@github.com:Lucianne302/FanPage.git</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>PetPurrfect</td>
        <td>My first Team Project</td>
        <td><Link>https://lucianne302.github.io/cats/</Link></td>
        <td>git@github.com:Lucianne302/cats.git</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Social Network API</td>
        <td>Created a API</td>
        <td><Link>https://lucianne302.github.io/socialNetworkAPI/</Link></td>
        <td>git@github.com:Lucianne302/socialNetworkAPI.git</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Simply-ReUse</td>
        <td>Second Team Project</td>
        <td><Link>https://simplyreuse3.herokuapp.com/</Link></td>
        <td>git@github.com:Lucianne302/Simply-ReUse.git</td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>Lucianne Portfolio</td>
        <td>My First HTTP Portfolio Page</td>
        <td><Link>https://lucianne302.github.io/Lucianne-Portfolio/</Link></td>
        <td>git@github.com:Lucianne302/Lucianne-Portfolio.git</td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Team Profile Generator</td>
        <td>Project</td>
        <td><Link>https://lucianne302.github.io/Team-Profile-Generator/</Link></td>
        <td>git@github.com:Lucianne302/Team-Profile-Generator.git</td>
      </tr>
    </tbody>
  </Table>
);
}
//     <div>
//       <p>
//         View my class projects!
//       </p>
//       <div className="p-3 my-2 rounded">
//         <Toast>
//           <ToastHeader>
//             My first HTTP Page - Fan Page
//           </ToastHeader>
//           <ToastBody>
//             <p>GutHub page: <Link>https://lucianne302.github.io/FanPage/index.html"</Link></p>
//             <p>Git Hub Repo: git@github.com:Lucianne302/FanPage.git</p>
//           </ToastBody>
//         </Toast>
//       </div>
//       <div className="p-3 my-2 rounded bg-docs-transparent-grid">
//         <Toast>
//           <ToastHeader>
//             Reactstrap
//           </ToastHeader>
//           <ToastBody>
//             This is a toast on a gridded background — check it out!
//           </ToastBody>
//         </Toast>
//       </div>
//       <div className="p-3 bg-primary my-2 rounded">
//         <Toast>
//           <ToastHeader>
//             Reactstrap
//           </ToastHeader>
//           <ToastBody>
//             This is a toast on a primary background — check it out!
//           </ToastBody>
//         </Toast>
//       </div>
//       <div className="p-3 bg-secondary my-2 rounded">
//         <Toast>
//           <ToastHeader>
//             Reactstrap
//           </ToastHeader>
//           <ToastBody>
//             This is a toast on a secondary background — check it out!
//           </ToastBody>
//         </Toast>
//       </div>
//       <div className="p-3 bg-success my-2 rounded">
//         <Toast>
//           <ToastHeader>
//             Reactstrap
//           </ToastHeader>
//           <ToastBody>
//             This is a toast on a success background — check it out!
//           </ToastBody>
//         </Toast>
//       </div>
//       <div className="p-3 bg-danger my-2 rounded">
//         <Toast>
//           <ToastHeader>
//             Reactstrap
//           </ToastHeader>
//           <ToastBody>
//             This is a toast on a danger background — check it out!
//           </ToastBody>
//         </Toast>
//       </div>
//       <div className="p-3 bg-warning my-2 rounded">
//         <Toast>
//           <ToastHeader>
//             Reactstrap
//           </ToastHeader>
//           <ToastBody>
//             This is a toast on a warning background — check it out!
//           </ToastBody>
//         </Toast>
//       </div>
//       <div className="p-3 bg-info my-2 rounded">
//         <Toast>
//           <ToastHeader>
//             Reactstrap
//           </ToastHeader>
//           <ToastBody>
//             This is a toast on an info background — check it out!
//           </ToastBody>
//         </Toast>
//       </div>
//       <div className="p-3 bg-dark my-2 rounded">
//         <Toast>
//           <ToastHeader>
//             Reactstrap
//           </ToastHeader>
//           <ToastBody>
//             This is a toast on a dark background — check it out!
//           </ToastBody>
//         </Toast>
//       </div>
//       <div className="p-3 my-2 rounded" style={{ background: 'black' }}>
//         <Toast>
//           <ToastHeader>
//             Reactstrap
//           </ToastHeader>
//           <ToastBody>
//             This is a toast on a black background — check it out!
//           </ToastBody>
//         </Toast>
//       </div>
//     </div>
//   );
// };

// function contact () {
//     return (
//         <h1>test Portfolio</h1>
//     )
// }

export default portfolio;