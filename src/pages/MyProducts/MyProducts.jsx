import React, { useState } from 'react';
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

  // const history = useHistory();

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
  
  console.log('====>inputsRender<====', inputsRender)

  const [open, setOpen] = useState(false);


  const [items, setItems] = useState([
    {
      id: Math.random().toString(36).substr(2, 9),
      productName: 'test',
      store: 'test store',
      address: 'street',
      category: 'test category',
      creationDate: '11.11.11',
      price: '322',
      remains: '1231323',
      volume: '5'
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
      volume: '5'
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
      volume: '5'
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
      volume: '5'
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
      volume: '5'
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
      volume: '5'
    },
  ]);

  const changeHandler = event => {
    const key = event.target.getAttribute('handler')
    setForm({
      ...form,
      [key]: event.target.value
    })
    console.log('====>form<====', form)
  };

  // const handleAddProduct = () => {
  //   history.push('/my-products')
  // }

  return (
    <div className="container">
      <TitleHeader
        title={"My product"}
        subtitle={"Product table"}
        onClick={() => setOpen(true)}
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
          {/*//заглушка*/}
          <Button onClick={() => setOpen(false)}>
            <span>Add products <img src={plus} alt='add'/></span>
          </Button>
        </div>
      </Modal>
      }
      <MainTable headTable={headTable} items={items} setItems={setItems}/>
    </div>
  );
};

export default MyProducts;