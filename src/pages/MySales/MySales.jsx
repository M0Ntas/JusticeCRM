import React, { useEffect, useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import MainTable from "../../components/MainTable/MainTable";

const MySales = () => {

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

  const item = [
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

  // const listFormLS = localStorage.list ? JSON.parse(localStorage.list) : []

  const [list, setList] = useState(localStorage.list ? JSON.parse(localStorage.list) : [])
console.log('====>list<====', list)


  const [open, setOpen] = useState(false)


  return (
    <div className="container">
      <TitleHeader
        title={"Editing a product"}
        subtitle={"Sales table"}
        onClick={() => setOpen(true)}
        button="Save changes"
      />
      <MainTable headTable={headTable} items={list} setItems={setList} />
    </div>
  );
};

export default MySales;