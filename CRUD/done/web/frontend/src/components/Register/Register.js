import React, { useState } from "react";
import Nav from "../Nav/AfterNav";
import "./Reg.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (user.email === "") {
      setErrors({ ...errors, emailError: "Please enter an email address" });
      return;
    }

    if (user.password === "") {
      setErrors({ ...errors, passwordError: "Please enter a password" });
      return;
    }


    try {
      const response = await axios.post("http://localhost:8000/saveUser", user);

      if (response.status === 200) {
        // Redirect to the dashboard or another page on successful registration
        navigate("/");
      } else {
        
        console.log("Registration failed");
        
        // Handle registration failure, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error while sending data to the server:", error.response);
      
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <Nav />
      {/* cover photo */}
      <div className="maincontainer">
        <div className="coverhoto"></div>
      </div>
      <div className="regcontainer">
        <div className="logform">
          <form onSubmit={(e) => onSubmit(e)}>
            <lable className="loglable">Gmail</lable>
            <br></br>
            <input
              className="loginput"
              type="email"
              name="email"
              required
              onChange={(e) => onInputChange(e)}
            ></input>
            <br></br>
            <lable className="loglable">Password</lable>
            <br></br>
            <input
              className="loginput"
              type="password"
              name="password"
              required
              onChange={(e) => onInputChange(e)}
            ></input>
            <br></br>

            <br></br>
            <br></br>
            <div className="btn-group">
              <button className="logbtn" type="submit">
                Sign in
              </button>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
