import Product from "./components/Product";
import Navbar from "./components/Navbar";
import "./sass/styles.scss";
import { useState } from "react";

function App() {

  const [isShow, setIsShow] = useState(false)
  return (
    <>
    <Navbar  isShow={isShow} setIsShow={setIsShow} />
    <Product  isShow={isShow} setIsShow={setIsShow} />
    
  
    </>
  )
}

export default App
