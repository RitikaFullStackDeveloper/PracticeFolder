import React from "react";
import "./Form.css";

class FormJsx extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div className="div">
                <form >
                    <h1>Log In </h1>
                    <input type="text" placeholder="Enter Name"/>
                  
                    <br />
                    <br />
                    <br />
                    <input type="password" placeholder="Enter Password"/>
                   
                    <br />
                    <br />
                    <br />
                    <br />
                    <button className="button">Log In</button>
                </form>
            </div>
        )
    }
}
export default FormJsx;

