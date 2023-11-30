import React, { useState } from "react";
import Nav from "../Nav/AfterNav";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", user);

      if (response.status === 200) {
        // Redirect to the dashboard or another page on successful login
        navigate("/");
      } else {
        setError("Invalid email or password.");
        console.log("Invalid credentials");
        // Handle invalid credentials, e.g., show an error message to the user
      }
    } catch (error) {
      setError("Error while sending data to the server. Please try again.");
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
      <div className="logincontainer">
        <div className="logform">
          <form onSubmit={onSubmit}>
            <label className="loglabel">Email</label>
            <br></br>
            <input
              className="loginput"
              type="email"
              name="email"
              onChange={(e) => onInputChange(e)}
            ></input>
            <br></br>
            <label className="loglabel">Password</label>
            <br></br>
            <input
              className="loginput"
              type="password"
              name="password"
              onChange={(e) => onInputChange(e)}
            ></input>
            <br></br>
            <br></br>
            <div className="btn-group">
              <button className="logbtn" type="submit">
                Login
              </button>
              <br></br>
              <Link to="/reg">
                <button className="logbtn" type="submit">
                  Sign in
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
