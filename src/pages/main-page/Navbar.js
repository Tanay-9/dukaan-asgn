import NavBottom from "../../component/NavBottom"
import Navtop from "../../component/Navtop"
import "./Navbar.css"
const Navbar = () => {

  return (
    <>
    <div className="navbar-main" >
        <div className="navbar-inner">
          <Navtop/>
          <NavBottom/>
        </div>
    </div>
        </>
  )
}

export default Navbar