import React from "react";
import "./ProfileImage.css";
import barbie1 from '../images/asset/barbie1.jpg';


export default class ProfileImgBlue extends React.Component{
    render(){
        return(
            <div>
                {/* source image */}
                <img src={barbie1} className="image"  />
            </div>
        )
    }
}   

