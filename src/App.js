import { Container, Button } from 'react-bootstrap';
import React, { useEffect, useReducer, useState } from 'react'
import ProductsContainer from './components/ProductsContainer'
import Header from './Header'
import Checkout from './Checkout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartOffCanvas from './components/CartOffCanvas'

const initialProductsState = {
  loading: true,
  error: '',
  products: [
    { id: "<id>", brand: "<brand>", title: "<title>", stock: 0, quantityInCart: 0 }
  ],
  totalCartQuantity: 0
}

const App = () => {
  const [stateCart, dispatchCart] = useReducer(reducerCart, [])
  const [stateProducts, dispatchProducts] = useReducer(reducerProducts, initialProductsState);


  useEffect(() => {
    // fetching products
    // console.log("Running use effect");
    const getProducts = async () => {
      try {
        const res = await fetch('/api/products')
        // console.log(res);
        const data = await res.json();
        dispatchProducts({ type: "FetchSuccess", payload: data })
        // console.log(data);
      } catch (error) {
        dispatchProducts({ type: "FetchFailure", payload: "Error retreiving products data" })
        // console.log(error)
      }
    }
    // fetching cart 
    const getCart = async () => {
      try {
        const res = await fetch('/api/carts', {
          method: "GET"
        })
        const data = await res.json()
        console.log(data);
        // run dispatch to add the products to cart
        data.cartItems.forEach(prod => dispatchCart({ type: "AddToCart", payload: prod }))

      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
    getCart();
  }, [])

  return (
    <Router>
      <Header cart={stateCart} />
      <Routes>
        <Route exact path="/" element={
          <Container fluid className="mx-auto">
            {!stateProducts.loading ? stateProducts.error ? stateProducts.error : <ProductsContainer products={stateProducts.products} dispatch={dispatchCart} cart={stateCart} /> : "..loading"}
          </Container>
        } />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/about" component={About} /> */}
      </Routes>
    </Router>
  )
}

export default App

function reducerCart(state, action) {
  // store cart in server session
  switch (action.type) {
    case "AddToCart":
      return ([
        ...state,
        action.payload
      ])
    case "RemoveFromCart":
      return state.filter(p => { return p.id !== action.payload })
    case "RemoveOneFromCart":
      let first = 1
      return state.filter(p => {
        if (p.id === action.payload && first === 1) {
          first = 0
          return false
        }
        else return true
      })
    default:
      throw new Error();
  }
}

function reducerProducts(state, action) {
  switch (action.type) {
    case "FetchSuccess":
      return {
        loading: false,
        error: '',
        products: action.payload.map(p => ({ ...p, quantityInCart: 0 })),
        totalCartQuantity: 0
      }
    case "FetchFailure":
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      throw new Error();
  }
};