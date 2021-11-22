import React from 'react';
import './styles.scss'
import Input from "../Input/Input";
import Button from "../Button/Button";
import plus from "../../images/icons/plus.svg"
import close from "../../images/icons/close.svg"

const Modal = ({ onClick, title, inputs, button }) => {

  const getButton = () => {
    switch (button) {
      case 'add-product':
        return (
          <Button onClick={() => console.log('====>Add<====')}>
            <span>Add products <img src={plus} alt='add' /></span>
          </Button>
        )
      case 'sell-product':
        return (
          <Button onClick={() => console.log('====>Sell<====')}>
            <span>Sell product</span>
          </Button>
        )
      case 'Save changes':
        return (
          <Button onClick={() => console.log('====>Save<====')}>
            <span>Save changes</span>
          </Button>
        )
      default:
        return (
          <Button onClick={() => console.log('====>Other<====')}>
            <span>Default</span>
          </Button>
        )
    }
  }

  const CloseIcon = () => {
    return <div className="close" onClick={() => onClick(false)}>
      <img src={close} alt={'close'}/>
    </div>
  }

  return (
    <div className="wrapper">
      <div className="modal">
        <div className="modal-title">
          {title}
        </div>
        {inputs.map((item) => {
          return (
            <div className="modal-input-wrap" key={item.id}>
              <Input
               placeholder={item.placeholder}
               type={item.type}
              />
            </div>
          )
        })}
        <div className="modal-button">
          {getButton()}
        </div>
        <CloseIcon />
      </div>
    </div>
  );
};

export default Modal;