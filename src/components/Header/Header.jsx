import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../images/icons/Logo.svg"
import home from "../../images/icons/home.svg"
import doc from "../../images/icons/doc.svg"
import sales from "../../images/icons/sales.svg"
import user from "../../images/icons/user.svg"
import logout from "../../images/icons/logout.svg"
import './styles.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="menu">
        <NavLink exact activeClassName="active" to="/">
          <img src={home} alt="list item"/>
          Main page
        </NavLink>
        <NavLink activeClassName="active" to="/my-products">
          <img src={doc} alt="list item"/>
          My Products
        </NavLink>
        <NavLink activeClassName="active" to="/my-sales">
          <img src={sales} alt="list item"/>
          My Sales
        </NavLink>
        <NavLink activeClassName="active" to="/personal">
          <img src={user} alt="list item"/>
          Personal
        </NavLink>
      </div>
      <div className="logout">
        <img src={logout} alt="logout"/>
        <span>Log out</span>
      </div>
    </div>
  );
};

export default Header;