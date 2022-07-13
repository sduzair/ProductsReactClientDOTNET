import React from 'react'
import { Offcanvas } from "react-bootstrap";

const options = {
  name: 'Enable body scrolling',
  scroll: true,
  backdrop: false,
  placement: 'end'
}

function OffCanvas({ cart, show, handleClose }) {
  return (
    <>
      <Offcanvas className="h-auto mt-5 border border-dark border-3 rounded" show={show} onHide={handleClose} {...options}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((p, i) => <div key={i}>{p.title}</div>)}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas