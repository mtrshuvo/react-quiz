import React from "react";
import SignUpImage from "../assets/images/signup.svg";
import Illustration from "../signupComponent/Illustration";
import SignupForm from "./SignupForm";

export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration alternateName="Sign up" image={SignUpImage} />
        <SignupForm />
      </div>
    </>
  );
}
