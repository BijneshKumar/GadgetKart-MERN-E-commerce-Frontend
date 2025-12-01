import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Slideshow from '../user/Slideshow'
import ShopByCategory from '../user/ShopByCategory'
import Footer from '../user/Footer'



const ShowProduct = () => {
  const { products, filteredData, addToCart } = useContext(AppContext)
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (filteredData && filteredData.length > 0) {
      setLoading(false)
    }else{
      setLoading(true)
    }
  }, [filteredData])

  if (loading) {
    return (
      <div id="loader">
        <div className="spinner"></div>
      </div>
    )
  } 

  return (



  <>

    {
      location.pathname == '/' && (
        <Slideshow/>
      )
    }
     {location.pathname == '/' && (
            <ShopByCategory/>
        )}


    <div className="container d-flex justify-content-center align-items-center">
    
      <div className='row container my-5 d-flex justify-content-center align-items-center'>
        {
          filteredData?.map((product) => (
            <div className=' my-3 col-md-4 d-flex justify-content-center align-items-center' key={product._id}>
              <div className="card bg-dark text-light text-center" style={{ width: '18rem' }}>
                <Link to={`/product/${product._id}`} className='d-flex justify-content-center align-items-center p-3'>
                  <img src={product.imgSrc} className="card-img-top" alt="..." style={{ width: '200px', height: '200px', borderRadius: "10px", border: '2px solid yellow' }} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className='my-3'>
                    <button href="#" className="btn btn-primary mx-3">{product.price.toLocaleString('en')} INR</button>
                    <button href="#" className="btn btn-warning" onClick={() => addToCart(product._id, product.title, product.price, 1, product.imgSrc)}>Add To Cart</button>
                  </div>
                </div>
              </div>

            </div>
          ))
        }
      </div>

    </div>
    <Footer/>
  </>


  )
}

export default ShowProduct












