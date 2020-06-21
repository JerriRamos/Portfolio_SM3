import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-scroll";

export default class nav extends Component {
  render() {
    return (
      <div id="nav">
        <ul>
          <li className="nome">
            <strong> J.C.RAMOS</strong>
            {/* eliminar depois o strong*/}
          </li>
          <li className="pd">
            <Link
              activeClass="active"
              to="div5"
              spy={true}
              smooth={true}
              offset={-30}
              duration={1000}
            >
              Contacts
            </Link>
          </li>
          <li className="pd">
            <Link
              activeClass="active"
              to="div4"
              spy={true}
              smooth={true}
              offset={-30}
              duration={1000}
            >
              Portfolio
            </Link>
          </li>
          <li className="pd">
            <Link
              activeClass="active"
              to="div3"
              spy={true}
              smooth={true}
              offset={-30}
              duration={1000}
            >
              Skills
            </Link>
          </li>
          <li className="pd">
            <Link
              activeClass="active"
              to="div2"
              spy={true}
              smooth={true}
              offset={-40}
              duration={1000}
            >
              About me
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
