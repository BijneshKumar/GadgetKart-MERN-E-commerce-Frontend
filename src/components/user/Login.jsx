import React, { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {login} = useContext(AppContext)
  const navigate = useNavigate()


  const [formData, setFormData] = useState({
   
    email: '',
    password: ''
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const {email, password } = formData
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const result = await login(email, password)

   

    if (result.success) {
      navigate('/')
    }
    // alert('your form has submitted')
    //  console.log(formData)
    // setFormData({ name:'',
    //   email:'',
    //   password:''})
  }
  return (
    <>
      <div className="container my-5 p-4" style={{ width: '50%', border: '2px solid yellow', borderRadius: '10px' }}>
        <h1 className='text-center'>User Login</h1>
        <form onSubmit={onSubmitHandler}>
         
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input name='email' value={formData.email} onChange={onChangeHandler} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input name='password' value={formData.password} onChange={onChangeHandler} type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className='d-grid col-6 mx-auto my-3'>
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login;