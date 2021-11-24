import './style.scss'
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import img from '../../images/icons/signin.svg'
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";

const SignUp = () => {

  const [users, setUsers] = useState([])
  console.log('====>users<====', users)

  const changeHandler = event => {
    const key = event.target.getAttribute('handler')

    setUsers({
      ...users,
      [key]: event.target.value
    })
  }

  const handleCreateAccount = () => {
    console.log('====>form<====', users)
    localStorage.setItem('users', JSON.stringify(users))
    history.push('/sign-in')
  }

  const history = useHistory();

  const logIn = () => {
    history.push('/sign-in')
  }

  return (
    <div className='sign-up-page'>
      <div className="left-side">
        <div className="sign-in">
          <div className='title'>
            <span>Create an account</span>
          </div>
          <div className="input-one">
            <div className="input-first">
              <label>First name</label>
              <Input onChange={changeHandler} type='text' placeholder='First name' handler="firstName"/>
            </div>
            <div className="input-last">
              <label>Last name</label>
              <Input onChange={changeHandler} type='text' placeholder='Last name' handler="lastName"/>
            </div>
          </div>
          <div className="input-two">
            <label>Company name</label>
            <Input onChange={changeHandler} type='text' placeholder='Company name"' handler="companyName"/>
          </div>
          <div className="input-two">
            <label>Email</label>
            <Input onChange={changeHandler} type='email' placeholder='Email' handler="email"/>
          </div>
          <div className="input-two">
            <label>Password</label>
            <Input onChange={changeHandler} type='password' placeholder='Enter password' handler="enterPassword"/>
          </div>
          <div className="input-two">
            <label>Repeat password</label>
            <Input onChange={changeHandler} type='password' placeholder='Repeat password' handler="repeatPassword"/>
          </div>
          <Button onClick={handleCreateAccount}>Create account</Button>
          <div className='forgot'>
            Already have an account?
            <button className="login" onClick={logIn}>Log in</button>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src={img} alt='img'/>
      </div>
    </div>
  )
};

export default SignUp;