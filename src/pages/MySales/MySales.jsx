import React, { useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import plus from "../../images/icons/plus.svg";
import MainTable from "../../components/MainTable/MainTable";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { inputsRender } from '../../utils/inputsRender';


const MySales = () => {

  const history = useHistory()

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

      {open && <Modal
        onClick={setOpen}
        title="Creating a product">

        {inputsRender.map((item) => {
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
          <Button onClick={handleAddProduct}>
            <span>Add products <img src={plus} alt='add'/></span>
          </Button>
        </div>
      </Modal>
      }
      <MainTable headTable={headTable} items={items}/>
    </div>
  );
};

export default MySales;