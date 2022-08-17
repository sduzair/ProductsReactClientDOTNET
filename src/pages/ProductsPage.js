// import Col from 'node_modules/react-bootstrap/esm/Col'
import React, { useState } from 'react'
import { Col, Row, Pagination, Button } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'

const ProductsContainer = ({ products, dispatch, cart, dispatchProductsURI }) => {
  return (
    <>
      <Row className="row-cols-1 row-cols-lg-2 mb-5">
        {products.map((p, i) => (
          <ProductCard key={i} p={p} dispatch={dispatch} cart={cart} />
        ))}
      </Row>
      <Row>
        <Pagination className="justify-content-center">
          <Pagination.First onClick={() => dispatchProductsURI({ type: 'ResetURISkip' })} />
          <Pagination.Prev onClick={() => dispatchProductsURI({ type: 'PrevURISkip' })} />
          <Pagination.Next onClick={() => dispatchProductsURI({ type: 'NextURISkip' })} />
          {/* <Pagination.Last /> */}
        </Pagination>
      </Row>
    </>
  )
}

export default ProductsContainer
