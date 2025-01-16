import React from "react";
import "./Main.css";
import main from "../../img/main.png";

const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="text-wrapper">
          <h1 className="title">
            Школа знаний для всех:{" "}
            <span>от ментальной арифметики до создания IT-решений!</span>
          </h1>

          <p className="subtitle">Мозг в тонусе, навыки на высоте!</p>
        </div>
        <div className="img-wrapper">
          <img src={main} alt="png" />
        </div>
      </div>
      <div className="main2">
        {/* <div className="grey"></div> */}
      </div>
    </div>
  );
};

export default Main;
