import React, { useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


const Home = () => {

  const history = useHistory();

  const [form, setForm] = useState({
    store: '',
    price: '',
    productName: '',
    productCategory: '',
    quantityOfGoods: '',
    weightOfItem: '',
    id: Date.now(),
  })

  const [open, setOpen] = useState(false)

  const changeHandler = event => {
    const key = event.target.getAttribute('handler')
    setForm({
      ...form,
      [key]: event.target.value
    })
    console.log('====>form<====', form)
  }

  const handleAddProduct = () => {
    if (localStorage.products !== undefined) {
      const products = JSON.parse(localStorage.products)
      const setProducts = [
        ...products,
        form
      ]
      // products.push(form)
      localStorage.setItem('products', JSON.stringify(setProducts))
    } else {
      const array = []
      array.push(form)
      localStorage.setItem('products', JSON.stringify(array))
    }
    history.push('/my-products')
  }

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
    </div>
  )
};

export default Home;