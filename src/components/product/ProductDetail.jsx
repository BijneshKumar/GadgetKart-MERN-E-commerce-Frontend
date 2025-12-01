import axios from 'axios'
import React, { Profiler, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RelatedProduct from './RelatedProduct'
import AppContext from '../../context/AppContext'

const ProductDetail = () => {
      const {addToCart } = useContext(AppContext)

    const { id } = useParams()
    const url = 'https://gadgetkart-mern-e-commerce-api.onrender.com/api'
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const api = await axios(`${url}/product/${id}`, {
                headers: {
                    "Content-Type": "Application/json"
                },
                withCredentials: true,
            })
            setProduct(api.data.product)
            // console.log(api.data.product)
        }

        fetchProduct()
    }, [id])


    return (
     <>
        <div className="container text-center my-5" style={{
            display: 'flex',
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <div className="leftp">
                <img src={product?.imgSrc} alt="" style={{ width: '250px', height: '250px', borderRadius: '10px', border: "2px solid yellow" }} />
            </div>
            <div className="rightp">
                <h1>{product?.title}</h1>
                <p>{product?.description}</p>
                <h1>{product.price ? product.price.toLocaleString('en') : ''} INR</h1>
                <div className='my-5'>
                    {/* <button className='btn btn-danger mx-3' style={{ fontWeight: 'bold' }}>Buy Now</button> */}
                    <button className='btn btn-warning' style={{ fontWeight: 'bold' }} onClick={() => addToCart(product._id, product.title, product.price, 1, product.imgSrc)}>Add to Cart</button>
                </div>
            </div>
        </div>
      <RelatedProduct category={product.category}/>
    </>
    )
}

export default ProductDetail