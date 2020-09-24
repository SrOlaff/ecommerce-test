import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.push(linkUrl);
    }}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

// usamos o className com colchetes pois assim o react sabe que o que está dentro pode ser um codigo javascript
// então utilizamos a interpolação, criando uma classe large caso size seja passado como props
// usamos o withRouter() pois ai podemos usar o metodo history do react-router-dom
