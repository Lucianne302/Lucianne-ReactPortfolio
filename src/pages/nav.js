import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <p>Lucianne Vazquez</p>
      <Nav>
        <NavItem>
          <NavLink href="/About">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Portfolio">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Resume">Resume</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <p>Link Based</p>
      <Nav>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>
    </div>
  );
}

export default Example;