// import Col from 'node_modules/react-bootstrap/esm/Col'
import React, { useState } from 'react'
import { Col, Row, Pagination, Button } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'

const ProductsContainer = ({ products, dispatch, cart }) => {
  return (
    <>
      <Row className="row-cols-1 row-cols-lg-2 justify-content-center mb-5">
        {products.map((p, i) => (
          <ProductCard key={i} p={p} dispatch={dispatch} cart={cart} />
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
