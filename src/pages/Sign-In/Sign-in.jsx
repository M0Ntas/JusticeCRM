import './style.scss'
import Input from "../../components/Input/Input";
import img from '../../images/icons/signin.svg'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const SignIn = ({setIsAuth}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('E-mail не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if(emailError || passwordError){
      setValidForm(false)
    }else {
      setValidForm(true)
    }
  },[emailError, passwordError])

  const [formUsers, setFormUsers] = useState({
    email: '',
    password: '',
  });

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
    const isValidPassword = find.password === formUsers.password
    if(isValidEmail && isValidPassword){
      localStorage.setItem('isAuth', 'true')
      setIsAuth(true)
    }else {
      setPasswordError('Неверный пароль')
    }
  }
};

  const history = useHistory();

  const handleRegistration = () => {
    history.push('/sign-up')
  };

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())){
      setEmailError('Неккорректный E-mail')
    } else {
      setEmailError('')
      changeHandler(e)
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length <3 || e.target.value.length > 8){
      setPasswordError('Пароль должен быть длиннее 3 и менее 8')
      if (!e.target.value){
        setPasswordError('Пароль не может быть пустым')
      }
    } else {
      setPasswordError('')
      changeHandler(e)
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name){
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  };

  return (
    <div className='sign-in-page'>
      <div className="left-side">
        <div className="sign-in">
          <div className='title'>
            <span>Sign in</span>
          </div>
          <div className="email">
            {(emailDirty && emailError) ? <label style={{color: 'red'}} className="label">{emailError}</label> :  <label className="label">E-mail</label>}
            <Input value={email}
                   onChange={emailHandler}
                   onBlur={e => blurHandler(e)}
                   name='email'
                   handler="email"
                   type='email'
                   placeholder='Email'/>
          </div>
          <div className="password">
            {(passwordDirty && passwordError) ? <label style={{color: 'red'}} className="label">{passwordError}</label> :  <label className="label">Password</label>}
            <Input value={password}
                   onChange={passwordHandler}
                   onBlur={e => blurHandler(e)}
                   handler="password"
                   name='password'
                   type='password'
                   placeholder='Enter password'/>
          </div>
          <button className='button-login' disabled={!validForm} onClick={handleLogIn}>Log in</button>
          <div className='forgot' >
            <div>
              <span onClick={handleRegistration} >Create account</span>
            </div>
            <span>Forgot password?</span>
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