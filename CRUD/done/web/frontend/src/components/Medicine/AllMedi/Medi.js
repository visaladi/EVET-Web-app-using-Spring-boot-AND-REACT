import React, { useEffect, useState } from "react";
import Nav from "../../Nav/AfterNav";
import "../medicine.css";
import "./Medi.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Medi() {
  const [medi, setMedi] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadmedicine();
  }, []);

  const loadmedicine = async () => {
    try {
      const result = await axios.get("http://localhost:8080/getAllPet"); // Add "http://"
      setMedi(result.data);
    } catch (error) {
      console.error("Error loading medicine:", error);
    }
  };
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deletePet/${id}`);
      loadmedicine();
    } catch (error) {
      console.error("Error deleting medicine:", error.response.data);
    }
  };

  return (
    <div>
      <Nav />
      {/* cover photo */}
      <div className="maincontainer">
        <div className="coverhoto"></div>
      </div>
      {/* product Info */}
      <div className="medicontainer">
        <div className="product-add-btn">
          <Link to="/addmedi">
            <button className="addproductbtn">Add Medicine</button>
          </Link>
        </div>
        <div className="product-tbl">
          <div className="product-table-container">
            <table id="customers">
              <tr className="cus-tr">
                <th className="cus-th">ID</th>
                <th className="cus-th">Medicine Name</th>
                <th className="cus-th">Medicine Quantity</th>
                <th className="cus-th">Medicine Price</th>
                <th className="cus-th">Actions</th>
              </tr>
              {medi.map((medi, index) => (
                <tr className="cus-tr" key={index}>
                  <td className="cus-td">{index + 1}</td>
                  <td className="cus-td">{medi.mediname}</td>
                  <td className="cus-td">{medi.quantity}</td>
                  <td className="cus-td red">{medi.price}</td>
                  <td className="cus-td">
                    <button className="updatebtn">
                      <Link to={`/updatemedi/${medi.id}`} className="Link">
                        Update
                      </Link>
                    </button>

                    <button
                      className="deletebtn"
                      onClick={() => deleteUser(medi.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medi;
