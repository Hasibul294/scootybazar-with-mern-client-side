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
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleName = (e) => {
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
    if (!/(?=.*?[0-9]).{6,}$/.test(password)) {
      setErrorLogin(
        "Password Must have at least one Upper, Lower case and number and 6 characters long"
      );
      return;
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleRegister = (history) => {
    if (!/(?=.*?[0-9]).{6,}$/.test(password)) {
      setErrorRegister(
        "Must have at least one Upper,Lower case and number, 6 characters long"
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setErrorRegister("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user to database
        saveUser(email, name, "POST");
        setUserName();
        alert("User Registration Successfully");
        history.push("/home");
      })
      .catch((error) => {
        setErrorRegister(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const signInUsingGoogle = () => {
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

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    name,
    user,
    admin,
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
    saveUser,
  };
};

export default useFirebase;
