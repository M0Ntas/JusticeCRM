import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import MainTable from "../../components/MainTable/MainTable";
import { inputsRender } from '../../utils/inputsRender';
import plus from "../../images/icons/plus.svg";

const MyProducts = () => {

  const headTable = [
    'Product name',
    'Store',
    'Address',
    'Category',
    'Creation date',
    'Price',
    'Remains',
    'Weight/Volume',
    'Action'
  ]

  const [form, setForm] = useState({
    numberOfProducts: '',
    dateOfSale: '',
  });

  const [open, setOpen] = useState(false);

  const [items, setItems] = useState(localStorage.products ? JSON.parse(localStorage.products) : []);

  const changeHandler = event => {
    const key = event.target.getAttribute('handler')
    setForm({
      ...form,
      [key]: event.target.value
    })
    console.log('====>form<====', form)
  };

  return (
    <div className="container">
      <TitleHeader
        title={"My product"}
        subtitle={"Product table"}
        onClick={() => setOpen(true)}
      />
      <MainTable headTable={headTable} items={items} setItems={setItems}/>
    </div>
  );
};

export default MyProducts;