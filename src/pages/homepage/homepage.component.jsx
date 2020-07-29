import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  // os parênteses substituem o uso do return, caso eu usasse o colchete teria que colocar o return
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
