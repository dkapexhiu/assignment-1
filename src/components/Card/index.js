import React, { Component } from "react";
import { CardLayout } from "./styles";
import { createDangerousMarkup } from "../../helpers";
import "./index.css"

class Card extends Component {
  render() {
    return (
      <CardLayout className="card">
        <img className="card-image" src={this.props.image} alt="" />
        <button className="button">Buy</button>
        <button className="category">Arts</button>
        <h1
          className="card-title"
          dangerouslySetInnerHTML={createDangerousMarkup(this.props.title)}
        />
        <p>{this.props.date}</p>
        <p>Watch on Zoom</p>
        <div class="price-favorite">
          <p>$100</p>
          <p className="favoriteicon">&#9825;</p>
        </div>
      </CardLayout>
    );
  }
}

export default Card;
