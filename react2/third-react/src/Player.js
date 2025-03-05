// import React from "react";
// // import "./MyComponent.css";

// class Player extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }


//     button = (playerImage,playerName) => {
//         return (
//             <div>
                
//                     <div>
//                     <img src={playerImage}  />
//                         {this.props.playerName}
//                     </div>

//                     {/* <button
//                         classNAme="player-button"
//                         style={this.props.Style}
//                     // onClplayerNameick={()} => this.counterIncre()}
//                     >
                        
//                     </button> */}
             
//             </div>
//         )
//     }
//     render() {
//         return(
//             <div >
//                 {this.state.button("https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png","virat")}
//             </div>
//         )
//     }

// }

// export default Player;
//____________________________________________________________________________________





// import React from "react";

// class Player extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   button = (playerImage, playerName) => {
//     return (
//       <div>
//         <div>
//           <img src={playerImage} alt={playerName} />
//           <p>{playerName}</p>
//         </div>
//         <button
//           className="player-button"
//           style={this.props.Style}
//           onClick={() => console.log(`${playerName} button clicked`)}
//         >
//           Click Me
//         </button>
//       </div>
//     );
//   };

//   render() {
//     return (
//       <div>
//         {this.button(
//           "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png",
//           "Virat Kohli"
//         )}
//       </div>
//     );
//   }
// }

// export default Player();


// gpt_____________________________________________________________________________

// import React from "react";

// class Player extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   button = (playerImage, playerName) => {
//     return (
//       <div>
//         <div>
//           <img src={playerImage} alt={playerName} />
//           <p>{playerName}</p>
//         </div>
//         <button
//           className="player-button"
//           style={this.props.Style}
//           onClick={() => console.log(`${playerName} button clicked`)}
//         >
//           Click Me
//         </button>
//       </div>
//     );
//   };

//   render() {
//     return (
//       <div>
//         {this.button(
//           "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png",
//           "Virat Kohli"
//         )}
//       </div>
//     );
//   }
// }

// export default Player;



import React from "react";
import "./Player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Button function to display player image and name
  button = (playerImage, playerName) => {
    return (
      <div>
        <div>
          <img src={playerImage} alt={playerName} style={{ width: 100, height: 100 }} />
          <p>{playerName}</p>
        </div>
        <button className="player-button" style={this.props.Style}
          onClick={() => console.log(`${playerName} button clicked`)}
        >
          Click Me
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
 
        {this.button("https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png","virat kohli"
        )}
        {this.button(
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Steve_Smith_in_2018.jpg", 
          "Steve Smith"
        )}
        {this.button(
          "https://www.cricket.com.au/-/media/players/mens/2022/11/17/josbuttler-16x9.jpg", 
          "Jos Buttler"
        )}
      </div>
    );
  }
}

export default Player;


