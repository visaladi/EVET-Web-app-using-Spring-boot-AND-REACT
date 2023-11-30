import React from "react";
import dog from "./img/nvdog.png";
import dogf from "./img/nvdogfoot.png";
import calan from "./img/medi.webp";
import call from "./img/call.png";
import db from "./img/db.png";
import dg from "./img/dg.png";
import hedphone from "./img/hedphone.png";
import home from "./img/home.png";
import note from "./img/note.png";
import { AiOutlineBars } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom";

function AfterNav() {
  return (
    <div>
      <section className="nav01">
        <div className="nav01-navitem">
          <div className="nav01-navitem1 navli">
            <img src={dogf} className="foot" alt="Dog Foot Logo" />
          </div>

          <div className="nav01-navitem2 navli">
            <h1 className="evet">EVET</h1>
          </div>
          <div className="nav01-navitem3 navli">
            <h1 className="res">
              it is Our Responsible Keep Your Animal Healthy
            </h1>
          </div>

          <div className="nav01-navitem4 navli">
            <Link to="/login">
              <img src={dog} className="dog" alt="Dog Logo" />
            </Link>
          </div>
        </div>
      </section>
      <section className="sidenavbar">
        <tr>
          <td class="sidenav">
            <div>
              <ul className="sidenav-ul">
                <li className="slidenav-ul">
                  <Link to="/" className="nav__link ">
                    <img src={home} className="navicon" alt="home Logo" />
                  </Link>
                </li>
                <li className="slidenav-ul">
                  <Link to="/product" className="nav__link ">
                    <img src={note} className="navicon" alt="note Logo" />
                  </Link>
                </li>
                <li className="slidenav-ul">
                  <Link to="/medi" className="nav__link ">
                    <img src={calan} className="navicon" alt="cal Logo" />
                  </Link>
                </li>
                <li className="slidenav-ul">
                  <Link to="/db" className="nav__link ">
                    <img src={db} className="navicon" alt="db Logo" />
                  </Link>
                </li>
                <li className="slidenav-ul">
                  <Link to="/chat" className="nav__link ">
                    <img
                      src={hedphone}
                      className="navicon"
                      alt="hedphone Logo"
                    />
                  </Link>
                </li>
                <li className="slidenav-ul">
                  <Link to="/contact" className="nav__link ">
                    <img src={call} className="navicon" alt="call Logo" />
                  </Link>
                </li>
                <li className="slidenav-ul">
                  <Link to="" className="nav__link ">
                    <img src={dg} className="navicondg" alt="call Logo" />
                  </Link>
                </li>
              </ul>
            </div>
          </td>
          {/*nav set 2*/}
          <td>
            <div className="navset2">
              <div className="navset2full">
                <div className="navset2details">
                  <Link to="/products" className="Link">
                    <p className="navname">
                      <AiOutlineBars className="naviconlg" />
                      Products
                    </p>
                  </Link>
                </div>
                <div className="navset2details">
                  <Link to="/appointments" className="Link">
                    <p className="navname">
                      <AiOutlineBars className="naviconlg" />
                      Appointments
                    </p>
                  </Link>
                </div>

                <div className="navset2details">
                  <Link to="/doctor" className="Link">
                    <p className="navname">
                      <AiOutlineBars className="naviconlg" />
                      Doctor
                    </p>
                  </Link>
                </div>
                <div className="navset2details">
                  <Link to="/injection" className="Link">
                    <p className="navname">
                      <AiOutlineBars className="naviconlg" />
                      Upcoming injection
                    </p>
                  </Link>
                </div>
                <div className="navset2details">
                  <Link to="/other" className="Link">
                    <p className="navname">
                      <AiOutlineBars className="naviconlg" />
                      Other Services
                    </p>
                  </Link>
                </div>
                <div className="navset2details2">
                  <p className="navname2">
                    <b>Contact Us</b>
                    <p>+94 837382873</p>
                    <p>1/2/3 rd lane,</p>
                    <p>london hill,</p>
                    <p>colombo 08,</p>
                    <p>adhidi2313@gmail.com</p>
                  </p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </section>
    </div>
  );
}

export default AfterNav;
