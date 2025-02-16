import React from "react";
import "./AmazonTwo.css";
import Cart from "./Cart.js";
class Header extends React.Component {

    render() {
        return (
            <div className="cart-container">
                <img src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png" style={{ height: "50px", width: "180px", marginTop: "15px", marginLeft: "20px" }}/>
             
                {/* <div className="search-container" style={{ marginLeft: "30px" }}> */}
               
                    <button type="text">Search</button>
                    <Cart counter={this.props.counter} />
                {/* </div> */}
                
            </div>

        )
    }
}
export default Header;

