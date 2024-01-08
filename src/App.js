import Dashboard from "./pages/main-page/Dashboard";
import Navbar from "./pages/main-page/Navbar";
import Transactions from "./pages/main-page/Transactions"
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
