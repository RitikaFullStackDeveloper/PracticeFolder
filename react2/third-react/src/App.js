//// for array team india and australia array buttons(without image)

// import "./App.css";
// import  MyComponent from  "./MyComponent"

// function App() {
//   const styleOne = {backgroundColor : "lightblue", fontSize:"14px"}
//   const styleTwo = {backgroundColor : "yellow", fontSize:"14px"}
//   // const styleThree = {backgroundColor : "green", fontSize:"14px"}
//   return (
//     <div className="App">
//       <header className="App-header">

//      <MyComponent teamName={"India"} buttonStyle={styleOne}/>
//      <MyComponent teamName={"Australia"} buttonStyle={styleTwo}/>
//      {/* <MyComponent teamName={"England"} buttonStyle={styleThree}/> */}

//       </header>
//     </div>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------------------------------


// import "./App.css";
// import Table from "./Table.js"
// // import Player from "./Player.js";
// // import  MyComponent from  "./MyComponent"

// function App() {


//   return (
//     <Table/>
// //     <div className="container">
// //       <div className="teamA" >
// //         <h1>INDIA</h1>
// //       </div>
// //       <div className="teamB">
// //         <h1>AUSTRALIA</h1>
// //       </div>
// //     </div>
//   );
// };


// export default App; 

//


////**** Table **********/
// import React from "react";
// import "./App.css";
// import Table from "./Table.js";

// function App() {
//   return (
//     <div className="App">
//     <>
//       <Table />
  
//       {/* Uncomment the following block if needed */}
//       {/* <div className="container">
//         <div className="teamA">
//           <h1>INDIA</h1>
//         </div>
//         <div className="teamB">
//           <h1>AUSTRALIA</h1>
//         </div>
//       </div> */}
//     </>
//     </div>
//   );
// }

// export default App;
//____________________________________________________________


import React from "react";
import "./App.css";
import NewTable from "./NewTable";
// import TableOf from "./TableOf";

// import Player from "./Player.js"

function App() {
  return (
    <div className="App">
    

    <NewTable/>
 

      {/* <Player />
  
     
       <div className="container">
        <div className="teamA">
          <h1>INDIA</h1>
        </div>
        <div className="teamB">
          <h1>AUSTRALIA</h1>
        </div>
      </div>
    */}
    </div>
  );
}

export default App;
