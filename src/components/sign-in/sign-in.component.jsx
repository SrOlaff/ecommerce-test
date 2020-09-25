import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    /*
      Aqui no handle change ele usa um setState dinamico, a cada mudança nos componentes é extraido o nome do componente 
    e o valor da mudança,que é setado no setState, nesse caso, o componente tem o mesmo nome do state que eu quero mudar, 
    então eu consigo usar o nome do componentes como variavel no setState.
    */

    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" children="Submit Form" />
            <CustomButton
              onClick={signInWithGoogle}
              children="Sign in with Google"
              isGoogleSignIn
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
