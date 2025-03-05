import React from "react";


class ConditionalJsx extends React.Component {
    render() {
        let greetings = "hello world"


        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        if (hours < 12) {
            greetings = "Good Morning";
        } else if (hours >= 12 && hours < 17) {
            greetings = "Good Afternoon";
        } else if (hours >= 12 && hours < 17) {
            greetings = "Good Night";
        }
        return (
            <div
            style={{ backgroundColor: "lightgrey", padding: "20px", width:"40%", marginLeft:"20%"}}>

            <h1>{greetings}</h1>
            <p>The current time is{hours}:{minutes < 10 ? `0$(minutes)` : minutes}</p>
        </div>
        )
    }
}

export default ConditionalJsx;
