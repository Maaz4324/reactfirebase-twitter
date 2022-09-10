import React, { useState } from "react";
import "../style/Login.css";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import google from "../images/google_logo.svg";

function Login() {
  const provider = new GoogleAuthProvider();

  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user.email);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="login_container">
      <h1 className="mb-1">Twitter Clone</h1>
      <div className="login_button df" onClick={signInWithGoogle}>
        <img src={google} alt="" />
        <button>Sign in with Google</button>
      </div>
    </div>
  );
}

export default Login;
