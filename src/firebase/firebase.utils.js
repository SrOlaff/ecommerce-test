import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBb4SC6sbl1T9-V6MMmBK2RJNMtukXUCB8",
  authDomain: "crown-db-14c8c.firebaseapp.com",
  projectId: "crown-db-14c8c",
  storageBucket: "crown-db-14c8c.appspot.com",
  messagingSenderId: "452616882515",
  appId: "1:452616882515:web:12a72b21a7f86581e5f9a6",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // usamos o ref para os metodos crud
  const snapShot = await userRef.get(); // o snapshot é a informação do banco de dados

  if (!snapShot.exists) {
    // caso o .exists do snapshot seja falso significa que o usuario não existe, então criamos ele no banco de dados
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`an error ocorred creating the user ${error.message}`);
    }
  }
  return userRef; // e no final devolvemos o userRef, as informações do usuario
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
