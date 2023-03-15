import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { signIn } = useAuth();
  const [successMsg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    signIn(formValues.username, formValues.password)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    toast.success("Logged in successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "UserName is Required!";
    }
    if (!values.password) {
      errors.username = "Password is Required!";
    } else if (values.password < 8) {
      errors.password = "Minimum password length 8 characters!";
    }
    return errors;
  };

  return (
    <div>
      <div className="loginPage">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h2>Login</h2>
            <br />
            <form onSubmit={handleSubmit}>
              <input
                name="username"
                value={formValues.username}
                onChange={handleChange}
                placeholder="Username or email"
                type="text"
                className="inputField"
              />
              <p>{formErrors.username}</p>
              <br />
              <br />
              <input
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
                className="inputField"
              />
              <br />
              <br />
              <p>{formErrors.password}</p>

              <input type="submit" className="btn btn-warning w-50" />
            </form>
            <br />
            <br />
            <p>
              Don't have an account yet?<Link to="/register">Sign up now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
