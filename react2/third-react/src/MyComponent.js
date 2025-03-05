// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       teamA_Score: 0,
//       teamB_Score: 0,
//       alert: null,  
//     };
//   }

//   teamA = () => {
//     this.setState(Ritika => ({
//       teamA_Score: Ritika.teamA_Score + 1,
//     }));
//   };

//   teamB = () => {
//     this.setState(Ritika => ({
//       teamB_Score: Ritika.teamB_Score + 1,
//     }));
//   };
// sayHello =()=>{
//   return<text>say hello</text>
// }
// renderButton =(playerName)=>{
//   return {

//   }

// }
// renderScore = ()=>{



// }

//   render() {
//     return (
//       <div>

//         <div className="Game">
//           <div className="Team_A">
//           {this.sayHello()}
//             {/* <h1>Team A</h1> */}
//             <div className="score">
//               <p>Score: {this.state.teamA_Score}</p>
//               {this.renderScore()}
//             </div>
//             <button className="Team_A" onClick={this.teamA}>Player 1</button>
//             <button className="Team_A" onClick={this.teamA}>Player 2</button>
//             <button className="Team_A" onClick={this.teamA}>Player 3</button>
//             <button className="Team_A" onClick={this.teamA}>Player 4</button>
//           </div>
//           <div className="Team_B">
//           {this.sayHello()}
//             {/* <h1>Team B</h1> */}
//             <div className="score">
//               <p>Score: {this.state.teamB_Score}</p>
//             </div>
//             <button className="Team_B" onClick={this.teamB}>Player 1</button>
//             <button className="Team_B" onClick={this.teamB}>Player 2</button>
//             <button className="Team_B" onClick={this.teamB}>Player 3</button>
//             <button className="Team_B" onClick={this.teamB}>Player 4</button>
//           </div>
//         </div>

//       </div>
//     );
//   }
// }

// export default MyComponent;




// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       score1: 0,
//       score2: 0,
//     };
//   }
//   counterIncrement = () => {
//     this.setState({
//       score1: this.state.score1 + 1,
//     });
//   };
//     
//   counterDecrement = () => {
//     this.setState({
//       score2: this.state.score2 + 1,
//     });
//   };

//   renderDisplayOne = () => {
//     return <h1> {this.state.score1}</h1>;
//   };
//   renderDisplayTwo = () => {
//     return <h1>  {this.state.score2}</h1>;
//   };
//   renderButtonsTeamOne = (PlayerName) => {
//     return (
//       <button className="color-boxOne" onClick={this.counterIncrement}>
//         {PlayerName}
//       </button>
//     );
//   };
//   renderButtonsTeamTwo = (PlayerName) => {
//     return (
//       <button className="color-boxTwo" onClick={this.counterDecrement}>
//         {PlayerName}
//       </button>
//     );
//   };

//   render() {
//     return (
//       <div className="container">
//         <div>
//           {this.renderDisplayOne()}
//           <div className="team1">
//             {this.renderButtonsTeamOne("Player one")}
//             {this.renderButtonsTeamOne("Player two")}
//             {this.renderButtonsTeamOne("Player three")}
//           </div>
//         </div>
//         <div>
//           {this.renderDisplayTwo()}
//           <div className="team2">
//             {this.renderButtonsTeamTwo("Player one")}
//             {this.renderButtonsTeamTwo("Player two")}
//             {this.renderButtonsTeamTwo("Player three")}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default MyComponent;





// // // another one option
// import React from "react";
// import "./MyComponent.css";
// // // import { Button } from "@coreui/coreui";
// // // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       lastClicked: null,
//       counterone: 0,
//       countertwo: 0,
//       ButtonA:true,
//       ButtonB:true,
//       ButtonC:true,

//     };
//   }



// //   counterIncr = (buttonClicked) => {
// //     console.log(buttonClicked);
// //     // this.setState({lastClicked: buttonClicked});
// //     // this.setState({ counter: ++this.state.counterone });
// //     if(buttonClicked =="palyer One"){
// //         this.setState.({ButtonA:False});
// //     } else if (buttonClicked =="palyer Two"){
// //         this.setState.({ButtonB:False});
// //     }else if (buttonClicked =="palyer Two"){
// //         this.setState.({ButtonC:False});
// //     }
// // }


