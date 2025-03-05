// import React from "react";
// import "./Player.css";

// class Player extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   // Button function to display player image and name
//   button = (playerImage, playerName) => {
//     return (
//       <div className="player-card">
//         <div className="img">
//           <img src={playerImage} style={{ width: 100, height: 100 }} />
//           <p>{playerName}</p>
//         </div>
//         {/* <button
//           className="player-button"
//           style={this.props.style}
//           onClick={() => console.log(`${playerName} button clicked`)}
//         >
          
//         </button> */}
//       </div>
//     );
//   };

//   render() {
//     return (
//       <div className="container">
//         <h1>India vs Australia</h1>
        
//         {/* India Team */}
//         <div className="team">
//         {/* <h2 >India</h2> */}
//           <div className="playersOne">

        
//                   {this.button(
//                     "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png", 
//                     "Virat Kohli"
//                   )}
//                   {this.button(
//                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5IMvU5mzUNUAVtUPVexkzgt3cDPUE6113Q&s", 
//                     "Rohit Sharma"
//                   )}
//                   {this.button(
//                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTOrxNuvbfIegOS-NrnhAEyFrP_oLB2UrOg&s", 
//                     "Jasprit Bumrah"
//                   )}
//                     {this.button(
//                     "https://api.bdcrictime.com/Profile/kl-rahul-14_10_2023.jpg", 
//                     "K L Rahul"
//                   )}
//                     {this.button(
//                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGl9Jw5PJiIdgKtGk0g-UaEvDCkoAxWf9kA&s", 
//                     "Shubman Gill"
//                   )}
//                     {this.button(
//                     "https://upload.wikimedia.org/wikipedia/commons/6/67/Rishabh_Pant_in_PMO_New_Delhi.jpg", 
//                     "Rishbh Pant"
//                   )}
//                     {this.button(
//                     "https://static.india.com/wp-content/uploads/2024/01/siraj1.jpg?impolicy=Medium_Widthonly&w=400&h=800", 
//                     "Mohammad Siraj"
//                   )}
//                     {this.button(
//                     "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/suryakumar-yadav.png", 
//                     "Suryakumar Yadav"
//                   )}
//                     {this.button(
//                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBJX_Lrs0HZOJ1tPVHV3EG5gQpdhSzADABw&s", 
//                     "Shreyas Iyar"
//                   )}
//                     {this.button(
//                     "https://files.prokerala.com/news/photos/imgs/1024/indian-cricketer-ishan-kishan-during-the-practice-1550829.jpg", 
//                     "Ishan Kishan"
//                   )}
//                     {this.button(
//                     "https://m.media-amazon.com/images/I/71rgHM7J4tS._AC_UF1000,1000_QL80_.jpg", 
//                     "Ravichandran Ashwin"
//                   )}
//           </div>
       

//         {/* Australia Team */}
// {/*        
//           <h2 >Australia</h2> */}
//           <div className="playersTwo">
//             {this.button(
//               "https://opt.toiimg.com/recuperator/img/toi/m-69415515/69415515.jpg", 
//               "Steve Smith"
//             )}
//             {this.button(
//               "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/travis-head.png", 
//               "Travis Head"
//             )}
//             {this.button(
//               "https://sportsmatik.com/uploads/world-events/players/pat-cummins_1580467882.jpg", 
//               "Pat Cummins"
//             )}
//             {this.button(
//               "https://crictoday.com/wp-content/uploads/2023/02/warner_player_of_the_tournamen_0_1200x768-1-1.jpg", 
//               "David Warner"
//             )}
//             {this.button(
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMRLwwq4wM5Rrd1nyszAT5SRyKQAYbfMlCn4-PBqVmy67VVhooaFg0xc2zYKiP9gwc9c&usqp=CAU", 
//               "Glenn Maxwell"
//             )}
//             {this.button(
//               "https://m.media-amazon.com/images/M/MV5BNzQzOTk1MTktYTExNC00NGU0LTllYzAtYzVkZjJjM2EzNmY4XkEyXkFqcGc@._V1_.jpg", 
//               "Mitchell Marsh"
//             )}
//               {this.button(
//               "https://i.guim.co.uk/img/media/5bc5cbb10ed3e5a09a4d19c5acaf02cf41c43df2/547_1050_3076_1845/master/3076.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=f938404d70101dc1dd6b30ee314604ce", 
//               "Nathan Lyon"
//             )}
//               {this.button(
//               "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/travis-head.png", 
//               "Travis Head"
//             )}
//               {this.button(
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbwOu35dD5puGMO7t9QFPLNvW8Vc7TLWH_g&s", 
//               "Cameron Green"
//             )}
//               {this.button(
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc02G6Ls-HIYqbkaSzch31JdVek_plsrHW0A&s", 
//               "Alex Carey"
//             )}
//               {this.button(
//               "https://static.theprint.in/wp-content/uploads/2023/01/ANI-20230131164521.jpg", 
//               "Matthew Wade"
//             )}
            
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Player;



