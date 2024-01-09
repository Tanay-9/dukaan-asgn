import NavBottom from "../../component/NavBottom"
import Navtop from "../../component/Navtop"
import "./Navbar.css"
const Navbar = ({ isOpen }) => {

  return (
    <>
    <div className={`navbar-main ${isOpen ? 'clicked' : ''}`}>

        <div className="navbar-inner">
          <Navtop/>
          <NavBottom/>
        </div>
    </div>
        </>
  )
}

export default Navbar