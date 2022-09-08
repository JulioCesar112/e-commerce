import React from 'react'
import FormLogin from '../login/FormLogin'

const Login = ({blackMode}) => {

  return (
    <div className={`login-mail ${blackMode==='off'?'ligthMode':'blackMode'}`}>
      <FormLogin blackMode={blackMode}/>
     
    </div>
  )
}

export default Login