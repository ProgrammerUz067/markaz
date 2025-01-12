import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map">
      <h1 className="map-title">Мы здесь</h1>

      <div>
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=66.989284%2C39.688934&mode=search&oid=41170032874&ol=biz&z=16.73"
          width="1450"
          height="300"
          frameborder="0"
          allowfullscreen="true"
          className="map-map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
