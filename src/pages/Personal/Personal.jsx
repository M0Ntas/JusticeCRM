import React from 'react';
import './styles.scss'
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

const Personal = () => {
  return (
    <div className="container">
      <div className="personal">
        <Title
          title={"Personal Cabinet"}
          subtitle={"Information about your account"}
        />
        <Button />
      </div>
      <hr/>
    </div>
  );
};

export default Personal;