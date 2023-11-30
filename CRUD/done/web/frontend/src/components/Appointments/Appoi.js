import React from "react";
import "./appoi.css";
import Nav from "../Nav/AfterNav";
import { AiOutlineSearch } from "react-icons/ai";
function Appoi() {
  return (
    <div>
      <Nav></Nav>
      <div className="appointmentcontainer">
        <div className="appointment-full">
          <div className="detailsappointment">
            <h1 className="appointment-topic">Channel Your Doctor</h1>
            <div className="appointment-box">
                <div className="appointment-box-container">
                    <from>
                    
                        <input type="text" className="appointment-imput" placeholder="Doctor-Max 20 Characters"></input><br></br>
                        <input type="text" className="appointment-imput" placeholder="Any-Hospital"></input><br></br>
                        <input type="text" className="appointment-imput" placeholder="Any Specialization"></input><br></br>
                        <input type="date" className="appointment-imput" placeholder="Any Date"></input><br></br>
                        <button className="appbtn"><AiOutlineSearch className="serch"/>Search</button>
                    </from>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appoi;
