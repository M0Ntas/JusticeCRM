import React from 'react';
import './styles.scss'
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

const Home = () => {
  // const title = 'Sales statistics'

  return (
    <div className="container">
      <div className="home">
        <Title
          // title={title}
          title={"Sales statistics"}
          subtitle={"Welcome to CRM dashboard"}
        />
        <Button/>
      </div>
      <hr/>
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