// counterIncr = (buttonClicked) => {
//     if(buttonClicked === "player one"){
//       this.setState({ buttonA: false });
//     }else if( buttonClicked==="player two"){
//      this.setState({buttonB:false})
//     }else if( buttonClicked==="player three"){
//       this.setState({buttonc:false})
//     }
//         this.setState({lastClicked: buttonClicked});
//         this.setState({ counter: ++this.state.counterone });
//       };

//   };

//   renderScore = () => {
//     let textStyle ={color:"white    ",fontSize:"14px"}
//     // if(this.state.lastClicked =="player one"){
//     //     textStyle={color:"yellow",fontSize:"19px"}
//     // } else if(this.state.lastClicked =="player two"){
//     //     textStyle={color:"green",fontSize:"19px"}
//     // } else if(this.state.lastClicked =="player three"){
//     //     textStyle={color:"purple",fontSize:"19px"}
//     // }
//     // return  <text style={textStyle}>{this.state.counterone}</text>

//   };

//   renderButton = (playerName) => {
//     let buttonStyle = {backgroundColor:"green", fontsize: "20px" };



//     if(this.state.lastClicked === playerName){
//         buttonStyle = { backgroundColor: "lightcoral", fontsize: "20px" };
//         playerName = ["ritika"]

//     }


//     return (
//         <button
//           className="button"
//           onClick={()=>this.counterIncr(playerName)  }
//           style={buttonStyle}
//         >{playerName}
//         </button>
//       );


//     // return (
//     //     <button className="button"
//     //         style={buttonstyle}
//     //         onClick={() => this.counterIncre(playerName)}
//     //     >
//     //         {playerName}

//     //     </button>
//     // );
//   };
// //   render() {
// //     // const styleOne = { backgroundColor: "yellow", fontSize: "14px" };
// //     // const styleTwo = { backgroundColor: "green", fontSize: "14px" };
// //     // const styleThree = { backgroundColor: "purple", fontSize: "14px" };
// //     return (
// //       <div className="team">
// //         {this.renderScore()}
// //         {this.state.ButtonA ?this.renderButton("player one"):null}
// //         {this.state.ButtonB ?this.renderButton("player two" ):null}
// //         {this.state.ButtonC ? this.renderButton("player three" ):null}

// //       </div>
// //     );
// //   }
// // }
// render() {
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.state.buttonA ? this.renderButton("player one"):null}
//         {this.state.buttonB ? this.renderButton("player two"):null}
//         {this.state.buttonC ? this.renderButton("player three"):null}
//       </div>
//     );
//   }
// }
// export default MyComponent;


// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       team1Buttons: [
//         { id: 1, name: "Player one", bgcolor: "yellow" },
//         { id: 2, name: "Player two", bgcolor: "green" },
//         { id: 3, name: "Player three", bgcolor: "purple" },

//       ],
//     };
//   }

//   // Handle button removal by filtering out the clicked button
//   handleButtonClick = (id) => {
//     this.setState((prevState) => ({
//       team1Buttons: prevState.team1Buttons.filter(button => button.id !== id),
//     }));
//   };

//   renderDisplayOne = () => {
//     return <h1>{this.state.team1Buttons.length}</h1>;
//   };

//   renderButtons = () => {
//     return this.state.team1Buttons.map((button) => (
//       <button
//         key={button.id}
//         className="color-box"
//         onClick={() => this.handleButtonClick(button.id)}
//         style={{ backgroundColor: button.bgcolor }}
//       >
//         {button.name}
//       </button>
//     ));
//   };

//   render() {
//     return (
//       <div className="container">
//         <div>
//           {this.renderDisplayOne()}
//           <div className="team1">{this.renderButtons()}</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default MyComponent;






// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       lastClicked: null,
//       counterone: 0,
//       buttonA: true,
//       buttonB: true,
//       buttonC: true,
//       buttonD: true,
//       buttonE: true,
//       buttonF: true,
//       buttonG: true,
//       buttonH: true,
//       buttonI: true,
//       buttonJ: true,
//       buttonK: true,

//     };
//   }

