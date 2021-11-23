import React, { useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import plus from "../../images/icons/plus.svg";
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

  const items = [
    {
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

  const [form, setForm] = useState({
    store: '',
    priceItem: '',
    productName: '',
    productCategory: '',
    quantityOfGoods: '',
    weightOfItem: '',
  })


  const [open, setOpen] = useState(false)

  const inputs = [
    {
      type: 'text',
      id: 0,
      placeholder: 'Store',
      handler: 'store'
    },
    {
      type: 'number',
      id: 1,
      placeholder: 'Price',
      handler: 'priceItem'
    },
    {
      type: 'text',
      id: 2,
      placeholder: 'Product name',
      handler: 'productName'
    },
    {
      type: 'text',
      id: 3,
      placeholder: 'Product Category',
      handler: 'productCategory'
    },
    {
      type: 'number',
      id: 4,
      placeholder: 'Quantity of goods',
      handler: 'quantityOfGoods'
    },
    {
      type: 'number',
      id: 5,
      placeholder: 'Weight/Volume of one item',
      handler: 'weightOfItem'
    },
  ]

  const changeHandler = event => {
    const key = event.target.getAttribute('handler')
    console.log('====>key<====', key)
    setForm({
      ...form,
      [key]: event.target.value
    })
    console.log('====>form<====', form)
  }


  return (
    <div className="container">
      <TitleHeader
        title={"Editing a product"}
        subtitle={"Sales table"}
        onClick={() => setOpen(true)}
        button="Save changes"
      />

      {open && <Modal
        onClick={setOpen}
        title="Editing a product">
        {inputs.map((item) => {
          return (
            <div className="modal-input-wrap" key={item.id}>
              <Input
                placeholder={item.placeholder}
                type={item.type}
                handler={item.handler}
                onChange={changeHandler}
              />
            </div>
          )
        })}
        <div className="modal-button">
          <Button onClick={() => console.log('====>SaveChanges<====')}>
            <span>Save changes</span>
          </Button>
        </div>
      </Modal>
      }
      <MainTable headTable={headTable} items={items}/>
    </div>
  );
};

export default MySales;