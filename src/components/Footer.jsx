import logo from '../assets/img/logo.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import '../style/Footer.css'

export default function Footer(){
    return(
        <footer className="w-auto footer footer-center bg-det p-10 txt-sec border-top">
            <aside>
                <img src={logo} alt="" />
                <p>Copyright © {new Date().getFullYear()} - Flavor Express</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className='text-3xl'>
                        <FaInstagram />
                    </a>
                    <a className='text-3xl'>
                        <FaFacebook />
                    </a>
                    <a className='text-3xl'>
                        <FaTiktok />
                    </a>
                </div>
            </nav>
        </footer>
    );
}