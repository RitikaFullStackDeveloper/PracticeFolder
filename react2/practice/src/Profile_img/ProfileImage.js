import React from "react";
import "./ProfileImage.css"


export default class ProfileImage extends  React.Component{
    render(){
        return(
            <div>
                 {/* public image */}
               <img src="./barbie2.jpg" className="image"  />
            </div>
        )
    }
}
