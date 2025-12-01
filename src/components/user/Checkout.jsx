import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import TableProduct from './TableProduct'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const Checkout = () => {
  const { cart, userAddress, url, user,clearCart } = useContext(AppContext)
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

  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post(`${url}/payment/checkout`, {
        amount: price,
        qty:qty,
        cartItems: cart?.items,
        userShipping: userAddress,
        userId: user._id
      })

      // console.log('order response',orderResponse)
      const { orderId, amount: orderAmount } = orderResponse.data

      var options = {

        "key": "rzp_test_RLsfbKBMdOFftM", // Enter the Key ID generated from the Dashboard
        "amount": orderAmount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "bijnesh kumar",
        "description": "bijnesh kumar",
        "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

         "handler": async function (response){
          const paymentData = {
            orderId : response.razorpay_order_id,
            paymentId :response.razorpay_payment_id,
            signature:response.razorpay_signature,
            amount:orderAmount,
            orderItems:cart?.items,
            userId:user._id,
            userShipping:userAddress
          }

          const api = await axios.post(`${url}/payment/verify-payment`,paymentData)
          // console.log('razorpay response',api.data)

          if(api.data.success){
            clearCart()
            navigate('/orderconfirmation')

          }
    },
        // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "prefill": {
          "name": "Bijnesh kumar",
          "email": "bijneshkumar10@gmail.com",
          "contact": "7056086010"
        },
        "notes": {
          "address": "mahindergarh"
        },
        "theme": {
          "color": "#3399cc"
        }
      };
      const rzp = new window.Razorpay(options);
      rzp.open()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="container my-3">
        <h1 className='text-center'>Order Summary</h1>

        <table className="table table-bordered border-primary ">
          <thead>
            <tr>
              <th className='bg-dark text-light text-center'>Product Details</th>
              <th className='bg-dark text-light text-center'>Shipping Address</th>

            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='bg-dark text-light'>
                <TableProduct cart={cart} />
              </td>
              <td className='bg-dark text-light'>

                <ul className='fw-bold'>
                  <li>Name : {userAddress?.fullName}</li>
                  <li>Phone : {userAddress?.phoneNumber}</li>
                  <li>City : {userAddress?.city}</li>
                  <li>State : {userAddress?.state}</li>
                  <li>Pincode : {userAddress?.pincode}</li>
                  <li>Country : {userAddress?.country}</li>
                  <li>NearBy : {userAddress?.address}</li>
                </ul>
              </td>

            </tr>
          </tbody>
        </table>

      </div>
      <div className="container text-center my-5">
        <button onClick={handlePayment} className="btn btn-secondary btn-lg fw-bold">Proceed To Pay</button>
      </div>

    </>
  )
}

export default Checkout;