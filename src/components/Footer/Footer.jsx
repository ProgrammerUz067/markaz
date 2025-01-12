import React from 'react'
import './Footer.css'
import logo from '../../img/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="left-footer">
        <img src={logo} alt="" className='logo-footer' />
      </div>
      <div className="center-footer">
        <ul>
          <li>Главная</li>
          <li>О нас</li>
          <li>Курсы</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div className="right-footer">
        <ul>
          <li>Aдрес: Cамарканд, Улица Зухра 32-дом</li>
          <li>Электронная почта: uzitacademy@gmil.com</li>
          <li>Тел номер: +998-33-233-80-80, +998-95-233-80-80</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer