import React, { useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Personal = () => {

  const [form, setForm] = useState({
    firstName: '',
    companyName: '',
    address: '',
    oldPassword: '',
    lastName: '',
    email: '',
    newPassword: '',
  })

  const inputsLeft = [
    {
      type: 'text',
      id: 0,
      placeholder: 'First name',
      handler: 'firstName'
    },
    {
      type: 'text',
      id: 1,
      placeholder: 'Company name',
      handler: 'companyName'
    },
    {
      type: 'text',
      id: 2,
      placeholder: 'Address',
      handler: 'address'
    },
    {
      type: 'password',
      id: 4,
      placeholder: 'Enter old password',
      handler: 'oldPassword'
    },
  ]

  const inputsRight = [
    {
      type: 'text',
      id: 5,
      placeholder: 'Last name',
      handler: 'lastName'
    },
    {
      type: 'email',
      id: 6,
      placeholder: 'Email',
      handler: 'email'
    },
    {
      type: 'password',
      id: 4,
      placeholder: 'Enter a new password',
      handler: 'newPassword'
    },
  ]

  const changeHandler = event => {
    const key = event.target.getAttribute('handler')
    setForm({
      ...form,
      [key]: event.target.value
    })
  }

  return (
    <div className="container">
      <TitleHeader
        title={"Personal Cabinet"}
        subtitle={"Information about your account"}
        onClick={() => {
        }}
        button="btn"
      />
      <div className="personal-form">
        <div className="input-left">
          {inputsLeft.map((item) => {
            return (
              <div className="personal-input" key={item.id}>
                <label id={item.id}>{item.placeholder}</label>
                <Input
                  placeholder={item.placeholder}
                  type={item.type}
                  handler={item.handler}
                  onChange={changeHandler}
                />
              </div>
            )
          })}
        </div>
        <div className="input-right">
          {inputsRight.map((item) => {
            return (
              <div className="personal-input" key={item.id}>
                <label id={item.id}>{item.placeholder}</label>
                <Input
                  placeholder={item.placeholder}
                  type={item.type}
                  handler={item.handler}
                  onChange={changeHandler}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className='personal-button'>
        <Button onClick={() => console.log('====>Save changes<====')}>
          <span>Save changes</span>
        </Button>
      </div>
    </div>
  );
};

export default Personal;