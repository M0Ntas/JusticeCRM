import React from 'react';
import './styles.scss'

const Input = ({ placeholder, type }) => {
  return <input placeholder={placeholder} type={type} className="modal-input"/>
};

export default Input;