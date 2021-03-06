import firebase from "firebase/app";

import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("8F3vwf4eVeW7juJCO5oB")
  .collection("cartItems")
  .doc("xIXqMtBldMcvbQWCxS35");

firestore.doc("/users/8F3vwf4eVeW7juJCO5oB/cartItems/xIXqMtBldMcvbQWCxS35");
firestore.collection('"/users/8F3vwf4eVeW7juJCO5oB/cartItems/');
