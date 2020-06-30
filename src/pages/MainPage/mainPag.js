import React, { Component } from "react";
import Navbar from "../../components/Navbar/nav";
import "./mainPag.css";
import img from "../../img/1.jpg";
import { Link } from "react-scroll";
import "@fortawesome/fontawesome-free/css/all.css";
import Card from "../../components/Card/card";
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
  //Inicio
  state = {
    newNome: "",
    newEmail: "",
    newMsg: "",
    usuarios: [],
  };

  /*funcao input*/
  handleInputNome = (e) => {
    // console.log(e.target.value);
    this.setState({ newNome: e.target.value });
  };
  handleInputEmail = (e) => {
    // console.log(e.target.value);
    this.setState({ newEmail: e.target.value });
  };
  handleInputMsg = (e) => {
    // console.log(e.target.value);
    this.setState({ newMsg: e.target.value });
  };

  //pegar os dados do LStr
  componentDidMount() {
    const usuarios = localStorage.getItem("usuarios");
    if (usuarios) {
      this.setState({ usuarios: JSON.parse(usuarios) });
    }
  }
  /*salvar dados no storage*/
  componentDidUpdate(_, prevState) {
    if (prevState !== this.state.usuarios) {
      localStorage.setItem("usuarios", JSON.stringify(this.state.usuarios));
    }
  }
  /*add no state um novo student */
  handleFromSubmit = (e) => {
    e.preventDefault();
    this.setState({
      //   /*adicionar dados no array state*/
      usuarios: [...this.state.usuarios, this.state.newUsuario],

      newUsuario: {
        nome: this.state.newNome,
        email: this.state.newEmail,
        msg: this.state.newMsg,
      },
      newNome: "",
      newEmail: "",
      newMsg: "",
    });
    // console.log(this.state.usuarios);
  };
  //Fim
  render() {
    console.log(this.state.usuarios);
    return (
      <div id="mainCenter">
        <Navbar />
        <section id="section1">
          <div id="div1">
            <div id="div1_1">
              <img src={img} alt="avatar" className="avatar" />
            </div>
            <span>
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                My name Jerri Ramos. A Web Developer based in Cabo Verde.
              </SplitText>
            </span>
          </div>
        </section>
        <section id="section2">
          <div id="div2">
            <p className="about">About me</p>
            <br />
            <p className="about2">
              Hi, I'm Jeras – Software/Hardawre Engineer from Cabo Verde. I'm
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
        </section>
        <section id="section3">
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
        </section>
        <section id="section4">
          <div id="div4">
            <p className="about">Portfolio</p>
            <br />
            <p className="skills2" style={{ color: "white" }}>
              My corrent works as
            </p>
            <br />
            <br />
            <div className="portMain">
              <div className="port1">Proj2</div>
              <div className="port2">Proj1</div>
              <div className="port3">Proj4</div>
              <div className="port4">Proj3</div>
              <div className="port5">Proj6</div>
              <div className="port6">Proj5</div>
            </div>
          </div>
        </section>
        <section id="section5">
          <div id="div5">
            <p className="skills">Contats</p>
            <br />
            <div className="mainCol">
              <div className="col1">
                <div className="cont">
                  <i className="fas fa-phone-square-alt phone"></i>
                  <ul>
                    <li>Phone</li>
                    <li>+235 9529899</li>
                  </ul>
                </div>
                <div className="cont">
                  <i className="fas fa-envelope-square envelope"></i>
                  <ul>
                    <li>Email</li>
                    <li>jerryramos1995@gmail.com</li>
                  </ul>
                </div>
                <div className="cont">
                  <i className="fas fa-globe-europe globe"></i>
                  <ul>
                    <li>Location</li>
                    <li>Cabo Verde, Sao Vicente</li>
                  </ul>
                </div>
              </div>
              <div className="col2">
                <div className="cont">
                  <i className="fab fa-linkedin linkedin"></i>
                  <ul>
                    <li>Linkedin</li>
                    <li>linkedin.com/in/jeras1995</li>
                  </ul>
                </div>
                <div className="cont">
                  <i className="fab fa-facebook-square facebook"></i>
                  <ul>
                    <li>FaceBook</li>
                    <li>facebook.com/jeras.dx.xd</li>
                  </ul>
                </div>
                <div className="cont">
                  <i className="fab fa-github github"></i>
                  <ul>
                    <li>GitHub</li>
                    <li>github.com/JerriRamos</li>
                  </ul>
                </div>
              </div>
              <div className="col3">
                <form>
                  <h1 className="feed">Feedback!</h1>
                  <input
                    type="text"
                    placeholder="Nome"
                    id="nome"
                    name="nome"
                    onChange={this.handleInputNome}
                    value={this.state.newNome}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    onChange={this.handleInputEmail}
                    value={this.state.newEmail}
                  />
                  <textarea
                    placeholder="Digite sua Mensagem aqui"
                    id="caixaTexto"
                    name="caixaTexto"
                    onChange={this.handleInputMsg}
                    value={this.state.newMsg}
                    type="text"
                  />
                  <button type="submit" onClick={this.handleFromSubmit}>
                    Enviar
                  </button>
                </form>
              </div>
            </div>
            <div className="copy">
              <span className="span1">Copyright © 2020</span>{" "}
              <span className="span2">Jeras.Dev</span>
            </div>
          </div>
        </section>
        <Link
          to="section1"
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
