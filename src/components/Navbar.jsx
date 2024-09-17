import '../style/Navbar.css';
import '../style/Global.css';
import logo from '../assets/img/logo.png';

export default function Navbar({toggleCartVisibility}){

    return(
        <div className="navbar bg-det txt-sec w-full">
        <div className="navbar-start">
            <div className="ms-5">
            <a href="/"><img src={logo} alt="Flavor Express" className='w-40 z-auto'/></a>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex md:flex">
          <ul className="font-oddval menu menu-horizontal text-lg xl:gap-32 md:gap-24">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
          </ul>
        </div>
        <div className="navbar-end">
            <div>
            <button className="me-5" onClick={toggleCartVisibility}>carrello</button>
            </div>
            <div className="btn btn-ghost xl:hidden md:hidden" onClick={()=>document.getElementById('my_modal_85').showModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <dialog id="my_modal_85" className="modal">
            <div className="modal-box bg-det text-white text-center grid grid-cols-2 rounded-2xl">
              <ul tabIndex="0" className='text-start ms-5'>
                <li>Menù</li>
                <li className='my-4'>Dolci</li>
                <li>Bevande</li>
              <div className='xl:hidden md:hidden my-4'>
                    <button className='btn bg-sec bord2 text-white w-32 text-lg'>Registrati</button>
                    <button className='btn bg-acc bord txt-sec w-32 text-lg my-4'>Accedi</button>
                </div>
              </ul>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
       </div>
      </div>
    );
}