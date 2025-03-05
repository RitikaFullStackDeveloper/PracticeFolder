// // import logo from './logo.svg';
// import './App.css';
// import { Audio } from 'react-loader-spinner'
// // import { RotatingSquare } from 'react-loader-spinner'
// import { CAlert } from '@coreui/react'
// import "mycomponent.css"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
          
//         > hello</a>
//         <button className='button'>click me</button>
//         <Audio
//           height="80"
//           width="80"
//           radius="9"
//           color="green"
//           ariaLabel="loading"
//           wrapperStyle
//           wrapperClass
//         />

// {/* <RotatingSquare
//   visible={true}
//   height="100"
//   width="100"
//   color="#4fa94d"
//   ariaLabel="rotating-square-loading"
//   wrapperStyle={{}}
//   wrapperClass=""
//   /> */}

// <CAlert color="light">A simple light alert—check it out!</CAlert>

//       </header>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { Audio } from "react-loader-spinner";
 import MyComponent  from "./MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MyComponent/>
      <MyComponent/>
      <MyComponent/>

     
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </header>
    </div>
  );
}

export default App;

