import React, { useEffect, useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import MainTable from "../../components/MainTable/MainTable";

const MySales = () => {

  const [items, setItems] = useState(localStorage.items ? JSON.parse(localStorage.items) : [])

  const [open, setOpen] = useState(false)
  
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

  return (
    <div className="container">
      <TitleHeader
        title={"Editing a product"}
        subtitle={"Sales table"}
        onClick={() => setOpen(true)}
        button="Save changes"
      />
      <MainTable headTable={headTable} items={items} setItems={setItems}/>
    </div>
  );
};

export default MySales;