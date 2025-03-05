import React from "react";

import img from "./asset/demoone.jpg"
export default class SrcImage extends  React.Component{
    render(){
        return(
            <div>
                <img src={img} className="image" />
            </div>
        )
    }
}