import React, { useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import plus from "../../images/icons/plus.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { inputsRender } from '../../utils/inputsRender';

const Personal = () => {

  const history = useHistory();

  const [open, setOpen] = useState(false)

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
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'First name',
      handler: 'firstName'
    },
    {
      type: 'text',
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'Company name',
      handler: 'companyName'
    },
    {
      type: 'text',
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'Address',
      handler: 'address'
    },
    {
      type: 'password',
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'Enter old password',
      handler: 'oldPassword'
    },
  ]

  const inputsRight = [
    {
      type: 'text',
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'Last name',
      handler: 'lastName'
    },
    {
      type: 'email',
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'Email',
      handler: 'email'
    },
    {
      type: 'password',
      id: Math.random().toString(36).substr(2, 9),
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
    console.log('====>form<====', form)
  }

  const handleAddProduct = () => {
    history.push('/my-products')
  }

  return (
    <div className="container">
      <TitleHeader
        title={"Personal Cabinet"}
        subtitle={"Information about your account"}
        onClick={() => setOpen(true)}
        button="btn"
      />

      {/*{open && <Modal*/}
      {/*  onClick={setOpen}*/}
      {/*  title="Creating a product">*/}
      {/*  {inputsRender.map((item) => {*/}
      {/*    return (*/}
      {/*      <div className="modal-input-wrap" key={item.id}>*/}
      {/*        <Input*/}
      {/*          placeholder={item.placeholder}*/}
      {/*          type={item.type}*/}
      {/*          handler={item.handler}*/}
      {/*          onChange={changeHandler}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*  <div className="modal-button">*/}
      {/*    <Button onClick={handleAddProduct}>*/}
      {/*      <span>Add products <img src={plus} alt='add'/></span>*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*</Modal>*/}
      {/*}*/}

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