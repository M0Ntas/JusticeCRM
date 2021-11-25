import Title from "../Title/Title";
import Button from "../Button/Button";
import React, { useState } from "react";
import './style.scss'
import button from "../../images/icons/button.svg";
import Modal from "../Modal/Modal";
import { inputsRender } from "../../utils/inputsRender";
import Input from "../Input/Input";
import plus from "../../images/icons/plus.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import moment from "moment";

const TitleHeader = ({title, subtitle,}) => {

  const history = useHistory();

  const [open, setOpen] = useState(false);

  const [item, setItem] = useState([]);

  const changeHandler = event => {
    console.log('====>1111111111111111111<====', 1111111111111111111)
    const key = event.target.getAttribute('handler')
    setForm({
      ...form,
      [key]: event.target.value
    })
    console.log('====>form<====', form)
  };

  const handleAddProduct = () => {
    if (localStorage.products !== undefined) {
      const products = JSON.parse(localStorage.products)
      const setProducts = [
        ...products,
        form
      ]
      setItem(setProducts)
      localStorage.setItem('products', JSON.stringify(setProducts))
      history.push('/my-products')
      setOpen(false)
    } else {
      const array = []
      array.push(form)
      setItem(array)
      localStorage.setItem('products', JSON.stringify(array))
    }
    history.push('/my-products')
  };

  const [form, setForm] = useState({
    store: '',
    price: '',
    productName: '',
    productCategory: '',
    quantityOfGoods: '',
    weightOfItem: '',
    date: moment().format("DD-MM-YYYY"),
    id: Date.now(),
  });

  return (
    <div className="header-title">
      <Title
        title={title}
        subtitle={subtitle}
      />
      <div className="title-btn">
        <Button onClick={() => setOpen(true)}>
          <img src={button} alt="button"/>
          <span>Create a product</span>
        </Button>
      </div>
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
                huy="hui"
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
    </div>
  )
}

export default TitleHeader;