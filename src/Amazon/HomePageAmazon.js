import React, { Component } from "react";

import Header from "./Header"
import Panel from "./Panel";
import { products } from "./Data";
import "./HomePageAmazon.css";
import Cart from "./Cart";

class HomePageAmazon extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cartItems: products,
        cart: [],
        showCart: false,
        totalPrice: 0,
    };
}

addCart = (item) => {
    this.setState((prevState) => ({
        cart: [...prevState.cart, item],
        totalPrice: prevState.totalPrice + Number(item.price.toString().replace(/,/g, "")), 
    }));
};

removeFromCart = (index) => {
    this.setState((prevState) => {
        const updatedCart = [...prevState.cart];
        const removedItem = updatedCart.splice(index, 1)[0];

        return {
            cart: updatedCart,
            totalPrice: prevState.totalPrice - Number(removedItem.price.toString().replace(/,/g, ""))
        };
    });
};


switchPanel = () => {
    this.setState((prevState) => ({
        showCart: !prevState.showCart,
    }));
};

alertFunction = () => {
    if (this.state.totalPrice > 0) {
        alert('Thank you for your purchase!');
    } else {
        alert('Cart is empty');
    }
};

render() {
    return (
        <div>
            <Header
                cartCount={this.state.cart.length}
                switchPanel={this.switchPanel}
            />
            {this.state.showCart ? (
                <Panel
                    checkOut={this.alertFunction}
                    addCart={this.addCart}
                    removeFromCart={this.removeFromCart}
                    cartItems={this.state.cart}
                    showCart={this.state.showCart}
                    cartCount={this.state.cart.length}
                    totalPrice={this.state.totalPrice}
                    cartItemsList={this.state.cartItems}
                />
            ) : (
                <Panel
                    addCart={this.addCart}
                    removeFromCart={this.removeFromCart}
                    cartItems={this.state.cart}
                    showCart={this.state.showCart}
                    cartCount={this.state.cart.length}
                    totalPrice={this.state.totalPrice}
                    cartItemsList={this.state.cartItems}
                />
            )}
        </div>
    );
}
}
export default HomePageAmazon;

