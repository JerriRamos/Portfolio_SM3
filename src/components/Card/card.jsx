import React, { Component } from "react";
import "./card.css";

export default class card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.url} alt="Avatar" width="100px" height="90px" />
        <div className="container">
          <h4>
            <b>{this.props.nome}</b>
          </h4>
          <p className="a">{this.props.star}</p>
          <p className="a">{this.props.star2}</p>
          <p className="a">{this.props.star3}</p>
          <p className="a">{this.props.star4}</p>
          <p className="a">{this.props.star5}</p>
        </div>
      </div>
    );
  }
}
