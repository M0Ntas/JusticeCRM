import React from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";

const MyProducts = () => {
  return (
    <div className="container">
      <TitleHeader
        title={"My product"}
        subtitle={"Product table"}
        onClick={() => {}}
      />
    </div>
  )
};

export default MyProducts;