import React, { useContext, useState } from 'react'
import { FaMobile, FaLaptop, FaTablet, FaThLarge, FaRupeeSign,FaCamera,FaHeadphones } from 'react-icons/fa'
import AppContext from '../../context/AppContext'



const ShopByCategory = () => {


    const { setFilteredData, products } = useContext(AppContext)

    const filterbycategory = (cat) => {
    setFilteredData(products.filter((data) => data.category.toLowerCase() == cat.toLowerCase()))
  }

  const filterbyprice = (price) => {
    setFilteredData(products.filter((data) => data.price >= price))
  }



  return (
    <>
      <div className="container bg-dark text-light my-4 p-4 rounded">
        <h3 className='text-center mb-3'>Filter Products</h3>
        <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center align-items-center sub_bar">
          
            <div onClick={() => setFilteredData(products)} className='d-flex align-items-center gap-3 px-3 py-2 rounded bg-secondary text-light fw-bold' style={{ cursor: "pointer" }}>All Products<span><FaThLarge/></span></div>
            <div onClick={() => filterbycategory('mobiles')} className='d-flex align-items-center gap-3 px-3 py-2 rounded bg-secondary text-light fw-bold' style={{ cursor: "pointer" }}>Mobiles<span><FaMobile/></span></div>
            <div onClick={() => filterbycategory('laptops')} className='d-flex align-items-center gap-3 px-3 py-2 rounded bg-secondary text-light fw-bold' style={{ cursor: "pointer" }}>Laptops<span><FaLaptop/></span></div>
            <div onClick={() => filterbycategory('cameras')} className='d-flex align-items-center gap-3 px-3 py-2 rounded bg-secondary text-light fw-bold' style={{ cursor: "pointer" }}>cameras<span><FaCamera/></span></div>
            <div onClick={() => filterbycategory('headphones')} className='d-flex align-items-center gap-3 px-3 py-2 rounded bg-secondary text-light fw-bold' style={{ cursor: "pointer" }}>Headphones<span><FaHeadphones/></span></div>
          
        </div>

        <div className="d-flex flex-wrap gap-3 justify-content-center sub_bar">
          
            <div onClick={() => filterbyprice(12999)} className= 'fw-bold badge p-3 bg-secondary text-light' style={{ cursor: "pointer", fontSize: '1rem',borderRadius:'10px' }}><FaRupeeSign/>12,999</div>
            <div onClick={() => filterbyprice(16999)} className= 'fw-bold badge p-3 bg-secondary text-light' style={{ cursor: "pointer", fontSize: '1rem',borderRadius:'10px' }}><FaRupeeSign/>16,999</div>
            <div onClick={() => filterbyprice(19999)} className= 'fw-bold badge p-3 bg-secondary text-light' style={{ cursor: "pointer", fontSize: '1rem',borderRadius:'10px' }}><FaRupeeSign/>19,999</div>
            <div onClick={() => filterbyprice(22999)}className= 'fw-bold badge p-3 bg-secondary text-light' style={{ cursor: "pointer", fontSize: '1rem',borderRadius:'10px' }}><FaRupeeSign/>22,999</div>
            <div onClick={() => filterbyprice(28999)} className= 'fw-bold badge p-3 bg-warning text-dark' style={{ cursor: "pointer", fontSize: '1rem',borderRadius:'10px' }}><FaRupeeSign/>28,999</div>
        
        </div>
      </div>
    
    </>
  )
}

export default ShopByCategory