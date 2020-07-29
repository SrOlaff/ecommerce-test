import React from "react";
import "./menu-item.styles.scss";
const MenuItem = ({ title, image, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;

// usamos o classname com colchetes pois assim o react sabe que o que está dentro pode ser um codigo javascript
// então utilizamos a interpolação, criando uma classe large caso size seja passado como props
