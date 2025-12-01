import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import { Link,useParams } from 'react-router-dom'


const SearchProduct = () => {
   const {products,addToCart} = useContext(AppContext)
   const [searchProduct, setSearchProduct] = useState([])
   const {term} = useParams()

   useEffect(() => {
     setSearchProduct(products.filter((data)=> data.title?.includes(term)))
   }, [term,products] )
   
    
  return (
    <>
    <div className="container text-center">
         <div className="container d-flex justify-content-center align-items-center">
      <div className='row container my-5 d-flex justify-content-center align-items-center'>
       {
        searchProduct.length > 0 ? ( 
          searchProduct?.map((product) => (
            <div className=' my-3 col-md-4 d-flex justify-content-center align-items-center' key={product._id}>
              <div className="card bg-dark text-light text-center" style={{ width: '18rem'}}>
                <Link to={`/product/${product._id}`}  className='d-flex justify-content-center align-items-center p-3'>
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
        )  : (
          <h1>Oops! No products found for your search 🔍</h1>
        )
       }
      </div>

    </div>
    </div>
     

    </>
  )
}




export default SearchProduct



// import axios from 'axios'
// import React, { useContext, useEffect, useState } from 'react'
// import AppContext from '../../context/AppContext'
// import { Link,useParams } from 'react-router-dom'


// const SearchProduct = () => {
//    const {products} = useContext(AppContext)
//    const [searchProduct, setSearchProduct] = useState([])
//    const {term} = useParams()

//    useEffect(() => {
//      setSearchProduct(products.filter((data)=> data.title?.toLowerCase().includes(term)))
//    }, [term,products] )
   
    
//   return (
//     <>
//     <div className="container my-5">
//   <div className="row justify-content-center g-3">
//     {searchProduct.map((product) => (
//       <div className="col-md-4 my-3" key={product._id}>
//         <div className="card mx-auto h-100 text-bg-dark text-center">
//           <img src={product.imgSrc} className="card-img-top mx-auto d-block"
//                style={{width:"200px",height:"200px",borderRadius:"10px",border:"2px solid yellow"}} />
//           <div className="card-body">
//             <h5 className="card-title">{product.title}</h5>
//             <p className="card-text">{product.description}</p>
//             <div className="d-flex justify-content-center gap-2">
//               <span className="btn btn-primary">{product.price.toLocaleString("en")} INR</span>
//               <button className="btn btn-warning">Add To Cart</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>


//     </>
//   )
// }

// export default SearchProduct