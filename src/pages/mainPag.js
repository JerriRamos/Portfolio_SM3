import React, { Component } from "react";
import Navbar from "../components/Navbar/nav";
import "./mainPag.css";
import img from "../img/1.jpg";
import { Link } from "react-scroll";
import "@fortawesome/fontawesome-free/css/all.css";
import Card from "../components/Card/card";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 50,
  },
};

export default class mainPag extends Component {
  render() {
    return (
      <div id="mainCenter">
        <Navbar />
        <div id="div1">
          <div id="div1_1">
            <img src={img} alt="avatar" className="avatar" />
          </div>
          <p>
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              My name Jerri Ramos. A Software Developer based in Cabo Verde.
            </SplitText>
          </p>
        </div>
        <div id="div2">
          <p className="about">About me</p>
          <br />
          <p className="about2">
            Hi, I'm Jeras – Software/Hardawre engineer from Cabo Verde. I'm
            interested in Programming and everything connected with it.
            <br />
            <br />
            I'm studying at courses "Engenharia Informatica e Sistema
            Computacionais" in University of Mindelo.
            <br />
            <br />
            Ready to implement excellent projects with wonderful people.
          </p>
        </div>
        <div id="div3">
          <p className="skills">My Skills</p>
          <br />
          <p className="skills2">I work in such programs as</p>
          <br />
          <br />
          <Card
            url="https://cdn.icon-icons.com/icons2/1488/PNG/512/5347-github_102542.png"
            nome="GitHub Git"
            star={<i className="fas fa-star"></i>}
            star2={<i className="fas fa-star"></i>}
            star3={<i className="fas fa-star"></i>}
            star4={<i className="far fa-star"></i>}
            star5={<i className="far fa-star"></i>}
          />

          <Card
            nome="Adobe Illustrator"
            url="https://upload.wikimedia.org/wikipedia/commons/d/d8/Adobe_Illustrator_Icon_CS6.png"
            star={<i className="fas fa-star"></i>}
            star2={<i className="fas fa-star"></i>}
            star3={<i className="fas fa-star"></i>}
            star4={<i className="far fa-star"></i>}
            star5={<i className="far fa-star"></i>}
          />
          <Card
            nome="Php 5"
            url="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/2132470731553750209-512.png"
            star={<i className="fas fa-star"></i>}
            star2={<i className="fas fa-star"></i>}
            star3={<i className="fas fa-star"></i>}
            star4={<i className="far fa-star"></i>}
            star5={<i className="far fa-star"></i>}
          />
          <Card
            nome="Figma"
            url="https://4.bp.blogspot.com/-LiJZ5I8E7K8/XIe_GeI5glI/AAAAAAAAIuw/4Awu8j8r0P8TKBXzyxyslHEfplOlK9-6QCK4BGAYYCw/s1600/icon%2Bfigma%2Bvector.png"
            star={<i className="fas fa-star"></i>}
            star2={<i className="fas fa-star"></i>}
            star3={<i className="fas fa-star"></i>}
            star4={<i className="far fa-star"></i>}
            star5={<i className="far fa-star"></i>}
          />
          <Card
            nome="WorPress"
            url="https://www.searchpng.com/wp-content/uploads/2019/02/Wordpress-Icon-PNG.png"
            star={<i className="fas fa-star"></i>}
            star2={<i className="fas fa-star"></i>}
            star3={<i className="fas fa-star"></i>}
            star4={<i className="far fa-star"></i>}
            star5={<i className="far fa-star"></i>}
          />
          <Card
            nome="Office"
            url="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-office-icon.png"
            star={<i className="fas fa-star"></i>}
            star2={<i className="fas fa-star"></i>}
            star3={<i className="fas fa-star"></i>}
            star4={<i className="fas fa-star"></i>}
            star5={<i className="far fa-star"></i>}
          />
          <Card
            nome="Windows"
            url="https://cdn.iconscout.com/icon/free/png-256/windows-xp-2-570110.png"
            star={<i className="fas fa-star"></i>}
            star2={<i className="fas fa-star"></i>}
            star3={<i className="fas fa-star"></i>}
            star4={<i className="fas fa-star"></i>}
            star5={<i className="far fa-star"></i>}
          />
          <Card
            nome="Ubuntu"
            url="https://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/512/MetroUI-Folder-OS-Ubuntu-Alt-icon.png"
            star={<i className="fas fa-star"></i>}
            star2={<i className="fas fa-star"></i>}
            star3={<i className="fas fa-star"></i>}
            star4={<i className="far fa-star"></i>}
            star5={<i className="far fa-star"></i>}
          />
        </div>
        <div id="div4">
          <p className="about">Portfolio</p>
          <br />
        </div>
        <div id="div5">
          <p className="skills">
            <center>Contats</center>
          </p>
          <br />
        </div>
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
