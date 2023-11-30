import React, { useEffect, useState } from "react";
import Nav from "../../Nav/AfterNav";
import "../medicine.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  let navigate = useNavigate();

  const { id } = useParams();
  const [pet, setPet] = useState({
    mediname: "",
    quantity: "",
    price: "",
  });

  const onInputChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Fetch the existing pet data and populate the state
    axios
      .get(`http://localhost:8080/getPet/${id}`)
      .then((response) => {
        setPet(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/updateData/${id}`,
        pet
      );
      console.log("Response from server:", response.data); // Check the server response
      navigate("/medi");
    } catch (error) {
      if (error.response) {
        console.error("Error response from server:", error.response.data);
      } else if (error.request) {
        console.error("Network error. No response received.");
      } else {
        console.error("Error while sending the request:", error.message);
      }
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
            <label className="loglabel">Medicine Name</label>
            <br></br>
            <input
              className="loginput"
              type="text"
              name="mediname"
              value={pet.mediname}
              onChange={(e) => onInputChange(e)}
            ></input>
            <br></br>
            <label className="loglabel">Quantity</label>
            <br></br>
            <input
              className="loginput"
              type="text"
              name="quantity"
              value={pet.quantity}
              onChange={(e) => onInputChange(e)}
            ></input>
            <br></br>
            <label className="loglabel">Price</label>
            <br></br>
            <input
              className="loginput"
              type="text"
              name="price"
              value={pet.price}
              onChange={(e) => onInputChange(e)}
            ></input>
            <br></br>
            <br></br>
            <div className="btn-group">
              <button className="logbtn" type="submit">
                Update Medicine
              </button>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
