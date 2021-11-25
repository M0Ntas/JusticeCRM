import React, { useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import MainTable from "../../components/MainTable/MainTable";

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
  //
  // const [form, setForm] = useState({
  //   numberOfProducts: '',
  //   dateOfSale: '',
  // });

  const [open, setOpen] = useState(false);

  const [items, setItems] = useState(localStorage.products ? JSON.parse(localStorage.products) : []);

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