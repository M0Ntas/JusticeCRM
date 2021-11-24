import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import edit from '../../images/icons/edit.svg'
import del from '../../images/icons/delete.svg';
import './style.scss'
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Input from "../Input/Input";

const MainTable = ({headTable, items, setItems, onClick}) => {

  const [sell, setSell] = useState(false)
  const [redact, setRedact] = useState(false)

  const [form, setForm] = useState({
    numberOfProducts: '',
    dateOfSale: '',
  })

  const sellInputs = [
    {
      type: 'number',
      id: 0,
      placeholder: 'Number of products',
      handler: 'numberOfProducts'
    },
    {
      type: 'date',
      id: 1,
      placeholder: 'Date of sale',
      handler: 'dateOfSale'
    },
  ]

  const editInputs = [
    {
      type: 'text',
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'Store',
      handler: 'store'
    },
    {
      type: 'number',
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'Price',
      handler: 'priceItem'
    },
    {
      type: 'text',
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'Product name',
      handler: 'productName'
    },
    {
      type: 'text',
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'Product Category',
      handler: 'productCategory'
    },
    {
      type: 'number',
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'Quantity of goods',
      handler: 'quantityOfGoods'
    },
    {
      type: 'number',
      id: Math.random().toString(36).substr(2, 9),
      placeholder: 'Weight/Volume of one item',
      handler: 'weightOfItem'
    },
  ]

  const changeHandler = event => {
    const key = event.target.getAttribute('handler')
    setForm({
      ...form,
      [key]: event.target.value
    })
    console.log('====>form<====', form)
  }

  const deleteProduct = (id) => {
    setItems(items.filter(el => el.id !== id))
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headTable.map(item => {
              return (
                <TableCell className="table-header-row" align="center">{item}</TableCell>
              )
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {/*<TableRow>*/}

          {items.map(item => {
            return (
              <TableRow className="table-row">
                <TableCell component="th" scope="row">
                  {item.productName}
                </TableCell>
                <TableCell align="center">{item.store}</TableCell>
                <TableCell align="center">{item.address}</TableCell>
                <TableCell align="center">{item.category}</TableCell>
                <TableCell align="center">{item.creationDate}</TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center">{item.remains}</TableCell>
                <TableCell align="center">{item.volume}</TableCell>
                <TableCell align="right">
                  {item.salesDate
                    ? item.salesDate
                    : (
                      <div className="buttons">
                        <button className='table-button'
                                onClick={() => setSell(true)}
                        >Sell
                        </button>
                        <button className='table-button'
                                onClick={() => setRedact(true)}><img src={edit} alt='edit'/></button>
                        <button className='table-button-delete' onClick={() => deleteProduct(item.id)}><img src={del}
                                                                                                            alt='close'/>
                        </button>

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
                                  onChange={changeHandler}
                                />
                              </div>
                            )
                          })}
                          <div className="modal-button">
                            <Button onClick={() => console.log('====>SellProduct<====')}>
                              <span>Sell product</span>
                            </Button>
                          </div>
                        </Modal>
                        }

                        {redact && <Modal
                          onClick={setRedact}
                          title="Sell the product">
                          {editInputs.map((item) => {
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
                            <Button onClick={() => console.log('====>SellProduct<====')}>
                              <span>Save changes</span>
                            </Button>
                          </div>
                        </Modal>
                        }
                      </div>
                    )
                  }
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;