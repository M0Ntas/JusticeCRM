import React, { useEffect, useState } from 'react';
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

  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState(false)
  const [items, setItems] = useState(localStorage.products ? JSON.parse(localStorage.products) : []);
  const [soldItems, setSoldItems] = useState(localStorage.list ? JSON.parse(localStorage.list) : []);

  useEffect(() => {
    setItems(localStorage.products ? JSON.parse(localStorage.products) : [])
  }, [trigger])

  return (
    <div className="container">
      <TitleHeader
        title={"My product"}
        subtitle={"Product table"}
        onClick={() => setOpen(true)}
        setTrigger={setTrigger}
      />
      <MainTable
        headTable={headTable}
        items={items}
        setItems={setItems}
        soldItems={soldItems}
        setSoldItems={setSoldItems}
      />
    </div>
  );
};

export default MyProducts;