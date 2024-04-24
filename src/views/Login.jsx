// imports
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Button from "../components/UI/Button";

const Login = () => {

  const [toggleForm, setToggle] = useState(true);

  const toggle = () => {
    setToggle(!toggleForm);
  };

    return (
      <>
        {toggleForm ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
        <Button text={toggleForm ? "Go to Register" : "Go to Login" }
        handleclick={toggle} />
      </>
    );
};
  
export default Login;