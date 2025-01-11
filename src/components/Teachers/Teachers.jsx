import React from "react";
import "./Teachers.css";
import roma from "../../img/roma.png";
import diyor from "../../img/diyor.png";
import ramiz from "../../img/ramiz.png";
import shakhnoza from "../../img/shakhnoza.png";

const Teachers = () => {
  return (
    <div className="teachers">
      <h1 className="tittle">Наши учителя</h1>
      <br />
      <div className="container">
        <div class="card">
          <div class="content">
            <h3>Рома Садыков</h3>
            <p>Учитель по front-end разработки (rus)</p>
          </div>
        </div>

        <div class="card2">
          <div class="content">
            <h3>Диёр Хасанов</h3>
            <p>Учитель по front-end разработки (uzb)</p>
          </div>
        </div>

        <div class="card3">
          <div class="content">
            <h3>Рамизжон Зиёдуллаев</h3>
            <p>Учитель по back-end разработки (uzb)</p>
          </div>
        </div>

        <div class="card4">
          <div class="content">
            <h3>Шахноза Назарова</h3>
            <p>Учитель по Английский язык</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
