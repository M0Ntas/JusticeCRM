import React, { useEffect, useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import MainTable from "../../components/MainTable/MainTable";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const MySales = () => {

  const history = useHistory();

  const headTable = [
    'Product name',
    'Store',
    'Address',
    'Category',
    'Creation date',
    'Price',
    'Sold items',
    'Weight/Volume',
    'Last sale'
  ]

  const items = [
    {
      id: Math.random().toString(36).substr(2, 9),
      productName: 'test',
      store: 'test store',
      address: 'street',
      category: 'test category',
      creationDate: '11.11.11',
      price: '322',
      remains: '1231323',
      volume: '5',
      salesDate: '04.07.2021'
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      productName: 'test',
      store: 'test store',
      address: 'street',
      category: 'test category',
      creationDate: '11.11.11',
      price: '322',
      remains: '1231323',
      volume: '5',
      salesDate: '04.07.2021'
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      productName: 'test',
      store: 'test store',
      address: 'street',
      category: 'test category',
      creationDate: '11.11.11',
      price: '322',
      remains: '1231323',
      volume: '5',
      salesDate: '04.07.2021'
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      productName: 'test',
      store: 'test store',
      address: 'street',
      category: 'test category',
      creationDate: '11.11.11',
      price: '322',
      remains: '1231323',
      volume: '5',
      salesDate: '04.07.2021'
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      productName: 'test',
      store: 'test store',
      address: 'street',
      category: 'test category',
      creationDate: '11.11.11',
      price: '322',
      remains: '1231323',
      volume: '5',
      salesDate: '04.07.2021'
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      productName: 'test',
      store: 'test store',
      address: 'street',
      category: 'test category',
      creationDate: '11.11.11',
      price: '322',
      remains: '1231323',
      volume: '5',
      salesDate: '04.07.2021'
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      productName: 'test',
      store: 'test store',
      address: 'street',
      category: 'test category',
      creationDate: '11.11.11',
      price: '322',
      remains: '1231323',
      volume: '5',
      salesDate: '04.07.2021'
    },
  ]

  const listFormLS = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []

  const [list, setList] = useState(listFormLS)
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  })

  const [form, setForm] = useState({
    store: '',
    priceItem: '',
    productName: '',
    productCategory: '',
    quantityOfGoods: '',
    weightOfItem: '',
  })

  const [open, setOpen] = useState(false)

  const changeHandler = event => {
    const key = event.target.getAttribute('handler')
    console.log('====>key<====', key)
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
        title={"Editing a product"}
        subtitle={"Sales table"}
        onClick={() => setOpen(true)}
        button="Save changes"
      />
      <MainTable headTable={headTable} items={items}/>
    </div>
  );
};

export default MySales;