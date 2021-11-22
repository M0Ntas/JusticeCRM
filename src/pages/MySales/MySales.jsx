import React from 'react';
import './styles.scss'
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

const MySales = () => {
  return (
    <div className="container">
      <div className="sales">
        <Title
          title={"My sales"}
          subtitle={"Sales table"}
        />
        <Button/>
      </div>
      <hr/>
    </div>
  );
};

export default MySales;