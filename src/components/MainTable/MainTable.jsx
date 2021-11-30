import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import editP from '../../images/icons/editP.svg'
import del from '../../images/icons/delete.svg';
import './style.scss'
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const MainTable = (
  {
    headTable,
    items,
    setItems,
  }) => {

  const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2B3844",
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    [`&.${tableCellClasses.body}`]: {
      boxShadow: "none",
      borderRadius: "3",
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const [item, setItem] = useState(null)

  const [activeEl, setActiveEl] = useState([])

  const [sell, setSell] = useState(false);

  const [edit, setEdit] = useState(false);

  const history = useHistory();

  const [form, setForm] = useState({
    numberOfProducts: '',
    salesDate: '',
  });

  const sellInputs = [
    {
      type: 'number',
      id: 0,
      placeholder: 'Number of products',
      handler: 'numberOfProducts',
    },
    {
      type: 'text',
      id: 1,
      placeholder: 'Date of sale',
      handler: 'salesDate',
    },
  ];

  const editInputs = [
    {
      type: 'text',
      id: Date.now(),
      placeholder: 'Store',
      handler: 'store'
    },
    {
      type: 'number',
      id: Date.now(),
      placeholder: 'Price',
      handler: 'priceItem'
    },
    {
      type: 'text',
      id: Date.now(),
      placeholder: 'Product name',
      handler: 'productName'
    },
    {
      type: 'text',
      id: Date.now(),
      placeholder: 'Product Category',
      handler: 'productCategory'
    },
    {
      type: 'number',
      id: Date.now(),
      placeholder: 'Quantity of goods',
      handler: 'quantityOfGoods'
    },
    {
      type: 'number',
      id: Date.now(),
      placeholder: 'Weight/Volume of one item',
      handler: 'weightOfItem'
    },
  ]

  const changeSaveHandler = event => {
    const key = event.target.getAttribute('handler')
    setForm((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }))
  };

  const deleteProduct = (id) => {
    setItems(items.filter(el => el.id !== id))
    const productsStorage = localStorage.products ? JSON.parse(localStorage.products) : 0
    console.log('====>productsStorage<====', productsStorage)
    if (productsStorage) {
      const deleteProductStorage = productsStorage.filter(el => el.id !== id)
      console.log('====>deleteProductStorage<====', deleteProductStorage)
      localStorage.setItem('products', JSON.stringify(deleteProductStorage))
    }
  };

  const sellProduct = (id) => {
    const selectProduct = items.find((product) => product.id === id)
    console.log('====>selectProduct<====', selectProduct)
    setSell(true)
    setActiveEl(selectProduct)
  }

  const countProduct = () => {
    const count = activeEl.quantityOfGoods - form.numberOfProducts
    if (count > 0) {
      const newCurrentProduct = {...activeEl, quantityOfGoods: count}
      const newProducts = items.map((product) => {
        if (product.id === newCurrentProduct.id) {
          return newCurrentProduct
        }
        return product
      })
      localStorage.setItem('products', JSON.stringify(newProducts))
    }
    if (count === 0) {
      const newProducts = items.filter((product) => product.id !== activeEl.id)
      localStorage.setItem('products', JSON.stringify(newProducts))
    }
    if (count < 0) {
      console.log('====>count<====', count)
    }
  }

  const handleSellProduct = () => {
    countProduct()
    let sellData
    if (localStorage.items !== undefined) {
      const mySales = JSON.parse(localStorage.items)
      sellData = {...activeEl, ...form}
      mySales.push(sellData)
      localStorage.setItem('items', JSON.stringify(mySales))
    } else {
      sellData = {...activeEl, ...form}
      const array = []
      array.push(sellData)
      setItem(array)
      localStorage.setItem('items', JSON.stringify(array))
    }
    history.push('/my-sales')
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headTable.map(item => {
              return (
                <StyledTableCell className="table-header-row" align="center">{item}</StyledTableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <StyledTableRow key={items.productName} id={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.productName}
              </StyledTableCell>
              <StyledTableCell align="center">{item.store}</StyledTableCell>
              <StyledTableCell align="center">Taganrog</StyledTableCell>
              <StyledTableCell align="center">{item.productCategory}</StyledTableCell>
              <StyledTableCell align="center">{item.date}</StyledTableCell>
              <StyledTableCell align="center">{item.price}</StyledTableCell>
              <StyledTableCell
                align="center">{item.numberOfProducts ? item.numberOfProducts : item.quantityOfGoods}</StyledTableCell>
              <StyledTableCell align="center">{item.weightOfItem}</StyledTableCell>
              <StyledTableCell align="center">
                {item.salesDate
                  ? item.salesDate
                  : (
                    <div className="buttons">
                      <button className='table-button'
                              onClick={() => sellProduct(item.id)}
                      >Sell
                      </button>
                      <button className='table-button'
                              onClick={() => sellProduct(item.id)}><img src={editP} alt='edit'/></button>
                      <button className='table-button-delete' onClick={() => deleteProduct(item.id)}><img src={del}
                                                                                                          alt='close'/>
                      </button>


                    </div>
                  )
                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      {edit && <Modal
        onClick={setEdit}
        title="Sell the product">
        {editInputs.map((item) => {
          return (
            <div className="modal-input-wrap" key={item.id}>
              <Input
                placeholder={item.placeholder}
                type={item.type}
                handler={item.handler}
                onChange={changeSaveHandler}
              />
            </div>
          )
        })}
        <div className="modal-button">
          <Button onClick={() => console.log('====>Save<====')}>
            <span>Save changes</span>
          </Button>
        </div>
      </Modal>
      }

      {sell && <Modal
        onClick={setSell}
        title="Sell the product">
        {sellInputs.map((item) => {
          return (
            <div className="modal-input-wrap" key={item.id}>
              <Input
                placeholder={item.placeholder}
                type={item.type}
                handler={item.handler}
                onChange={changeSaveHandler}
              />
            </div>
          )
        })}
        <div className="modal-button">
          <Button onClick={handleSellProduct}>
            <span>Sell product</span>
          </Button>
        </div>
      </Modal>
      }
    </TableContainer>
  );
};

export default MainTable;