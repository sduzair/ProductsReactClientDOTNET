// import Col from 'node_modules/react-bootstrap/esm/Col'
import React from 'react'
import { TbShoppingCartPlus } from 'react-icons/tb'
import { ImBin } from 'react-icons/im'
import { Col, Row } from 'react-bootstrap'

const ProductsContainer = ({ products, dispatch }) => {
  return (
    <Row className="justify-content-evenly">
      {products.map((p, i) => (
        <Col xs={10} lg={6} xl={4} className='border bg-light' key={i}>
          <div className='px-0 py-1'>Brand: {p.brand}</div>
          <div className='px-0 py-1'>Title: {p.title}</div>
          <div className='px-0 py-1'>Quantity: <p className='d-inline-block text-primary'>{p.stock}</p></div>
          <Row className="justify-content-end">
            <Col xs="auto" className="d-flex justify-content-center align-items-center fs-6 text-white bg-dark">
              {p.quantityInCart}
            </Col>
            <Col xs="auto" className="d-flex align-items-center px-0">
              <button className="btn-sm btn-outline-primary" onClick={() => dispatch({ type: "AddToCart", payload: { prodId: p.id } })}><TbShoppingCartPlus /></button>
              <button className="btn-sm btn-outline-danger" onClick={() => dispatch({ type: "RemoveFromCart", payload: { prodId: p.id } })}><ImBin /></button>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  )
}

export default ProductsContainer