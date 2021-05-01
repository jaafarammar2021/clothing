import React from "react";
import "./signin-signup.scss";
import SignIn from "../../components/signin/signin";
import SignUp from "../../components/sign-up/sign-up";

const SignInandSignUpPage = () => (
  <div className="sign-in-sign-out">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInandSignUpPage;
