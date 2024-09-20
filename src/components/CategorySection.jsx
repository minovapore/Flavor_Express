import { IoPizzaOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";
import { BiSushi } from "react-icons/bi";
import { CiFries } from "react-icons/ci";
import { LuCakeSlice } from "react-icons/lu";
import { LuSalad } from "react-icons/lu";
import { RiDrinks2Line } from "react-icons/ri";
import '../style/CategorySection.css';

export default function CategorySection({category, items, addToCart}){
    return(
        <div className="bg-sec">
            <h2 id={category} className="text-3xl flex p-4 w-full text-start font-archivio">
                {category.charAt(0).toUpperCase() + category.slice(1)}
                {category === 'pizze' && <li className="flex mx-5 items-center"><IoPizzaOutline/></li>}
                {category === 'panini' && <li className="flex mx-5 items-center"><PiHamburger /></li>}
                {category === 'sushi' && <li className="flex mx-5 items-center"><BiSushi /></li>}
                {category === 'fritti' && <li className="flex mx-5 items-center"><CiFries /></li>}
                {category === 'dolci' && <li className="flex mx-5 items-center"><LuCakeSlice /></li>}
                {category === 'insalate' && <li className="flex mx-5 items-center"><LuSalad /></li>}
                {category === 'bevande' && <li className="flex mx-5"><RiDrinks2Line /></li>}
            </h2>
            
            <div className="grid xl:grid-cols-3 place-items-center gap-5 my-5">
                {items.map(item => (
                    <div key={item.id} className="w-[470px] h-[225px] p-2 bg-sec txt-det rounded-lg transition-all duration-200 hover:scale-105 border-card">
                        <a role="button" onClick={()=>document.getElementById(`my_modal_${item.id}`).showModal()}>
                            <div className="flex items-center justify-between my-1">
                                <div className="bg-info w-[200px]">
                                    <h2 className="font-bold text-xl">{item.name}</h2>
                                    <p className="line-clamp-1 bg-error w-[175px]">{item.description}</p>
                                    <h3 className="font-semibold text-lg">{item.price}€</h3>
                                </div>
                                <div className="flex justify-center items-center w-[250px] h-[200px] bg-primary">
                                    <img className="rounded-lg mx-auto" src={item.image} alt={item.name} 
                                    />
                                </div>
                            </div>
                            <dialog key={item.id} id={`my_modal_${item.id}`} className="modal">
                                <div  className="modal-box">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="py-4">{item.description}</p>
                                    <p className="py-4">{item.ingredients}</p>
                                    <p>{item.price}€</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn">Close</button>
                                            <button onClick={() => addToCart(category, item.id)} className="p-2 text-xl w-32 rounded-xl bg-primary">Aggiungi</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}