import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import ShowOrderProduct from './ShowOrderProduct'

const OrderConfirmation = () => {
  const {userOrder} = useContext(AppContext)
  const [latestOrder, setLatestOrder] = useState({})
  useEffect(() => {
   
   if(userOrder){
    setLatestOrder(userOrder[0])
   }

  }, [userOrder])

  // console.log('latest order' , latestOrder)
  // console.log(userOrder)
  
  return (
    <>
      <div className="container my-4">
        <h1 className='text-center'>Your order has been confirm,</h1>
        <h3 className='text-center'>It will delivered soon</h3>
      </div>

       <div className="container">

        <table className="table table-bordered border-primary ">
          <thead>
            <tr>
              <th className='bg-dark text-light text-center'>Order Items</th>
              <th className='bg-dark text-light text-center'>Order Details & Shipping Address</th>

            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='bg-dark text-light'>
                <ShowOrderProduct items={latestOrder?.orderItems}/>
              </td>
              <td className='bg-dark text-light'>

                <ul className='fw-bold'>
                  <li>Order Id : {latestOrder?.orderId}</li>
                  <li>Payment Id : {latestOrder?.paymentId}</li>
                  <li>Payment Status : {latestOrder?.payStatus}</li>
                  <li>Name : {latestOrder?.userShipping?.fullName}</li>
                  <li>Phone : {latestOrder?.userShipping?.phoneNumber}</li>
                  <li>City : {latestOrder?.userShipping?.city}</li>
                  <li>State : {latestOrder?.userShipping?.state}</li>
                  <li>Pincode : {latestOrder?.userShipping?.pincode}</li>
                  <li>Country : {latestOrder?.userShipping?.country}</li>
                  <li>NearBy : {latestOrder?.userShipping?.address}</li>
                </ul>
              </td>

            </tr>
          </tbody>
        </table>

      </div>
     
    </>
  )
}

export default OrderConfirmation