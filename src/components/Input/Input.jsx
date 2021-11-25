import React from 'react';
import './styles.scss'

const Input = (props) => {
  console.log('====>2222222222222222<====', 2222222222222222)
  return <input {...props} placeholder={props.placeholder} type={props.type} className="modal-input"/>
};

export default Input;