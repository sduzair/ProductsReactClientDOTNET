import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { addToRemoteCart, removeOneFromRemoteCart } from '../util/serverCart'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import './ProductCard.css'


const ProductCard = ({ p, dispatch, cart }) => {
  return (
    <Col className='col-11 col-lg-5 shadow bg-body rounded bg-white m-2'>
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
            addToRemoteCart(p)
          }}><AiOutlineArrowUp /></button>
          <button className="btn-sm btn-outline-danger" onClick={() => {
            dispatch({ type: "RemoveOneFromCart", payload: p.id })
            removeOneFromRemoteCart(p)
          }}><AiOutlineArrowDown /></button>
        </Col>
      </Row>
    </Col>
    // <div>
    //   <div classname="container mt-5 mb-5">
    //     <div classname="d-flex justify-content-center row">
    //       <div classname="col-md-10">
    //         <div classname="row p-2 bg-white border rounded">
    //           <div classname="col-md-3 mt-1"><img classname="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/QpjAiHq.jpg" /></div>
    //           <div classname="col-md-6 mt-1">
    //             <h5>Quant olap shirts</h5>
    //             <div classname="d-flex flex-row">
    //               <div classname="ratings mr-2"><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star" /></i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star"><span>310</span>
    //               </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                 <div classname="mt-1 mb-1 spec-1"><span>100% cotton</span><span classname="dot"><span>Light weight</span><span classname="dot"><span>Best finish<br /></span></span></span></div>
    //                 <div classname="mt-1 mb-1 spec-1"><span>Unique design</span><span classname="dot"><span>For men</span><span classname="dot"><span>Casual<br /></span></span></span></div>
    //                 <p classname="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br /><br /></p>
    //               </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                 <div classname="align-items-center align-content-center col-md-3 border-left mt-1">
    //                   <div classname="d-flex flex-row align-items-center">
    //                     <h4 classname="mr-1">$13.99</h4><span classname="strike-text">$20.99</span>
    //                   </div>
    //                   <h6 classname="text-success">Free shipping</h6>
    //                   <div classname="d-flex flex-column mt-4"><button classname="btn btn-primary btn-sm" type="button">Details</button><button classname="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
    //                 </div>
    //               </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                 <div classname="row p-2 bg-white border rounded mt-2">
    //                   <div classname="col-md-3 mt-1"><img classname="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/JvPeqEF.jpg" /></div>
    //                   <div classname="col-md-6 mt-1">
    //                     <h5>Quant trident shirts</h5>
    //                     <div classname="d-flex flex-row">
    //                       <div classname="ratings mr-2"><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star" /></i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star"><span>310</span>
    //                       </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                         <div classname="mt-1 mb-1 spec-1"><span>100% cotton</span><span classname="dot"><span>Light weight</span><span classname="dot"><span>Best finish<br /></span></span></span></div>
    //                         <div classname="mt-1 mb-1 spec-1"><span>Unique design</span><span classname="dot"><span>For men</span><span classname="dot"><span>Casual<br /></span></span></span></div>
    //                         <p classname="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br /><br /></p>
    //                       </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                         <div classname="align-items-center align-content-center col-md-3 border-left mt-1">
    //                           <div classname="d-flex flex-row align-items-center">
    //                             <h4 classname="mr-1">$14.99</h4><span classname="strike-text">$20.99</span>
    //                           </div>
    //                           <h6 classname="text-success">Free shipping</h6>
    //                           <div classname="d-flex flex-column mt-4"><button classname="btn btn-primary btn-sm" type="button">Details</button><button classname="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
    //                         </div>
    //                       </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                         <div classname="row p-2 bg-white border rounded mt-2">
    //                           <div classname="col-md-3 mt-1"><img classname="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/Bf4dIaN.jpg" /></div>
    //                           <div classname="col-md-6 mt-1">
    //                             <h5>Quant ruybi shirts</h5>
    //                             <div classname="d-flex flex-row">
    //                               <div classname="ratings mr-2"><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star" /></i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star"><span>123</span>
    //                               </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                                 <div classname="mt-1 mb-1 spec-1"><span>100% cotton</span><span classname="dot"><span>Light weight</span><span classname="dot"><span>Best finish<br /></span></span></span></div>
    //                                 <div classname="mt-1 mb-1 spec-1"><span>Unique design</span><span classname="dot"><span>For men</span><span classname="dot"><span>Casual<br /></span></span></span></div>
    //                                 <p classname="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br /><br /></p>
    //                               </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                                 <div classname="align-items-center align-content-center col-md-3 border-left mt-1">
    //                                   <div classname="d-flex flex-row align-items-center">
    //                                     <h4 classname="mr-1">$13.99</h4><span classname="strike-text">$20.99</span>
    //                                   </div>
    //                                   <h6 classname="text-success">Free shipping</h6>
    //                                   <div classname="d-flex flex-column mt-4"><button classname="btn btn-primary btn-sm" type="button">Details</button><button classname="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
    //                                 </div>
    //                               </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                                 <div classname="row p-2 bg-white border rounded mt-2">
    //                                   <div classname="col-md-3 mt-1"><img classname="img-fluid img-responsive rounded product-image" src="https://i.imgur.com/HO8e9b8.jpg" /></div>
    //                                   <div classname="col-md-6 mt-1">
    //                                     <h5>Quant tinor shirts</h5>
    //                                     <div classname="d-flex flex-row">
    //                                       <div classname="ratings mr-2"><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star" /></i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star"><span>110</span>
    //                                       </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                                         <div classname="mt-1 mb-1 spec-1"><span>100% cotton</span><span classname="dot"><span>Light weight</span><span classname="dot"><span>Best finish<br /></span></span></span></div>
    //                                         <div classname="mt-1 mb-1 spec-1"><span>Unique design</span><span classname="dot"><span>For men</span><span classname="dot"><span>Casual<br /></span></span></span></div>
    //                                         <p classname="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br /><br /></p>
    //                                       </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                                         <div classname="align-items-center align-content-center col-md-3 border-left mt-1">
    //                                           <div classname="d-flex flex-row align-items-center">
    //                                             <h4 classname="mr-1">$15.99</h4><span classname="strike-text">$21.99</span>
    //                                           </div>
    //                                           <h6 classname="text-success">Free shipping</h6>
    //                                           <div classname="d-flex flex-column mt-4"><button classname="btn btn-primary btn-sm" type="button">Details</button><button classname="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
    //                                         </div>
    //                                       </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                                       </i></i></i></i></i></i></i></i></i></i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                                       </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                                       </i></i></i></div><i classname="fa fa-star"><i classname="fa fa-star"><i classname="fa fa-star">
    //                                       </i></i></i></div>

  )
}

export default ProductCard