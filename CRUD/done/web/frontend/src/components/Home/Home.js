import React from "react";
import Nav from "../Nav/AfterNav";
import "./Home.css";
import item1 from "./img/item1.webp";
import item2 from "./img/item2.webp";
import item3 from "./img/item3.webp";
import item4 from "./img/item4.webp";
import item5 from "./img/item5.webp";
import item6 from "./img/item6.webp";
import item7 from "./img/item7.webp";
function Home() {
  return (
    <div>
      <Nav />
      {/* cover photo */}
      <div className="maincontainer">
        <div className="coverhoto"></div>
      </div>
      {/* items set */}
      <div className="itemcontainer">
        <div className="itemdetailsfull">
          <div className="itemcard">
            <div className="itemimg">
              <img src={item1} className="item" alt="item1 Logo" />
            </div>
            <div className="itemdetails">
              <span className="price">$89.00</span>
              <br></br>
              <span className="itenmtopics">
                Fido’s Chew Stop Bitter Spray for Puppy and Dogs
              </span>
            </div>
            <div className="itembtn">
              <button className="homebtn">Add to Cart</button>
            </div>
          </div>

          <div className="itemcard">
            <div className="itemimg">
              <img src={item2} className="item" alt="item1 Logo" />
            </div>
            <div className="itemdetails">
              <span className="price">$70.00</span>
              <br></br>
              <span className="itenmtopics">
                Fido’s Chew Stop Bitter Spray for Puppy and Dogs
              </span>
            </div>
            <div className="itembtn">
              <button className="homebtn">Add to Cart</button>
            </div>
          </div>

          <div className="itemcard">
            <div className="itemimg">
              <img src={item3} className="item" alt="item1 Logo" />
            </div>
            <div className="itemdetails">
              <span className="price">$9.00</span>
              <br></br>
              <span className="itenmtopics">
                Fido’s Chew Stop Bitter Spray for Puppy and Dogs
              </span>
            </div>
            <div className="itembtn">
              <button className="homebtn">Add to Cart</button>
            </div>
          </div>

          <div className="itemcard">
            <div className="itemimg">
              <img src={item4} className="item" alt="item1 Logo" />
            </div>
            <div className="itemdetails">
              <span className="price">$8 .00</span>
              <br></br>
              <span className="itenmtopics">
                Fido’s Chew Stop Bitter Spray for Puppy and Dogs
              </span>
            </div>
            <div className="itembtn">
              <button className="homebtn">Add to Cart</button>
            </div>
          </div>

          <div className="itemcard">
            <div className="itemimg">
              <img src={item5} className="item" alt="item1 Logo" />
            </div>
            <div className="itemdetails">
              <span className="price">$89.00</span>
              <br></br>
              <span className="itenmtopics">
                Fido’s Chew Stop Bitter Spray for Puppy and Dogs
              </span>
            </div>
            <div className="itembtn">
              <button className="homebtn">Add to Cart</button>
            </div>
          </div>
          <div className="itemcard">
            <div className="itemimg">
              <img src={item6} className="item" alt="item1 Logo" />
            </div>
            <div className="itemdetails">
              <span className="price">$89.00</span>
              <br></br>
              <span className="itenmtopics">
                Fido’s Chew Stop Bitter Spray for Puppy and Dogs
              </span>
            </div>
            <div className="itembtn">
              <button className="homebtn">Add to Cart</button>
            </div>
          </div>
          <div className="itemcard">
            <div className="itemimg">
              <img src={item7} className="item" alt="item1 Logo" />
            </div>
            <div className="itemdetails">
              <span className="price">$89.00</span>
              <br></br>
              <span className="itenmtopics">
                Fido’s Chew Stop Bitter Spray for Puppy and Dogs
              </span>
            </div>
            <div className="itembtn">
              <button className="homebtn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
