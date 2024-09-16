import logo from '../assets/img/logo.png';
import instagram from '../assets/img/instagram.png';
import facebook from '../assets/img/facebook.png';
import youtube from '../assets/img/youtube.png';
import '../style/Footer.css'

export default function Footer(){
    return(
        <footer className="w-auto footer footer-center bg-sec txt-sec p-10 border-top">
            <aside>
                <img src={logo} alt="" />
                <p>Copyright © {new Date().getFullYear()} - Flavor Express</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                       <img src={instagram} alt="instagram" />
                    </a>
                    <a>
                        <img src={facebook} alt="" />
                    </a>
                    <a>
                        <img src={youtube} alt="" />
                    </a>
                </div>
            </nav>
        </footer>
    );
}