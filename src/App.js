import Dashboard from "./pages/main-page/Dashboard";
import Navbar from "./pages/main-page/Navbar";
import Transactions from "./pages/main-page/Transactions"
import { useState } from "react";
function App() {
  
  const [isOpen,setisOpen] = useState(false)
 
  const toggleOpen = () => {
    console.log('clicked');
    setisOpen(!isOpen)
  }
  return (
    <>
    <div className="flex">
    <Navbar  isOpen={isOpen}/>
    <div className="flex1">
    <Dashboard toggleOpen={toggleOpen} isOpen={isOpen}/>
    <Transactions/>
    </div>
    </div>
      </>
  );
}

export default App;
