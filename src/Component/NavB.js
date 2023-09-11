import React from 'react'
import { Nav } from 'react-bootstrap'

const NavB = () => {
  return (
    <div>

<Nav className="bg-body-tertiary"
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Joueur</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default NavB