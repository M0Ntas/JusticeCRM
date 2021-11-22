import React from 'react';
import './styles.scss'
import Input from "../Input/Input";
import Button from "../Button/Button";
import plus from "../../images/icons/plus.svg"
import close from "../../images/icons/close.svg"

const Modal = ({ onClick, title, inputs }) => {

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
            <div className="modal-input" key={item.id}>
              <Input
               placeholder={item.placeholder}
               type={item.type}
              />
            </div>
          )
        })}
        <div className="modal-button">
          <Button
            onClick={() => console.log('====>CLICK<====')}
          >
            <span>Add products <img src={plus} alt='add' /></span>
          </Button>
        </div>
        <CloseIcon />
      </div>
    </div>
  );
};

export default Modal;