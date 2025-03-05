import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Contact from "./Components/Contact";
import Constant from "./Components/Constant";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


export default function App() {
  const HOMESCREEN = "Home Screen View"
  const CONTENT = "Content"
  const ABOUT = "Contact Screen"
  const NAV = "NAV Screen"
  const CONSTANT = "NAV Screen"
  return (
    <>
      {/* <About
        name={ABOUT}
      />
      <Home
        name={HOMESCREEN} />

      <Content
        name={CONTENT} />

      <Nav
        name={NAV} /> */}
{/* <Constant/> */}

        <Router>
        <Routes>
        <Route path="/" element={<Home name={HOMESCREEN}/>}/>
          <Route path="/home" element={<Home name={HOMESCREEN}/>}/>
          <Route path="/about" element={<About name={ABOUT}/>}/>
          <Route path="/contact" element={<Contact name={CONTENT}/>}/>
          <Route path="/nav" element={<Nav name={NAV}/>}/>
          <Route path="/constant" element={<Constant name={CONSTANT}/>}/>

       
        </Routes>
        </Router> 
    </>
  )


}




