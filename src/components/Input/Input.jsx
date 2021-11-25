import React from 'react';
import './styles.scss'

const Input = (props) => {
  return <input {...props} placeholder={props.placeholder} type={props.type} className="modal-input"/>
};

export default Input;