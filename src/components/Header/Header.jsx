import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../images/icons/Logo.svg"
import home from "../../images/icons/home.svg"
import doc from "../../images/icons/doc.svg"
import sales from "../../images/icons/sales.svg"
import user from "../../images/icons/user.svg"
import logout from "../../images/icons/logout.svg"
import './styles.scss'

const Header = ({setIsAuth}) => {

  const menu = [
    {
      icon: home,
      title: 'Main page',
      link: '/'
    },
    {
      icon: doc,
      title: 'My Products',
      link: '/my-products'
    },
    {
      icon: sales,
      title: 'My Sales',
      link: '/my-sales'
    },
    {
      icon: user,
      title: 'Personal',
      link: '/personal'
    },
  ]

  const handleLogOut = () => {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
  }


  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="menu">
        {menu.map(item => {
          return (
            <NavLink key={item.title} exact activeClassName="active" to={item.link}>
              <img src={item.icon} alt="list item"/>
              {item.title}
            </NavLink>
          )
        })}
      </div>
      <div onClick={handleLogOut} className="logout">
        <img src={logout} alt="logout"/>
        <span>Log out</span>
      </div>
    </div>
  );
};

export default Header;