import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './formLogin.css'

const FormLogin = ({blackMode}) => {

  const {register, handleSubmit,reset} = useForm()

  const submit = (data) => {

    const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/users/login`
    axios.post(URL,data)
    .then(res => {
      localStorage.getItem('token',res.data.data.token)
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }
  
  return (
    <form className={`form-login ${blackMode==='off'? 'ligthModeS':'blackModeS'}`} onSubmit={handleSubmit(submit)}>
      <h2>welcome! Enter your email and password to continue</h2>
      <div className='form-email'>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="text" id='email' />
      </div>
      <div className='form-email'>
      <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id='password' />
      </div>
      <button>Login</button>
    
    </form>
  )
}

export default FormLogin