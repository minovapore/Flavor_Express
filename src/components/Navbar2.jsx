import '../style/Navbar.css';
// import '../style/Global.css';
import logo from '../assets/img/logo.png';
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar2({toggleCartVisibility, cartCount}){

    return(
        <div className="navbar bg-sec txt-det w-full">
            <div className="navbar-start">
                <div className="ms-5">
                    <a href="/"><img src={logo} alt="Flavor Express" className='w-60 z-auto'/></a>
                </div>
            </div>
            <div className="navbar-end">
                <div className="relative me-5 text-3xl flex items-center"> {/* Aggiungi relative qui */}
                    <button onClick={toggleCartVisibility} className="relative">
                        <FaShoppingCart />
                    </button>
                        {cartCount > 0 && (
                            <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white rounded-full px-2 text-sm">
                                {cartCount}
                            </span>
                        )}
                </div>
            </div>
        </div>
    );
}