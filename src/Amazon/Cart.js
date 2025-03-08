import React from "react";
import "./Header.css";

export default class Cart extends React.Component {
  render() {
    return (
      <div className="cart-image" onClick={() => this.props.toggleCartPanel()}>
        <span>{this.props.cartCount}</span>
        <img className="cart-one" src="cart.png" alt="Shopping Cart" />
      </div>
    );
  }
}


