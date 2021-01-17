import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const contact = (props) => {
  return (
    <section>
        <h1>Contact Me! </h1>
        <form id="contact-form">
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" />
        </div>
        <div>
            <label htmlFor="email">Email address: </label>
            <input type="email" name="email" />
        </div>
        <div>
            <label htmlFor="message">Message: </label>
            <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
        </form>
    </section>
    );
}

// function contact () {
//     return (
//         <div>
//             <h1>Contact Me!</h1>
//             <p>Feel free to contact me for work opportunities 
//                 <br />
//                 I'll be happy to talk with you!
//             </p>
//             T:<tel> 302.377.9347 </tel>
//             E: <a href="mailto:lucianne12@aol.com">lucianne12@aol.com</a>
//             <br/>
//             <a href="https://github.com/Lucianne302" >GitHub</a>
//             <a href="https://www.linkedin.com/in/lucianne-vazquez-mba-76421679">LinkedIn Profile</a>
//         </div>
//     )
// }

export default contact;