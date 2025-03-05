import React from "react";
import "./ProfileImage.css"


export  default class ProfileImgGreen extends React.Component{
    render(){
        return(
            <div>
                {/* absolute path */}
                <img src="https://i.pinimg.com/236x/15/2c/79/152c796f67911387b8dd73c08021209f.jpg" className="image"  />
            </div>
        )
    }
}