//   counterIncr = (buttonClicked) => {
//     if (buttonClicked === "player one") {
//       this.setState({ buttonA: false });
//     } else if (buttonClicked === "player two") {
//       this.setState({ buttonB: false });
//     } else if (buttonClicked === "player three") {
//       this.setState({ buttonC: false });
//     }else if(buttonClicked === "player four") {
//         this.setState({ buttonD: false });
//     } else if (buttonClicked === "player five") {
//         this.setState({ buttonE: false });
//     } else if (buttonClicked === "player six") {
//         this.setState({ buttonF: false });
//     } else if (buttonClicked === "player seven") {
//         this.setState({ buttonG: false });
//     } else if (buttonClicked === "player eight") {
//         this.setState({ buttonH: false });
//     } else if (buttonClicked === "player nine") {
//         this.setState({ buttonI: false });
//     } else if (buttonClicked === "player ten") {
//         this.setState({ buttonJ: false });
//     } else if (buttonClicked === "player eleven") {
//         this.setState({ buttonK: false });

//     }




//     this.setState((prevState) => ({
//       lastClicked: buttonClicked,
//       counterone: prevState.counterone + 1,
//     }));
//   };

//   renderScore = () => {
//     return<text>{this.props.teamName}</text>;
//   }
//   renderButton = (playerName) => {
//     // let buttonStyle = { backgroundColor: "green", fontSize: "20px" };

//     // if (this.state.lastClicked === playerName) {
//     //   buttonStyle = { backgroundColor: "lightcoral", fontSize: "20px" };
//     // }
//     // let button =this.props.teamName == "India"
//     // ? {backgroundColor:"skyblue" , fontSize="14px"}
//     // :
//     let buttonStyle = this.props.buttonStyle;
//     return (
//       <button
//         className="button"
//         onClick={() => this.counterIncr(playerName)}
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };

//   render() {
//     return (
//       <div className="team">
//         {/* Conditionally render buttons based on their respective states */}
//         {this.state.buttonA ? this.renderButton("player one") : null}
//         {this.state.buttonB ? this.renderButton("player two") : null}
//         {this.state.buttonC ? this.renderButton("player three") : null}
//         {this.state.buttonD ? this.renderButton("player four") : null}
//         {this.state.buttonE ? this.renderButton("player five") : null}
//         {this.state.buttonF ? this.renderButton("player six") : null}
//         {this.state.buttonG ? this.renderButton("player seven") : null}
//         {this.state.buttonH ? this.renderButton("player eight") : null}
//         {this.state.buttonI ? this.renderButton("player nine") : null}
//         {this.state.buttonJ ? this.renderButton("player ten") : null}
//         {this.state.buttonK ? this.renderButton("player eleven") : null}
//       </div>
//     );
//   }
// }

// export default MyComponent;


