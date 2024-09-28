import '../style/Navbar.css';
import '../style/Global.css';
import logo from '../assets/img/logo.png';
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({toggleCartVisibility}){

    return(
        <div className="navbar bg-det txt-sec w-full">
          <div className="navbar-start">
              <div className="ms-5">
                <a href="/"><img src={logo} alt="Flavor Express" className='w-40 z-auto'/></a>
              </div>
          </div>
          <div className="navbar-end">
              <div>
                <button className="me-5 text-xl flex items-center" onClick={toggleCartVisibility}><FaShoppingCart /></button>
              </div>
          </div>
        </div>
    );
}