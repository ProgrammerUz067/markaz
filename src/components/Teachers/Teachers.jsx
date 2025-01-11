import React from "react";
import "./Teachers.css";
import main2 from '../../img/main2.png'

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

      <img src={main2} alt="" className="main3" />
    </div>
  );
};

export default Teachers;
