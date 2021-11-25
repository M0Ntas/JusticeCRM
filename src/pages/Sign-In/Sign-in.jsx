import './style.scss'
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import img from '../../images/icons/signin.svg'
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const SignIn = ({setIsAuth}) => {

  // const [user, setUser] = useState([])

  const [formUsers, setFormUsers] = useState({
    email: '',
    password: '',
  })

const changeHandler = event => {
  const key = event.target.getAttribute('handler')
  setFormUsers({
    ...formUsers,
    [key]: event.target.value
  })
};
const handleLogIn = () => {
  if (localStorage.users !== undefined){
    const find = JSON.parse(localStorage.users).find((item) => {
      return item.email === formUsers.email
    })
    const isValidEmail = find.email === formUsers.email
    const isValidPassword = find.enterPassword === formUsers.password
    console.log('====>isValidEmail<====', isValidEmail)
    console.log('====>isValidPassword<====', isValidPassword)
    if(isValidEmail && isValidPassword){
      setIsAuth(true)
      localStorage.setItem('isAuth', true)
    }
  }
}
  const history = useHistory();

  const handleRegistration = () => {
    history.push('/sign-up')
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
          <div className='forgot' >
            <span onClick={handleRegistration} >Forgot password?</span>
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