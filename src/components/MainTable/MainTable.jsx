import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
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
import { styled } from '@mui/material/styles';

const MainTable = ({headTable, items, setItems, onClick}) => {

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
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const [sell, setSell] = useState(false);

  const [redact, setRedact] = useState(false);

  const [form, setForm] = useState({
    numberOfProducts: '',
    dateOfSale: '',
  });

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
  ];

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
  };

  const deleteProduct = (id) => {
    setItems(items.filter(el => el.id !== id))
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
            <StyledTableRow key={items.productName}>
              <StyledTableCell component="th" scope="row">
                {item.productName}
              </StyledTableCell>
              <StyledTableCell align="center">{item.store}</StyledTableCell>
              <StyledTableCell align="center">{item.address}</StyledTableCell>
              <StyledTableCell align="center">{item.category}</StyledTableCell>
              <StyledTableCell align="center">{item.creationDate}</StyledTableCell>
              <StyledTableCell align="center">{item.price}</StyledTableCell>
              <StyledTableCell align="center">{item.remains}</StyledTableCell>
              <StyledTableCell align="center">{item.volume}</StyledTableCell>
              <StyledTableCell align="center">
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
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default MainTable;