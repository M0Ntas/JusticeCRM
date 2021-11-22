import Title from "../Title/Title";
import Button from "../Button/Button";
import React from "react";
import './style.scss'
import button from "../../images/icons/button.svg";

const TitleHeader = ({title, subtitle, onClick}) => {
  return (
    <div className="header-title">
      <Title
        // title={title}
        title={title}
        subtitle={subtitle}
      />
      <div className="title-btn">
        <Button onClick={onClick}>
          <img src={button} alt="button"/>
          <span>Create a product</span>
        </Button>
      </div>
    </div>
  )
}

export default TitleHeader;