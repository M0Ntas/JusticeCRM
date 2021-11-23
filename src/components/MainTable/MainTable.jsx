import React from 'react';
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

const MainTable = ({headTable, items, setItems}) => {

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
                        <button className='table-button'>Sell</button>
                        <button className='table-button'><img src={edit} alt='edit'/></button>
                        <button className='table-button-delete' onClick={() => deleteProduct(item.id)}><img src={del}
                                                                                                            alt='close'/>
                        </button>
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