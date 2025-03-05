//  import React from "react";
//  import React, { useState } from "react";
//  import ".DynamicImage.css"

// export default function DynamicImage() {
//     const [selectFruit, setSelectFruit] = useState("apple")

//     const fruitImage = {
//         apple: "./apple.jpg",
//         banana: "./banana.webp",
//         mango: "./mango.jpg",
//     };
//     const onselectChange = (event) => {
//         setSelectFruit(event.target.value);
//     };
//     return (
//         <div className="div">
//             <h1>Select a Fruit</h1>
//             <select name="select" onChange={onselectChange}>
//                 <option value="apple">Apple</option>
//                 <option value="banana">Banana</option>
//                 <option value="mango">Mango</option>
//             </select>
//         <br />
//         <br />
//         <h2>{[ selectFruit]}</h2>
//             <img style={{height:"100px", width:"100px"}}
//             src={fruitImage[selectFruit]} />

//         </div>
//     )
// }


// 

import React from "react";
//  import React, { useState } from "react";
import ".DynamicImage.css"

class DynamicImage extends React.Component {
    constructor() {
        super(props)
        this.state = {
            selectFruit = "apple"

    };

     fruitImage = {
        apple: "./apple.jpg",
        banana: "./banana.webp",
        mango: "./mango.jpg",
    };

    setSelectFruit = (value) => {
        this.setState({ selectFruit:value })
    }

    onselectChange = (event) => {
        setSelectFruit(event.target.value)
    };
    render(){
    return(
        <div className = "div" >
            <h1>Select a Fruit</h1>
            <select name="select" onChange={onselectChange}>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="mango">Mango</option>
            </select>
        <br />
        <br />
        <h2>{ this.state.selectFruit}</h2>
            <img style={{height:"100px", width:"100px"}}
            src={this.state.fruitImage[this.state.selectFruit]} />
        
        </div>
    )
}
}
}
export default DynamicImage;

