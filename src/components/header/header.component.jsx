import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {/* currentUser (state do user que foi passador por App.js) passa por um operador ternario, caso seja verdadeiro, renderizamos
    uma Div com um metodo de signOut provido pelo Auth, caso contrario (currentUser pode ser um objeto ou null) renderizamos um link
    para a página de signIn / registration
    */}
      {currentUser ? (
        <div
          className="option"
          onClick={() => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
// Link é como um <a>, porém, ele adiciona o '/variavel' na URL
export default Header;
