import React from "react";
import Nav from "../Nav/AfterNav";
import "./upcoming.css";
import doc from "./img/dc.png";
function Upcoming() {
  return (
    <div>
      <Nav />
      <div className="first-bar">
        <div className="bar-detail">
          <tr>
            <td>
              <h1>MEDICATION SCHEDULE</h1>
              <p>Doctor______________</p>
            </td>
            <td>
              <h1 className="com">
                www.typecalander.com{" "}
                <img src={doc} className="docimg" alt="item1 Logo" />
              </h1>
            </td>
          </tr>
        </div>
      </div>
      <div className="tblcontainer">
        <div className="tblfill">
          <tr>
            <td>
              <div className="tblful">
                <tr className="table-doctr">
                  <td className="table-doctd">MEDICATION</td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
              </div>
            </td>
            <td className="table-space"></td>
            <td>
              <div className="tblful">
                <tr className="table-doctr">
                  <td className="table-doctd">Date</td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
              </div>
            </td>
            <td className="table-space"></td>
            <td>
              <div className="tblful">
                <tr className="table-doctr">
                  <td className="table-doctd">MORNING</td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
              </div>
            </td>
            <td className="table-space"></td>
            <td>
              <div className="tblful">
                <tr className="table-doctr">
                  <td className="table-doctd">LUNCH</td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
                <tr className="table-doctr">
                  <td className="table-doctdr"></td>
                </tr>
              </div>
            </td>
          </tr>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
