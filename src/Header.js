import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar } from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'

const Header = ({ stateCart = [] }) => {
  const justifySelfRight = {
    marginLeft: "auto",
  };
  return (
    <Navbar bg="light" variant="dark" className="justify-content-evenly px-5 mb-5 align-items-end">
      <div>
        <LinkContainer to="/"><Nav.Link className="fs-5">Navbar</Nav.Link></LinkContainer>
      </div>
      <div>
        <LinkContainer to="/"><Nav.Link>Products</Nav.Link></LinkContainer>
      </div>
      <div>
        <LinkContainer to="/checkout"><Nav.Link>Checkout</Nav.Link></LinkContainer>
      </div>
      <div style={justifySelfRight}>
        <Nav.Link>Cart <BsCart />({stateCart.length})</Nav.Link>
      </div>
    </Navbar>
  )
}

export default Header