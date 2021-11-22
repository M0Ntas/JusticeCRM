import React, { useState } from 'react';
import './styles.scss'
import Modal from "../../components/Modal/Modal";
import TitleHeader from "../../components/TitleHeader/TitleHeader";

const Home = () => {
  // const title = 'Sales statistics'
  const [open, setOpen] = useState(false)

  const inputs = [
    {
      type: 'text',
      id: 0,
      placeholder: 'Store'
    },
    {
      type: 'number',
      id: 1,
      placeholder: 'Price'
    },
    {
      type: 'text',
      id: 2,
      placeholder: 'Product name'
    },
    {
      type: 'text',
      id: 3,
      placeholder: 'Product Category'
    },
    {
      type: 'number',
      id: 4,
      placeholder: 'Quantity of goods'
    },
    {
      type: 'number',
      id: 5,
      placeholder: 'Weight/Volume of one item'
    },
  ]



  return (
    <div className="container">
      <TitleHeader
        title={"Sales statistics"}
        subtitle={"Welcome to CRM dashboard"}
        onClick={() => setOpen(true)}
      />
      <div className="tables">
        <div className="tables-left">
          <div className="one">
            1
          </div>
          <div className="two">
            2
          </div>
        </div>
        <div className="tables-right">
          <div className="three">
            3
          </div>
        </div>
      </div>

      {open && <Modal
        onClick={setOpen}
        title="Creating a product"
        inputs={inputs}
      />}
    </div>
  )
};

export default Home;