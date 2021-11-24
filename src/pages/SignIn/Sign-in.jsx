import './style.scss'
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import img from '../../images/icons/signin.svg'

const SignIn = () => {

  const signIn = [
    {
      type: 'email',
      placeholder: 'Email'
    },
    {
      type: 'password',
      placeholder: 'Enter password',
    }
  ]

  return (
    <div className='sign-in-page'>
      <div className="left-side">
        <div className="sign-in">
          <div className='title'>
            <span>Sign in</span>
          </div>
          <div className="email">
            <label>E-mail</label>
            <Input type='email' placeholder='Email'/>
          </div>
          <div className="password">
            <label>Password</label>
            <Input type='password' placeholder='Enter password'/>
          </div>
          <Button>Log in</Button>
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
}

export default SignIn;