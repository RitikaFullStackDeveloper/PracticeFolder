import React from "react";
import "./MyComponent.css";
// import { CAlert } from '@coreui/react'
 
class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {alert: false,};
    }
    showalert = () => {
    if (this.state.alert == 0){
         this.setState({ alert: 1 });
        }else if (this.state.alert == 1){
            this.setState({ alert: 2})

    }
    else{
            this.setState({alert :0})
        }

    };

    //   showalert = () => {
    // if (this.state.alert == 0){
    //      this.setState({ alert: 1 });
    //     }else if (this.state.alert == 1){
    //         this.setState({ alert: 2})

    // }
    // else{
    //         this.setState({alert :0})
    //     }

    // };



    
     
    render(){
        return(
            <div>
                {this.state.alert == 0? null : this.state.alert == 1?(
                <text>HELLO</text>
                 ): (
                    <text>Bye</text>
                 )}
                <button className="button" onClick={this.showalert}>
                    
                  click me
                </button>

                <button className="button" onClick={this.showalert}>
                    
                    click me
                  </button>

            </div>
        );
    }
}
export default MyComponent;