import React from "react";
import "./AmazonTwo.css";
class Cart extends React.Component{
 
    render(){
        return(
            <div className="cart-img">
               <p> 
                <img src="amazon-cart.png" className="cart-logo"   /> 
               {this.props.counter}
                 </p> 
                 
            </div>
        )
    }
}
export default Cart;

