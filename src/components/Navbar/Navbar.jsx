import React from "react";
import './Navbar.css'
import logo from '../../img/logo.png'

const Navbar = () => {
  return (
    <div>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <img src={logo} alt="" className="logo" />
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="#">Главная</a>
          <a href="#">О нас</a>
          <a href="#">Курсы</a>
          <a href="#">Контакты</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
