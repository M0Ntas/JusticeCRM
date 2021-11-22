import React, { useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Modal from "../../components/Modal/Modal";

const MyProducts = () => {
  const [open, setOpen] = useState(false)

  const inputs = [
    {
      type: 'number',
      id: 0,
      placeholder: 'Number of products'
    },
    {
      type: 'date',
      id: 1,
      placeholder: 'Date of sale'
    },
  ]

  return (
    <div className="container">
      <TitleHeader
        title={"My product"}
        subtitle={"Product table"}
        onClick={() => setOpen(true)}
      />

      {open && <Modal
        onClick={setOpen}
        title={"Sell the product"}
        inputs={inputs}
        button="sell-product"
      />}
    </div>

  )
};

export default MyProducts;