import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.log(user);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    console.log("this is login");
    e.preventDefault();
    if (!/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/.test(password)) {
      console.log("this is valid");
      setErrorLogin(
        "Password Must have at least one Upper, Lower case and number and 6 characters long"
      );
      return;
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleRegister = (e) => {
    console.log("i am register");
    e.preventDefault();
    if (!/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/.test(password)) {
      console.log("this is valid");
      setErrorRegister(
        "Must have at least one Upper,Lower case and number, 6 characters long"
      );
      return;
    }
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const signInUsingGoogle = () => {
    console.log("i am google sign in");
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribed;
  }, [auth]);

  return {
    user,
    setUser,
    errorLogin,
    setErrorLogin,
    errorRegister,
    setErrorRegister,
    isLoading,
    setIsLoading,
    handleName,
    setUserName,
    handleEmail,
    handlePassword,
    handleRegister,
    handleLogin,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
