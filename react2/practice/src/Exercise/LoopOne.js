import React from "react";

class LoopOne extends React.Component{

    render(){
        const fruits = ["Apple","Banana","Orange","Guava","Mango"]

        return(
            <div style={{color:"white"}}>

                <h1>{"Fruit List"}</h1>
                {/* <p>
                    <ul>
                        <li>Apple</li>
                        <li>Banana</li>
                        <li>Orange</li>
                        <li>Guava</li>
                        <li>Mango</li>
                    </ul>
                </p> */}

            
              {fruits.map((item,index)=>{
               return <li>{item}</li>
              })}
        
            </div>
        )
    }
}
export default LoopOne;