// import React from "react";
// import "./MyComponent.css";
// // import { Button } from "@coreui/coreui";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//         lastClicked: null,
//         changeButton: null,
//         counterone: 0,
//         countertwo: 0,
//         buttonA: true,
//         buttonB: true,
//         buttonC: true,
//         buttonD: true,
//         buttonE: true,
//         buttonF: true,
//         buttonG: true,
//         buttonH: true,
//         buttonI: true,
//         buttonJ: true,
//         buttonK: true,
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     if(buttonClicked === "player one"){
//       this.setState({ buttonA: false });
//     }else if( buttonClicked==="player two"){
//      this.setState({buttonB:false})
//     }else if( buttonClicked==="player three"){
//       this.setState({buttonC:false}) 
//     }else if( buttonClicked==="player four"){
//       this.setState({buttonD:false}) 
//     }else if( buttonClicked==="player five"){
//       this.setState({buttonE:false}) 
//     }else if( buttonClicked==="player six"){
//       this.setState({buttonF:false}) 
//     }else if( buttonClicked==="player seven"){
//       this.setState({buttonG:false}) 
//     }else if( buttonClicked==="player eight"){
//       this.setState({buttonH:false}) 
//     }else if( buttonClicked==="player nine"){
//       this.setState({buttonI:false}) 
//     }else if( buttonClicked==="player ten"){
//       this.setState({buttonJ:false}) 
//     }else if( buttonClicked==="player eleven"){
//       this.setState({buttonK:false}) 
//     }
//         this.setState({lastClicked: buttonClicked});
//         this.setState({ counter: ++this.state.counterone });
//       };


//   renderScore = () => {
//     return<text>{this.props.teamName}</text>;
//   }
//   //   let textStyle ={color:"black",fontSize:"20px"}
//   //   if(this.state.lastClicked ==="player one"){
//   //       textStyle={color:"yellow",fontSize:"20px"}
//   //   } else if(this.state.lastClicked ==="player two"){
//   //       textStyle={color:"green",fontSize:"20px"}
//   //   } else if(this.state.lastClicked ==="player three"){
//   //       textStyle={color:"purple",fontSize:"20px"}
//   //   }
//   //   return  <text style={textStyle}>{this.state.counterone}</text>
//   // };

//   renderButton = (playerName) => {
//     // const isSelected = this.state.changeButton === playerName; // Check if the button is selected
//     // const btnStyle = isSelected
//     //   ? { backgroundColor: "green", fontSize: "20px" } // Green for the selected button
//     //   : { backgroundColor: "lightcoral", fontSize: "20px" }; // Default style

//     // let btnstyle = { backgroundColor: "lightcoral", fontSize: "20px"}
//     // if (this.state.lastClicked == playerName){
//     //   btnstyle = { backgroundColor: "green", fontSize: "20px"};
//     // }
//     // let ispresent = this.state.lastClicked.indexOf.(playerName) > -1;

//    let buttonStyle = this.props.buttonStyle;


//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)}
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {

//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.state.buttonA ? this.renderButton("player one"): null }
//         {this.state.buttonB ?  this.renderButton("player two" ): null }
//         {this.state.buttonC ? this.renderButton("player three"): null }
//         {this.state.buttonD ? this.renderButton("player four"): null }
//         {this.state.buttonE ?  this.renderButton("player five" ): null }
//         {this.state.buttonF ? this.renderButton("player six"): null }
//         {this.state.buttonG ? this.renderButton("player seven"): null }
//         {this.state.buttonH ?  this.renderButton("player eight" ): null }
//         {this.state.buttonI ? this.renderButton("player nine"): null }
//         {this.state.buttonJ ? this.renderButton("player ten"): null }
//         {this.state.buttonK ?  this.renderButton("player eleven" ): null }

//       </div>
//     );
//   }
// }
// export default MyComponent;


// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     // Define players for both teams
//     this.state = {
//       players: [
//         // Players of India
//         { id: 1, name: "Virat Kohli", team: "India", photo: "virat.jpg", position: "Batsman", visible: true },
//         { id: 2, name: "Rohit Sharma", team: "India", photo: "rohit.jpg", position: "Batsman", visible: true },
//         { id: 3, name: "Jasprit Bumrah", team: "India", photo: "bumrah.jpg", position: "Bowler", visible: true },
//         { id: 4, name: "Ravindra Jadeja", team: "India", photo: "jadeja.jpg", position: "All-Rounder", visible: true },
//         { id: 5, name: "KL Rahul", team: "India", photo: "rahul.jpg", position: "Batsman", visible: true },
//         { id: 6, name: "Hardik Pandya", team: "India", photo: "pandya.jpg", position: "All-Rounder", visible: true },
//         { id: 7, name: "Shreyas Iyer", team: "India", photo: "iyer.jpg", position: "Batsman", visible: true },
//         { id: 8, name: "Rishabh Pant", team: "India", photo: "pant.jpg", position: "Wicketkeeper", visible: true },
//         { id: 9, name: "Mohammed Shami", team: "India", photo: "shami.jpg", position: "Bowler", visible: true },
//         { id: 10, name: "Yuzvendra Chahal", team: "India", photo: "chahal.jpg", position: "Bowler", visible: true },
//         { id: 11, name: "Shubman Gill", team: "India", photo: "gill.jpg", position: "Batsman", visible: true },

//         // Players of Australia
//         { id: 12, name: "Steve Smith", team: "Australia", photo: "smith.jpg", position: "Batsman", visible: true },
//         { id: 13, name: "David Warner", team: "Australia", photo: "warner.jpg", position: "Batsman", visible: true },
//         { id: 14, name: "Pat Cummins", team: "Australia", photo: "cummins.jpg", position: "Bowler", visible: true },
//         { id: 15, name: "Glenn Maxwell", team: "Australia", photo: "maxwell.jpg", position: "All-Rounder", visible: true },
//         { id: 16, name: "Aaron Finch", team: "Australia", photo: "finch.jpg", position: "Batsman", visible: true },
//         { id: 17, name: "Mitchell Starc", team: "Australia", photo: "starc.jpg", position: "Bowler", visible: true },
//         { id: 18, name: "Marcus Stoinis", team: "Australia", photo: "stoinis.jpg", position: "All-Rounder", visible: true },
//         { id: 19, name: "Alex Carey", team: "Australia", photo: "carey.jpg", position: "Wicketkeeper", visible: true },
//         { id: 20, name: "Josh Hazlewood", team: "Australia", photo: "hazlewood.jpg", position: "Bowler", visible: true },
//         { id: 21, name: "Cameron Green", team: "Australia", photo: "green.jpg", position: "All-Rounder", visible: true },
//         { id: 22, name: "Adam Zampa", team: "Australia", photo: "zampa.jpg", position: "Bowler", visible: true },
//       ],
//       lastClicked: null,
//       counter: 0,
//     };
//   }

//   // Handle player click to hide the button and increase the counter
//   handlePlayerClick = (playerId) => {
//     this.setState((prevState) => ({
//       players: prevState.players.map((player) =>
//         player.id === playerId ? { ...player, visible: false } : player
//       ),
//       lastClicked: playerId,
//       counter: prevState.counter + 1,
//     }));
//   };

//   // Render each player card
//   renderPlayer = (player) => {
//     const buttonStyle = {
//       backgroundColor: player.team === "India" ? "blue" : "green",
//       color: "white",
//       fontSize: "16px",
//       padding: "10px",
//       margin: "5px",
//       border: "none",
//       cursor: "pointer",
//     };

//     return (
//       <div key={player.id} className="player-card">
//         <img
//           src={player.photo}
//           alt={player.name}
//           style={{ width: "100px", height: "100px", borderRadius: "50%" }}
//         />
//         <h3>{player.name}</h3>
//         <p>{player.position}</p>
//         {player.visible && (
//           <button
//             onClick={() => this.handlePlayerClick(player.id)}
//             style={buttonStyle}
//           >
//             Select
//           </button>
//         )}
//       </div>
//     );
//   };

//   render() {
//     const indiaPlayers = this.state.players.filter((player) => player.team === "India");
//     const australiaPlayers = this.state.players.filter((player) => player.team === "Australia");

//     return (
//       <div className="team-container">
//         <h1>Cricket Team Selection</h1>
//         <div className="team-section">
//           <h2>India</h2>
//           <div className="team-grid">
//             {indiaPlayers.map((player) => this.renderPlayer(player))}
//           </div>
//         </div>
//         <div className="team-section">
//           <h2>Australia</h2>
//           <div className="team-grid">
//             {australiaPlayers.map((player) => this.renderPlayer(player))}
//           </div>
//         </div>
//         <p>Total Clicks: {this.state.counter}</p>
//       </div>
//     );
//   }
// }

// export default MyComponent;

// // Player img





////  Using Array  create team india and australia( without image of players using array)
// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       lastClicked: null,
//       counterone: 0,
//       countertwo: 0,
//       buttonArray :[
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//       ],
//     };
//   }
//   counterIncr = (index) => {
//     console.log(index);
//     let copiedArray = [...this.state.buttonArray];
//     copiedArray[index] = false;
//     this.setState({buttonArray : copiedArray});
//   };

//   renderScore = () => {
   
//     return  <text>{this.props.teamName}</text>;
//   };

//   renderButton = (index,playerName) => {
   
//     let buttonStyle=this.props.buttonStyle;

//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(index,playerName)  }
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };

//   render() {
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.state.buttonArray[0] ? this.renderButton(0,"player one"):null}
//         {this.state.buttonArray[1] ? this.renderButton(1,"player two"):null}
//         {this.state.buttonArray[2] ? this.renderButton(2,"player three"):null}
//         {this.state.buttonArray[3] ? this.renderButton(3,"player four"):null}
//         {this.state.buttonArray[4] ? this.renderButton(4,"player five"):null}
//         {this.state.buttonArray[5] ? this.renderButton(5,"player six"):null}
//         {this.state.buttonArray[6] ? this.renderButton(6,"player seven"):null}
//         {this.state.buttonArray[7] ? this.renderButton(7,"player eight"):null}
//         {this.state.buttonArray[8] ? this.renderButton(8,"player nine"):null}
//         {this.state.buttonArray[9] ? this.renderButton(9,"player ten"):null}
//         {this.state.buttonArray[10]? this.renderButton(10,"player eleven"):null}
      
//       </div>
//     );
//   }
// }
// export default MyComponent;

// -------------------------------------------------------------------------------------------
