import React from "react";
import "./Card.css";

 class Card extends React.Component {
  render() {
    return (
      // product-container
      <div className="product-container">
         <img src={this.props.item.image} alt={this.props.item.name} className="product-image" />
         <h3>{this.props.item.name}</h3>
         <p className="product-price">₹{this.props.item.price}</p>
         {this.props.addCart ? (
             <button onClick={() => this.props.addCart(this.props.item)} className="add-to-cart">
             Add to Cart
           </button>
       ) : (
        <button onClick={() => this.props.removeFromCart(this.props.item.id)} className="remove-from-cart">
          Remove from Cart
        </button>
      )}
      </div>
    );
  }
}
export default Card;