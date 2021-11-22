import React from 'react';
import './styles.scss'
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

const MyProducts = () => {
  return (
    <div className="container">
      <div className="products">
        <Title
          title={"My product"}
          subtitle={"Product table"}
        />
        <Button/>
      </div>
      <hr/>
    </div>
  )
};

export default MyProducts;