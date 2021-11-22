import React from 'react';
import './styles.scss'
import TitleHeader from "../../components/TitleHeader/TitleHeader";

const Personal = () => {
  return (
    <div className="container">
      <TitleHeader
        title={"Personal Cabinet"}
        subtitle={"Information about your account"}
        onClick={() => {}}
        button="btn"
      />
    </div>
  );
};

export default Personal;