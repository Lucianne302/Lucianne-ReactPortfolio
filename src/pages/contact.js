//import React, { useState } from 'react';
// import { validateEmail } from '../utils/helpers';

// function contact() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       setFormState({ [e.target.name]: e.target.value });
//       console.log('Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//   };

//   return (
//     <section>
//       <h1 data-testid="h1tag">Contact me</h1>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="email">Email address:</label>
//           <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <button data-testid="button" type="submit">Submit</button>
//       </form>
//     </section>
//   );
// }


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
//             T:<tel> 302. </tel>
//             E: <a href="mailto:lucianne12@aol.com">lucianne12@aol.com</a>
//             <br/>
//             <a href="https://github.com/Lucianne302" >GitHub</a>
//             <a href="https://www.linkedin.com/in/lucianne-vazquez-mba-76421679">LinkedIn Profile</a>
//         </div>
//     )
// }

export default contact;