import React from "react";
import "./Player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indiaPlayers: [
        { image: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png", name: "Virat Kohli" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5IMvU5mzUNUAVtUPVexkzgt3cDPUE6113Q&s", name: "Rohit Sharma" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTOrxNuvbfIegOS-NrnhAEyFrP_oLB2UrOg&s", name: "Jasprit Bumrah" },
        { image: "https://api.bdcrictime.com/Profile/kl-rahul-14_10_2023.jpg", name: "K L Rahul" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGl9Jw5PJiIdgKtGk0g-UaEvDCkoAxWf9kA&s", name: "Shubman Gill" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Rishabh_Pant_in_PMO_New_Delhi.jpg", name: "Rishbh Pant" },
        { image: "https://static.india.com/wp-content/uploads/2024/01/siraj1.jpg?impolicy=Medium_Widthonly&w=400&h=800", name: "Mohammad Siraj" },
        { image: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/suryakumar-yadav.png", name: "Suryakumar Yadav" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBJX_Lrs0HZOJ1tPVHV3EG5gQpdhSzADABw&s", name: "Shreyas Iyar" },
        { image: "https://files.prokerala.com/news/photos/imgs/1024/indian-cricketer-ishan-kishan-during-the-practice-1550829.jpg", name: "Ishan Kishan" },
        { image: "https://m.media-amazon.com/images/I/71rgHM7J4tS._AC_UF1000,1000_QL80_.jpg", name: "Ravichandran Ashwin" },
        // Add more India players...
      ],
      australiaPlayers: [
        { image: "https://opt.toiimg.com/recuperator/img/toi/m-69415515/69415515.jpg", name: "Steve Smith" },
        { image: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/travis-head.png", name: "Travis Head" },
        { image: "https://sportsmatik.com/uploads/world-events/players/pat-cummins_1580467882.jpg", name: "Pat Cummins" },
        { image: "https://crictoday.com/wp-content/uploads/2023/02/warner_player_of_the_tournamen_0_1200x768-1-1.jpg", name: "David Warner" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMRLwwq4wM5Rrd1nyszAT5SRyKQAYbfMlCn4-PBqVmy67VVhooaFg0xc2zYKiP9gwc9c&usqp=CAU", name: "Mitchell Marsh" },
        { image: "https://i.guim.co.uk/img/media/5bc5cbb10ed3e5a09a4d19c5acaf02cf41c43df2/547_1050_3076_1845/master/3076.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=f938404d70101dc1dd6b30ee314604ce", name: "Nathan Lyon" },
        { image: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/travis-head.png", name: "Travis Head" },
        { image: "https://opt.toiimg.com/recuperator/img/toi/m-69415515/69415515.jpg", name: "Cameron Green" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc02G6Ls-HIYqbkaSzch31JdVek_plsrHW0A&s", name: "Alex Carey" },
        { image: "https://static.theprint.in/wp-content/uploads/2023/01/ANI-20230131164521.jpg", name: "Matthew Wade" },
        { image: "https://opt.toiimg.com/recuperator/img/toi/m-69415515/69415515.jpg", name: "Steve Smith" },

        // Add more Australia players...
      ],
    };
  }

  // Function to remove player on click
  handlePlayerClick = (team, playerName) => {
    this.setState((prevState) => ({
      [team]: prevState[team].filter((player) => player.name !== playerName),
    }));
  };

  // Render players
  renderPlayers = (team, players) => {
    return players.map((player) => (
      <div className="player-card" key={player.name}>
        <img src={player.image} style={{ width: 100, height: 100 }} />
        <p>{player.name}</p>
        <button
          className="player-button"
          onClick={() => this.handlePlayerClick(team, player.name)}
        >
          Remove
        </button>
      </div>
    ));
  };

  render() {
    const { indiaPlayers, australiaPlayers } = this.state;

    return (
      <div className="container">
        <h1>India vs Australia</h1>
      <div className="box1">
        {/* India Team */}
        <div className="team">
          {/* <h2>India</h2> */}
          <div className="players">{this.renderPlayers("indiaPlayers", indiaPlayers)}</div>
        </div>

        {/* Australia Team */}
        <div className="team">
          {/* <h2>Australia</h2> */}
          <div className="players">{this.renderPlayers("australiaPlayers", australiaPlayers)}</div>
        </div>
      </div>
      </div>
    );
  }
}

export default Player;




