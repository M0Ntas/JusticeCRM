import './style.scss'
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import img from '../../images/icons/signin.svg'

const SignUp = () => {

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
    <div className='sign-up-page'>
      <div className="left-side">
        <div className="sign-in">
          <div className='title'>
            <span>Create an account</span>
          </div>
          <div className="input-one">
            <div className="input-first">
              <label>First name</label>
              <Input type='text' placeholder='First name'/>
            </div>
            <div className="input-last">
              <label>Last name</label>
              <Input type='text' placeholder='Last name'/>
            </div>
          </div>
          <div className="input-two">
            <label>Company name</label>
            <Input type='text' placeholder='Company name"'/>
          </div>
          <div className="input-two">
            <label>Email</label>
            <Input type='email' placeholder='Email'/>
          </div>
          <div className="input-two">
            <label>Password</label>
            <Input type='password' placeholder='Enter password'/>
          </div>
          <div className="input-two">
            <label>Repeat password</label>
            <Input type='password' placeholder='Repeat password'/>
          </div>
          <Button>Log in</Button>
          <div className='forgot'>
            Already have an account?
            <span>Log in</span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src={img} alt='img'/>
      </div>
    </div>
  )
}

export default SignUp;