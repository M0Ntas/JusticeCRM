import React, { useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Personal = () => {

  const personal = JSON.parse(localStorage.user);
  const [open, setOpen] = useState(false);
  const [inputsLeft, setInputsLeft] = useState([
    {
      type: 'text',
      id: Date.now,
      placeholder: 'First name',
      handler: 'firstName',
      value: personal.firstName
    },
    {
      type: 'text',
      id: Date.now,
      placeholder: 'Company name',
      handler: 'companyName',
      value: personal.companyName
    },
    {
      type: 'text',
      id: Date.now,
      placeholder: 'Address',
      handler: 'address',
    },
    {
      type: 'password',
      id: Date.now,
      placeholder: 'Enter old password',
      handler: 'oldPassword',
    },
  ])

  const [inputsRight, setInputsRight] = useState([
    {
      type: 'text',
      id: Date.now,
      placeholder: 'Last name',
      handler: 'lastName',
      value: personal.lastName
    },
    {
      type: 'email',
      id: Date.now,
      placeholder: 'Email',
      handler: 'email',
      value: personal.email
    },
    {
      type: 'password',
      id: Date.now,
      placeholder: 'Enter a new password',
      handler: 'newPassword',
    },
  ])

  console.log('====>personal<====', personal)

  const [form, setForm] = useState({
    firstName: personal.firstName,
    companyName: personal.companyName,
    address: '',
    oldPassword: '',
    lastName: '',
    email: '',
    newPassword: '',
    value: ''
  });

  const changeLeftInput = event => {
    const {value} = event.target
    const key = event.target.getAttribute('handler')
  };

  const changeHandler = event => {
    const key = event.target.getAttribute('handler')
    setForm({
      ...form,
      [key]: event.target.value
    })
    console.log('====>form<====', form)
  };
  const [trigger, setTrigger] = useState(false)

  console.log('====>inputsLeft<====', inputsLeft)
  return (
    <div className="container">
      <TitleHeader
        title={"Personal Cabinet"}
        subtitle={"Information about your account"}
        onClick={() => setOpen(true)}
        button="btn"
        setTrigger={setTrigger}
      />
      <div className="personal-form">
        <div className="input-left">
          {inputsLeft.map((item) => {
            return (
              <div className="personal-input" key={item.id}>
                <label id={item.id}>{item.placeholder}</label>
                <Input
                  value={form[item.handler]}
                  placeholder={item.placeholder}
                  type={item.type}
                  handler={item.handler}
                  onChange={changeLeftInput}
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
                  value={item.value}
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
        <Button onClick={console.log('====>form<====', form)}>
          <span>Save changes</span>
        </Button>
      </div>
    </div>
  );
};

export default Personal;