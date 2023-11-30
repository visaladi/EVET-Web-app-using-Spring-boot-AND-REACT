import React, { useState } from "react";
import Nav from "../Nav/AfterNav";
import "./medicine.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Medicine() {
  let navigate = useNavigate();
  const [pet, setPet] = useState({
    mediname: "",
    quantity: "",
    price: "",
  });

  const onInputChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/savePet", pet);
      console.log("Response from server:", response.data); // Check the server response
      navigate("/medi");
    } catch (error) {
      console.error("Error while saving medicine:", error);
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
            <lable className="loglable">Medicine Name</lable>
            <br></br>
            <input
              className="loginput"
              type="text"
              name="mediname"
              onChange={(e) => onInputChange(e)}
            ></input>
            <br></br>
            <lable className="loglable">Quantity</lable>
            <br></br>
            <input
              className="loginput"
              type="text"
              name="quantity"
              onChange={(e) => onInputChange(e)}
            ></input>
            <br></br>
            <lable className="loglable">Price</lable>
            <br></br>
            <input
              className="loginput"
              type="text"
              name="price"
              onChange={(e) => onInputChange(e)}
            ></input>
            <br></br>
            <br></br>
            <div className="btn-group">
              <button className="logbtn" type="submit">
                Add Medicine
              </button>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Medicine;
