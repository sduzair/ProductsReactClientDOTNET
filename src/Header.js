import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar } from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'
import CartOffCanvas from './components/CartOffCanvas'

const Header = ({ cart = [] }) => {
  const [showCart, setShowCart] = useState(false);
  const handleClose = () => setShowCart(false);
  const toggleShow = () => setShowCart((s) => !s);
  const justifySelfRight = {
    marginLeft: "auto",
  };
  return (
    <>
      <Navbar bg="white" variant="dark" className="justify-content-evenly px-4 mb-5 align-items-end">
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
          <Nav.Link className="d-flex align-content-center align-items-center"><div onClick={toggleShow}>Cart <BsCart /> ({cart.length})</div>
          </Nav.Link>
      </div>
    </Navbar>

      <div>
        <CartOffCanvas cart={cart} show={showCart} handleClose={handleClose}></CartOffCanvas>
      </div>
    </>
  )
}

export default Header