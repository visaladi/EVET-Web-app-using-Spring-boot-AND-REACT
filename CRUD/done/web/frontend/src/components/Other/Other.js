import React from "react";
import Nav from "../Nav/AfterNav";
import "./other.css";
import item1 from "./img/1.jpg";
import item2 from "./img/2.jpg";
import item3 from "./img/3.jpg";
import item4 from "./img/4.jpg";

function Other() {
  return (
    <div>
      <Nav />
      {/* cover photo */}
      <div className="maincontainer">
        <div className="coverhoto"></div>
      </div>
      {/* items set */}
      <div className="itemcontainerother">
        <div className="itemdetailsfull">
          <div className="itemcardother">
            <div className="itemimg">
              <img src={item1} className="item" alt="item1 Logo" />
            </div>
            <div className="itembtn">
              <button className="homebtnother">CHAT WITH DOCTOR (ONLINE)</button>
            </div>
          </div>

          <div className="itemcardother">
            <div className="itemimg">
              <img src={item2} className="item" alt="item1 Logo" />
            </div>
            <div className="itembtn">
              <button className="homebtnother">KNOW BETTER</button>
            </div>
          </div>

          <div className="itemcardother">
            <div className="itemimg">
              <img src={item3} className="item" alt="item1 Logo" />
            </div>
            <div className="itembtn">
              <button className="homebtnother">CHOOSE BETTER</button>
            </div>
          </div>

          <div className="itemcardother">
            <div className="itemimg">
              <img src={item4} className="item" alt="item1 Logo" />
            </div>
            <div className="itembtn">
              <button className="homebtnother">ABOUT US</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Other;
