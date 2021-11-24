import './style.scss'
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import img from '../../images/icons/signin.svg'
import { useState } from "react";

const SignIn = () => {

  const [user, setUser] = useState('')

  const changeHandler = event => {
    const key = event.target.getAttribute('handler')
    setUser({
      ...user,
      [key]: event.target.value
    })
    console.log('====>user<====', user)
  }

  const handleLogIn = () => {
   const a = localStorage.getItem('user')
    console.log('====>a<====', a)
  }
  
  return (
    <div className='sign-in-page'>
      <div className="left-side">
        <div className="sign-in">
          <div className='title'>
            <span>Sign in</span>
          </div>
          <div className="email">
            <label className="label">E-mail</label>
            <Input onChange={changeHandler} handler="email" type='email' placeholder='Email'/>
          </div>
          <div className="password">
            <label className="label">Password</label>
            <Input onChange={changeHandler} handler="password"  type='password' placeholder='Enter password'/>
          </div>
          <Button onClick={handleLogIn}>Log in</Button>
          <div className='forgot'>
            Forgot password?
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src={img} alt='img'/>
      </div>
    </div>
  )
};

export default SignIn;