import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cart, decreaseQty, addToCart, removeFromCart, clearCart } = useContext(AppContext)
  const [qty, setQty] = useState(0)
  const [price, setPrice] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    let qty = 0
    let price = 0
    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty
        price += cart.items[i].price
      }
    }

    setPrice(price)
    setQty(qty)
  }, [cart])


  return (
    <>
      {
        cart?.items?.length === 0 ? (
          <div className="container text-center my-5 fw-bold">
              <h2 className='mt-5 fs-bold'>Hey, it feels so light!</h2>
              <h4 className='mt-2 fs-bold'>There is nothing in your bag. Let's add some items.</h4>
            <Link to={'/'} className='btn btn-warning fw-bold px-5 my-5'>Start Shopping</Link>
          </div>
        ) : (
          <div className='my-5 text-center'>
            <button className="btn btn-info mx-3 fw-bold">Total Qty: {qty}</button>
            <button className="btn btn-warning mx-3 fw-bold">Total Price: {price}</button>
          </div>
        )
      }

      {
        cart?.items?.map((product) => (
          <div key={product._id} className='container p-3 bg-dark my-5 text-center'>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <div className="cart_img">
                <img src={product.imgSrc} alt="" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
              </div>
              <div className="cart_des">
                <h1>{product.title}</h1>
                <h4>{product.price}</h4>
                <h4>Qty : {product.qty}</h4>
              </div>
              <div className="cart_action">
                <button onClick={() => decreaseQty(product.productId, 1)} className="btn btn-warning mx-3 fw-bold">Qty--</button>
                <button onClick={() => addToCart(product?.productId, product.title, product.price / product.qty, 1, product.imgSrc)} className="btn btn-info mx-3 fw-bold">Qty++</button>
                <button onClick={() => {
                  if (confirm('Are you sure, want remove from cart')) {
                    removeFromCart(product?.productId)
                  }
                }} className="btn btn-danger mx-3 fw-bold">Remove</button>
              </div>
            </div>
          </div>
        ))
      }

      {
        cart?.items?.length > 0 && (
          <div className="container text-center my-3">
            <button onClick={() => navigate('/shipping')} className="btn btn-warning mx-3 fw-bold">checkout</button>
            <button onClick={() => {
              if (confirm('Are you sure, want to clear cart')) {
                clearCart()
              }
            }} className="btn btn-danger mx-3 fw-bold">clear cart</button>
          </div>
        )
      }

    </>
  )
}

export default Cart