import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import { FaSearch, FaTimes } from "react-icons/fa";
import { data } from './words.js';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(true)

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = ()=> setOpenMenu(!openMenu)
  const closeMenu = ()=> setOpenMenu(false)


  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const { setFilteredData, products, logout, isAuthenticated, cart } = useContext(AppContext)


 

  const submitHandler = (e) => {
    e.preventDefault()
    if (searchTerm === '') {
      return
    }
    navigate(`/product/search/${searchTerm}`)
    setSearchTerm('')
  }

  const clickOnSuggestion =(word)=>{
        navigate(`/product/search/${word}`)
         setSearchTerm('')
  }


  const updateSuggestions = (value) => {
    setSuggestions(
      value ? data.words.filter((word) => word.startsWith(value)).slice(0, 3) : []
    )
    setShowSuggestions(true)
  }

  useEffect(() => {
    updateSuggestions(searchTerm)
    if (!searchTerm) {
      setShowSuggestions(false)
    }
  }, [searchTerm])

  return (
    <>
      <div className="nav sticky-top">
       {
        openMenu && <div onClick={closeMenu} className="overLay"></div>
       }
        <div className="nav_bar bg-dark py-3">
          <Link to={'/'} className="left" style={{ textDecoration: 'none', color: '#ffc107', fontWeight: 'bold', fontSize: '30px' }}>GadgetKart</Link>
          
          <div className="suggest desktop-search">
            <form className='search-container' onSubmit={submitHandler}>
              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' className='search-input ' placeholder='Search Products...' />

              <button className='search-button' onClick={submitHandler}><FaSearch /></button>
            </form>
            {showSuggestions && (
              <ul className="suggestions">
                {suggestions.map((word, index) => (
                  <li
                    key={index}
                     onClick={() => clickOnSuggestion(word) }
                    className="suggestion-item"
                  >
                    {word}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="right">
            {isAuthenticated && (
              <>

                <Link to={'/cart'} type="button" className="btn btn-warning mx-3 position-relative">
                  <span className="material-symbols-outlined d-flex justify-content-center align-items-center">
                    shopping_cart
                  </span>
                  {
                    cart?.items?.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart?.items?.length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    )
                  }
                </Link>


                <Link to={'/profile'} className="btn btn-primary mx-3 fw-bold ">profile</Link>
                <button onClick={() => {
                  if (confirm('Are you sure, Want to Logout')) {
                    logout()
                    navigate('/')
                  }
                }} className="btn btn-danger mx-3 fw-bold">logout</button>
              </>
            )}

            {
              !isAuthenticated && (
                <>
                  <Link to={'/login'} className="btn btn-secondary mx-3 fw-bold">login</Link>
                  <Link to={'/register'} className="btn btn-info mx-3 fw-bold">register</Link>
                </>
              )
            }


          </div>
          
          <div className="hamburger">
          {isAuthenticated && (
              <Link to={'/cart'} type="button" className="btn btn-warning mx-3 position-relative">
                  <span className="material-symbols-outlined d-flex justify-content-center align-items-center">
                    shopping_cart
                  </span>
                  {
                    cart?.items?.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart?.items?.length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    )
                  }
                </Link>
          )}
            <FaBars onClick={toggleMenu}/>
          </div>

        </div>

           <div className="suggest mobile-search my-3">
            <form className='search-container' onSubmit={submitHandler}>
              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' className='search-input ' placeholder='Search Products...' />

              <button className='search-button' onClick={submitHandler}><FaSearch /></button>
            </form>
            {showSuggestions && (
              <ul className="suggestions">
                {suggestions.map((word, index) => (
                  <li
                    key={index}
                     onClick={() => clickOnSuggestion(word) }
                    className="suggestion-item"
                  >
                    {word}
                  </li>
                ))}
              </ul>
            )}
          </div>

      </div>
      <div className={`mobile-menu bg-dark text-light ${openMenu ? 'open' : ''}`}>
        <div className="close-btn"><FaTimes onClick={closeMenu} style={{cursor:'pointer'}}/></div>
        
        {
          isAuthenticated && (
            <>
             <Link to={'/profile'} className="btn btn-primary mx-3 fw-bold " onClick={closeMenu}>profile</Link>
                <button onClick={() => {
                  if (confirm('Are you sure, Want to Logout')) {
                    closeMenu()
                    logout()
                    navigate('/')
                  }
                }} className="btn btn-danger mx-3 fw-bold">logout</button>
            </>
          )
        }
        
           {
              !isAuthenticated && (
                <>
                  <Link to={'/login'} onClick={closeMenu} className="btn btn-secondary mx-3 fw-bold">login</Link>
                  <Link to={'/register'} onClick={closeMenu} className="btn btn-info mx-3 fw-bold">register</Link>
                </>
              )
            }

      </div>
    </>
  )
}

export default Navbar