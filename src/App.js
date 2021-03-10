import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component.jsx";
import Header from "./components/header/header.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  /* o componentDidMount está sendo utilizado para saber se o user está logado ou não, caso esteja, pegamos as informações dele
  no firebase, porém essa conexão é aberta, acontece a todo momento na aplicação, devido a isso, quand o componente for desmontado
  precisamos também parar essa conexão, fazemos isso chamando a função mais uma vez quando o componente for desmontar
  */
  unsubscribeFromAuth = null;
  componentDidMount() {
    // O metodo onAuthStateChanged (quem vem da biblioteca auth, do Firebase) server com um listener do state do user

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state.currentUser);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
