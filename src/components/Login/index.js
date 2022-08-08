import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import axios from "axios";

function Login() {
  const [nameValid, setNameValid] = useState("");
  const [mailValid, setMailValid] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [nameValidate, setnameValidate] = useState();
  const [mailValidate, setmailValidate] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (nameValidate && mailValidate == true) {
      movieVideo();
      navigate("/home");
      console.log("true");
    }
  }, [nameValidate, mailValid]);

  async function movieVideo() {
    const key = await axios.get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=54848c6cfecb51d98584e9df33e167f3`
    );
    const token = key.data.request_token;
    localStorage.setItem("key", token);
  }

  const valid = (e) => {
    let nameReg = /[a-zA-Z]{3,10}/;
    let mailReg = /[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]/;

    e.preventDefault();
    if (nameReg.test(name)) {
      setNameValid("");
      setnameValidate(true);
    } else {
      setNameValid("Enter Valid Name");
      setnameValidate(false);
    }

    if (mailReg.test(mail)) {
      setMailValid("");
      setmailValidate(true);
    } else {
      setMailValid("Enter Valid Mail");
      setmailValidate(false);
    }
  };

  const validateName = (e) => {
    let nameVal = e.target.value;
    setName(nameVal);
  };

  const validateEmail = (e) => {
    let mailVal = e.target.value;
    setMail(mailVal);
  };

  return (
    <>
      <Header page={"login"} />
      <section className="login">
        <div className="container">
          <form className="loginForm" onSubmit={valid}>
            <div className="formContainer">
              <input
                type="text"
                onChange={validateName}
                placeholder="Enter User Name"
              />
              <span>{nameValid}</span>
            </div>
            <div className="formContainer">
              <input
                type="text"
                onChange={validateEmail}
                placeholder="Enter Mail"
              />
              <span>{mailValid}</span>
            </div>
            <div className="formContainer">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
