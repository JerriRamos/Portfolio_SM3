import React, { Component } from "react";
import Navbar from "../components/Navbar/nav";
import "./mainPag.css";
import img from "../img/1.jpg";
import { Link } from "react-scroll";
import "@fortawesome/fontawesome-free/css/all.css";

export default class mainPag extends Component {
  render() {
    return (
      <div id="mainCenter">
        <Navbar />
        <div id="div1">
          <div id="div1_1">
            <img src={img} alt="" />
          </div>
          <p>
            I’m Jerri Ramos. <br></br> A Software Developer<br></br>
            <span>based in Cabo Verde.</span>
          </p>
        </div>
        <div id="div2">
          <p className="about">About me</p>
          <p className="about2">
            Hi, I'm Jeras – Software/Hardawre engineer from Cabo Verde. I'm
            interested in Programming and everything connected with it.
            <br></br>
            <br></br>
            I'm studying at courses "Engenharia informatica e sistema
            computacionais" in University of Mindelo.
            <br></br>
            <br></br>
            Ready to implement excellent projects with wonderful people.
          </p>
        </div>
        <div id="div3">
          <p className="skills">My Skills</p>
          <p className="skills2">I work in such programs as</p>
        </div>
        <div id="div4"></div>
        <div id="div5"></div>
        <Link
          activeClass="active"
          to="div1"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1000}
        >
          <i className="fas fa-arrow-alt-circle-up fa-3x" id="arrowUp"></i>
        </Link>
      </div>
    );
  }
}
