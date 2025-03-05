import React from "react";
import "./Practice.css";

class Practice extends React.Component { 
    constructor(props) {
    super(props);
    this.state = {
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        result: 0,
        
     }


}
render(){
    return(
        <div className="container">
            <div className="input-field">
            <input type="number" placeholder="Enter number" />
            <input type="number" placeholder="Enter number" />
            <input type="number" placeholder="Enter number" />
            <input type="number" placeholder="Enter number" />
           
            </div>
         
         <div className="btn">
            <button className="button">Add</button>
            </div>

        </div>
    )
}
}
export default Practice;