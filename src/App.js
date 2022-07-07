import { Container } from 'react-bootstrap';
import React, { useEffect, useReducer } from 'react'
import ProductsContainer from './components/ProductsContainer'
import Header from './Header'
import Checkout from './Checkout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const initialProductsState = {
  loading: true,
  error: '',
  products: [
    { id: "<id>", brand: "<brand>", title: "<title>", stock: 0, quantityInCart: 0 }
  ],
  totalCartQuantity: 0
}

const App = () => {
  const [stateCart, dispatchCart] = useReducer(cartReducer, [])
  const [stateProducts, dispatchProducts] = useReducer(reducer, initialProductsState);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/products')
        const data = await res.json();
        dispatchProducts({ type: "FetchSuccess", payload: data })
        console.log(data);
      } catch (error) {
        dispatchProducts({ type: "FetchFailure", payload: "Error retreiving products data" })
        console.log(error)
      }
    })()
  }, [])

  return (
    <Router>
      <Header totalCartQuantity={stateCart} />
      <Routes>
        <Route exact path="/" element={<Container>
          {!stateProducts.loading ? stateProducts.error ? stateProducts.error : <ProductsContainer products={stateProducts.products} dispatch={dispatchProducts} dispatchCart={dispatchCart} /> : "..loading"}
        </Container>} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/about" component={About} /> */}
      </Routes>
    </Router>
  )
}

export default App

function cartReducer(state, action) {
  switch (action.type) {
    case "AddToCart":
      return ([
        ...state,
        action.payload
      ])

    default:
      throw new Error();
  }
}

function reducer(stateProducts, action) {
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
        ...stateProducts,
        loading: false,
        error: action.payload,
      }
    case "AddToCart":
      return {
        ...stateProducts,
        products: stateProducts.products.map(p => p.id == action.payload.prodId ? { ...p, stock: p.stock - 1, quantityInCart: p.quantityInCart + 1 } : p),
        totalCartQuantity: stateProducts.totalCartQuantity + 1
      }
    case "RemoveFromCart":
      return {
        ...stateProducts,
        products: stateProducts.products.map(p => p.id == action.payload.prodId ? { ...p, stock: p.stock + 1, quantityInCart: p.quantityInCart - 1 } : p),
        totalCartQuantity: stateProducts.totalCartQuantity - 1
      }
    default:
      throw new Error();
  }
};