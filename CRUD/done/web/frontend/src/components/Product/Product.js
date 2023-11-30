import React from "react";
import Nav from "../Nav/AfterNav";
import "./product.css";
function Producr() {
  return (
    <div>
      <Nav />
      {/* cover photo */}
      <div className="maincontainer">
        <div className="coverhoto"></div>
      </div>
      {/* product Info */}
      <div className="product-container">
        <div className="product-table-container">
          <table id="customers">
            <tr className="cus-tr">
              <th className="cus-th">Product Name</th>
              <th className="cus-th">Product Descriptions</th>
              <th className="cus-th">Price</th>
            </tr>
            <tr className="cus-tr">
              <td className="cus-td"><input type="checkbox"></input>R1</td>
              <td className="cus-td">Inflammation Drops</td>
              <td className="cus-td red">Rs.250.00</td>
            </tr>
            <tr className="cus-tr">
              <td className="cus-td"><input type="checkbox"></input>R2</td>
              <td className="cus-td">Gold Drops</td>
              <td className="cus-td red">Rs.250.00</td>
            </tr>
            <tr className="cus-tr">
              <td className="cus-td"><input type="checkbox"></input>R3</td>
              <td className="cus-td">Blockage and Valvur</td>
              <td className="cus-td red">Rs.250.00</td>
            </tr>
            <tr className="cus-tr">
              <td className="cus-td"><input type="checkbox"></input>R4</td>
              <td className="cus-td">Diarrhoea Drops</td>
              <td className="cus-td red">Rs.250.00</td>
            </tr>
            <tr className="cus-tr">
              <td className="cus-td"><input type="checkbox"></input>R5</td>
              <td className="cus-td">Digestion Drops</td>
              <td className="cus-td red">Rs.250.00</td>
            </tr>
            <tr className="cus-tr">
              <td className="cus-td"><input type="checkbox"></input>R6</td>
              <td className="cus-td">Influenza Drops</td>
              <td className="cus-td red">Rs.250.00</td>
            </tr>
            <tr className="cus-tr">
              <td className="cus-td"><input type="checkbox"></input>R7</td>
              <td className="cus-td">Liver Drops</td>
              <td className="cus-td red">Rs.250.00</td>
            </tr>
            <tr className="cus-tr">
              <td className="cus-td"><input type="checkbox"></input>R8</td>
              <td className="cus-td">Cough drops</td>
              <td className="cus-td red">Rs.250.00</td>
            </tr>
            <tr className="cus-tr">
              <td className="cus-td"><input type="checkbox"></input>R9</td>
              <td className="cus-td">Cough Syrup</td>
              <td className="cus-td red">Rs.250.00</td>
            </tr>
            <tr className="cus-tr">
              <td className="cus-td"><input type="checkbox"></input>R10</td>
              <td className="cus-td">drops</td>
              <td className="cus-td red">Rs.250.00</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Producr;
