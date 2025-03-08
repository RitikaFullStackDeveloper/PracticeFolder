import React from "react";
import "./Panel.css";
import Card from "./Card";

 class Panel extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="heading">{this.props.showCart ? "Your Cart" : "Products List"}</h1>
        <div className="product-container">
          {this.props.showCart
            ? this.props.cartItems.map((product) => (
                <Card key={product.id} item={product} removeFromCart={this.props.removeFromCart} />
              ))
            : this.props.cartItemsList.map((product) => (
                <Card key={product.id} item={product} addCart={this.props.addCart} />
              ))}
        </div>
        {this.props.showCart && (
          <div className="checkout-section">
            <h2>Total Price: ₹{this.props.totalPrice}</h2>
            <button onClick={this.props.checkOut}>Checkout</button>
          </div>
        )}
      </div>
    );
  }
}

export default Panel;