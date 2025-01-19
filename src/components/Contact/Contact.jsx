import React from "react";
import "./Contact.css";
import name from "../../img/name.png"
import email from "../../img/email.png"
import flag from "../../img/flag.png"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-model">
        <div className="text-contact">
          <h1 className="title-contact">Поможем решить все вопросы</h1>
          <p className="subtitle-contact">
            Если вы хотите больше узнать o UZITgroup или ест возникшие вопросы,
            оставьте заявку - и мы перезвоним
          </p>
        </div>
        <div className="form-contact">
          <form>
            <img src={name} className="name-input" alt="" />
            <input type="text" placeholder="Имя" />
            <img src={email} className="email-input" alt="" />
            <input type="email" placeholder="Электронная почта" />
            <img src={flag} className="flag-input" alt="" />
            <input type="number" placeholder="Телефон" />
            <button className="btn-submit">Oтправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
