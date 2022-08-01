import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import sections from '../data/sections.json'
import {Link} from 'react-router-dom'
import "./appNav.css"

function AppNav(props) {
  // importing nav data information; keeping separating from app
  const [navItems, setNavItems] = useState(sections)

  return (
    <Navbar>
      <Nav>
        <Nav.Link href='/'>Home</Nav.Link>
        {
          navItems.map((navItem, index) => {
            return (
              <Nav.Link key={index} href={`/#/sections${navItems.value}`} onClick={() => console.log(navItem.value)}>
                  { navItem.label }
              </Nav.Link>
            )
          })
        }
      </Nav>
    </Navbar>
  )
}

export default AppNav;

