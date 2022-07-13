// import Col from 'node_modules/react-bootstrap/esm/Col'
import React, { useState } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { Col, Row, Pagination, Button } from 'react-bootstrap'

const ProductsContainer = ({ products, dispatch, cart }) => {
  return (
    <>
      <Row className="row-cols-1 row-cols-lg-2 justify-content-center mb-5">
        {products.map((p, i) => (
          <Col className='col-11 col-lg-5 shadow bg-body rounded bg-white m-2' key={i}>
            <div className='px-0 py-1'>Brand: {p.brand}</div>
            <div className='px-0 py-1'>Title: {p.title}</div>
            <div className='px-0 py-1'>Quantity: <p className='d-inline-block text-primary'>{p.stock}</p></div>
            <Row className="justify-content-end">
              <Col xs="auto" className="d-flex justify-content-center align-items-center fs-6 text-white bg-dark">
                {cart.filter(cp => cp.id === p.id).length}
              </Col>
              <Col xs="auto" className="d-flex align-items-center px-0">
                <button className="btn-sm btn-outline-primary" onClick={() => {
                  dispatch({ type: "AddToCart", payload: p })
                  updateCart(p)
                }}><AiOutlineArrowUp /></button>
                <button className="btn-sm btn-outline-danger" onClick={() => dispatch({ type: "RemoveOneFromCart", payload: p.id })}><AiOutlineArrowDown /></button>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <Row>
        <Pagination className="justify-content-center">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item >{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Row>
    </>
  )
}

export default ProductsContainer

async function updateCart(p) {
  const { stock, ...postProd } = p
  const res = await fetch('api/carts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postProd)
  })
  // console.log(res);
  // console.log(postProd);
}