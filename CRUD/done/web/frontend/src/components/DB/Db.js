import React from "react";
import Nav from "../Nav/AfterNav";
import "./db.css";
function Db() {
  return (
    <div>
      <Nav />
      {/* cover photo */}
      <div className="maincontainer">
        <div className="coverhoto"></div>
      </div>
      <div className="db-container">
        <table className="db-table">
          <tr className="db-tr">
            <td className="db-td">
              <ul>
                <li>H/O Danger signs</li>
              </ul>
            </td>
            <td className="db-td">
              <ul>
                <li>Home environment</li>
              </ul>
            </td>
            <td className="db-td">
              <ul>
                <li>Four 'Griatric Giants'</li>
              </ul>
              <ol type="a">
                <li>Memory loss</li>
                <li>Depression</li>
                <li>Urinary Incontinence</li>
                <li>Falls/immobility</li>
              </ol>
            </td>
          </tr>
          <tr className="db-tr">
            <td className="db-td">
              <ul>
                <li>Prenatal</li>
                <li>Natal</li>
                <li>Postnatal</li>
                <li>Feeding</li>
                <li>Developmenta i and</li>
                <li>Immunization history</li>
              </ul>
            </td>
            <td className="db-td">
              <ul>
                <li>Educationl/employment history</li>
                <li>Physical activity and hobbies</li>
                <li>Drugs and alcohol</li>
                <li>History suggestive of suicide</li>
              </ul>
            </td>
            <td className="db-td">
              <ul>
                <li>Joint Pain</li>
                <li>Dysuria/nocturia/frequency</li>
                <li>Hearing loss</li>
                <li>Vision,sysmprons of cataract and glaucoma</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Db;
