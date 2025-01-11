import React from "react";
import "./About.css";
import about from "../../img/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="model">
        <div className="imgg-wrapper">
          <img src={about} alt="" />
        </div>
        <div className="textt-wrapper">
          <h1 className="tit">О нас</h1>
          <p className="des">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            nostrum eveniet illo esse ipsam nam veniam quia labore a, sapiente
            fugiat repellat. Nesciunt fuga dolorem laudantium ex molestiae
            voluptatum culpa quia ad reiciendis voluptates suscipit perspiciatis
            labore dolores, saepe tempora?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
