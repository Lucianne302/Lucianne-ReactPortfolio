import React from 'react';
import coverImage from "../assets/lucianne.png";

function about() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me! </h1>
      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <p>
        As a student at the University of Pennsylvania, I am learning to code. Previous to learning to code, I completed a bachelor’s in Human Resource Management, and a Master’s in Business Administration from Goldey Beacom College.  For professional development, I completed certificates in Project Management and Business Analysis from the University of Delaware.  And, a Legal Studies Certificate from Wilmington University was completed in October 2016. And, I have about 13 years of experience working in the field of Human Resources.
      </p>
      </div>
    </section>
  )
}


// import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
  
//   const about = (props) => {
//     return (
//       <div>
//         <Card>
//           <CardImg top width="100%" src="/src/assets/0.jpg" alt="Card image cap" />
//           <CardBody>
//             <CardTitle tag="h5">Lucianne Vazquez</CardTitle>
//             <CardSubtitle tag="h6" className="mb-2 text-muted">Student</CardSubtitle>
//             <CardText>As a student at the University of Pennsylvania, I am learning to code. Previous to learning to code, I completed a bachelor’s in Human Resource Management, and a Master’s in Business Administration from Goldey Beacom College.  For professional development, I completed certificates in Project Management and Business Analysis from the University of Delaware.  And, a Legal Studies Certificate from Wilmington University was completed in October 2016. And, I have about 13 years of experience working in the field of Human Resources. 
//             </CardText>
//             <Button>Button</Button>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   };

// function about () {
//     return (
//         <h1>About Me!</h1>
//     )
// }

export default about;