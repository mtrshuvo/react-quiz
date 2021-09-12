import React from "react";
import LoginImage from "../assets/images/login.svg";
import Illustration from "../signupComponent/Illustration";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration image={LoginImage} alternateName="Login" />
        <LoginForm />
      </div>
    </>
  );
}
