import './style.scss'
import Input from "../../components/Input/Input";
import img from '../../images/icons/signin.svg'
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useRef, useState } from "react";
import { registerUser } from "../../api/auth/registerUser";

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('E-mail не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [validForm, setValidForm] = useState(false);

  const history = useHistory();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    repeatPassword: '',
    id: Date.now(),
  });

  const [users, setUsers] = useState([])

  const changeHandler = event => {
    const key = event.target.getAttribute('handler')
    setForm({
      ...form,
      [key]: event.target.value
    })
  };

  const handleCreateAccount = () => {
    if (localStorage.users !== undefined) {
      const users = JSON.parse(localStorage.users)
      const combineUsers = [
        ...users,
        form
      ]
      setUsers(combineUsers)
      localStorage.setItem('users', JSON.stringify(combineUsers))
    } else {
      const array = []
      array.push(form)
      setUsers(array)
      localStorage.setItem('users', JSON.stringify(array))
    }

    if (form.email && form.password) {
      registerUser(form)
        .then(res => {
          if(res.status) {
            history.push('/sign-in')
          } else {
            alert(res.text)
          }
        })
        .catch(err => console.log('====>err<====', err))
    }
  };

  const logIn = () => {
    history.push('/sign-in')
  };

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Неккорректный E-mail')
    } else {
      setEmailError('')
      changeHandler(e)
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Пароль должен быть длиннее 3 и менее 8')
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым')
      }
    } else {
      setPasswordError('')
      changeHandler(e)
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setValidForm(false)
    } else {
      setValidForm(true)
    }
  }, [emailError, passwordError])

  useEffect(() => {
    if (form.password === form.repeatPassword) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  },[form])

  return (
    <div className='sign-up-page'>
      <div className="left-side">
        <div className="sign-in">
          <div className='title'>
            <span>Create an account</span>
          </div>
          <div className="input-one">
            <div className="input-first">
              <label htmlFor="firstName">First name</label>
              <Input id="firstName"  onChange={changeHandler} type='text' placeholder='First name' handler="firstName"/>
            </div>
            <div className="input-last">
              <label htmlFor="lastName">Last name</label>
              <Input id="lastName" onChange={changeHandler} type='text' placeholder='Last name' handler="lastName"/>
            </div>
          </div>
          <div className="input-two">
            <label htmlFor="companyName">Company name</label>
            <Input id="companyName" onChange={changeHandler} type='text' placeholder='Company name' handler="companyName"/>
          </div>
          <div className="input-two">
            {(emailDirty && emailError) ? <label style={{color: 'red'}} className="label">{emailError}</label> :
              <label htmlFor="email" className="label">E-mail</label>}
            <Input value={email}
                   onChange={emailHandler}
                   onBlur={e => blurHandler(e)}
                   name='email'
                   handler="email"
                   type='email'
                   placeholder='Email'
                   id="email"
            />
          </div>
          <div className="input-two">
            {(passwordDirty && passwordError) ?
              <label style={{color: 'red'}} className="label">{passwordError}</label> :
              <label htmlFor="password" className="label">Password</label>}
            <Input vvalue={password}
                   onChange={passwordHandler}
                   onBlur={e => blurHandler(e)}
                   handler="password"
                   name='password'
                   type='password'
                   placeholder='Enter password'
                   id="password"
            />
          </div>
          <div className="input-two">
            <label>Repeat password</label>
            <Input onChange={changeHandler} type='password' placeholder='Repeat password' handler="repeatPassword"/>
          </div>
          <button className='button-create-account' disabled={!validForm} onClick={handleCreateAccount}>Create account
          </button>
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