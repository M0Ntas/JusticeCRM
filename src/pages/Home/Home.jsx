import React, { useState } from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


const Home = () => {

  // const history = useHistory();
  //
  // const [form, setForm] = useState({
  //   store: '',
  //   price: '',
  //   productName: '',
  //   productCategory: '',
  //   quantityOfGoods: '',
  //   weightOfItem: '',
  //   id: Date.now(),
  // })

  const [open, setOpen] = useState(false)

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