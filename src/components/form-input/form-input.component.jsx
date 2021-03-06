import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}

        // Nessa parte do código ele faz um operador ternario com a props de email e senha, caso tenha algum valor, esse valor vai ser true
        // Ja que zero é false, além disso também está atribuindo ao label a classe form-input-label sem nenhuma condição

        // shrink é a propriedade que faz subir
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

// Nesse exemplo aqui, usamos o spread operator sem nada, aparentemente ele já passa a prop e o valor dela, também fizemos um label
// responsivo, caso exista um label iremos usar, caso não, não renderizamos o label
