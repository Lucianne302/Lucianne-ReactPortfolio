import React from 'react';
import { List } from 'reactstrap';

const resume = (props) => {
  return (
    <List type="unstyled">
        <h1>My Resume</h1>
        <a href='/Resume.pdf' download>Click to download</a>
        <br></br>
        <h4>Programming Languages (beginner)</h4>
        <li> 
        <ul>
        <li>JavaScript, jQuery, moments.js, express.js, node.js, REACT</li>
        <li>SQL and No SQL</li>
          <li>Git Bash, Git Hub, Git Lab</li>
          <li>HTML, CSS and Bootstrap</li>

        </ul>
      </li>
      <br></br>
      <h4>Other Applications</h4>
        <li>SharePoint and SharePoint Developer</li>
        <br></br>
      <li>Microsoft Office Suite: Outlook, Excel, Word, Power Point, Access, Publisher, Visio, and Project</li>
      <li>SAP, SAP BI, SAP CRM</li>
      <li>Workday</li>
      <li>People Soft</li>
    </List>
  );
}

// function resume () {
//     return (
//         <h1>My Resume</h1>
//     )
// }

export default resume;