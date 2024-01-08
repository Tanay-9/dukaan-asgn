import Dashboard from "./pages/Navbar/Dashboard";

import Navbar from "./pages/Navbar/Navbar";
import Transactions from "./pages/Navbar/Transactions";
function App() {
  return (
    <>
    <div className="flex">
    <Navbar/>
    <div className="flex1">
    <Dashboard/>
    <Transactions/>
    </div>
    </div>
      </>
  );
}

export default App;
