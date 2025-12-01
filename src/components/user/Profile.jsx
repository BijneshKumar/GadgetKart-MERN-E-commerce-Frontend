import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import ShowOrderProduct from './ShowOrderProduct'

const Profile = () => {
  const { user, userOrder } = useContext(AppContext)
  const [latestOrder, setLatestOrder] = useState({})
  useEffect(() => {

    if (userOrder) {
      setLatestOrder(userOrder)
    }

  }, [userOrder])

  console.log(userOrder)

  return (
    <>
      <div className="container text-center my-5">
        <h1>Welcome , {user?.name}</h1>
        <h3>Manage your account at {user?.email}</h3>

      </div>

      <div className="container text-center my-5">
        <h2 className='text-warning'>Your Recent Orders</h2>
      </div>

      {userOrder?.length > 0 ? (
        userOrder?.map((order) =>
          <div key={order._id}>
             <table className="table table-bordered border-primary text-center tble container">
                <thead>
                    <tr>
                        <th scope="col" className='bg-dark text-light'>Product Img</th>
                        <th scope="col" className='bg-dark text-light'>Title</th>
                        <th scope="col" className='bg-dark text-light'>Price</th>
                        <th scope="col" className='bg-dark text-light'>Qty</th>
                      
                    </tr>
                </thead>
            <tbody>
            {
              order?.orderItems?.map((product)=>(
                // <div key={product._id}>{product?.title}</div>
              <tr key={product._id} className='tableR'>
                                <th scope="row" className='bg-dark text-light'>
                                    <img src={product.imgSrc} style={{ width: '50px', height: '50px' }} />
                                </th>
                                <td className='bg-dark text-light'>{product.title}</td>
                                <td className='bg-dark text-light'>{product.price}</td>
                                <td className='bg-dark text-light'>{product.qty}</td>                               
                            </tr>

              )
              )
            }
            </tbody>
            </table>
          </div>
        )) : (
        <h2 className='text-center'>No orders found</h2>
      )}


    </>
  )
}

export default Profile