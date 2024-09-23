import { IoPizzaOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";
import { BiSushi } from "react-icons/bi";
import { CiFries } from "react-icons/ci";
import { LuCakeSlice } from "react-icons/lu";
import { LuSalad } from "react-icons/lu";
import { RiDrinks2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import '../style/CategorySection.css';

export default function CategorySection({category, items, addToCart}){
    return(
        <div className="bg-sec w-full">
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
            
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-5 my-5">
                {items.map(item => (
                    <div key={item.id} className="xl:w-[470px] xl:h-[225px] md:w-[470px] md:h-[225px] w-[400px] h-[225px] p-2 bg-sec txt-det rounded-lg transition-all duration-200 hover:scale-105 border-card">
                        <a role="button" onClick={()=>document.getElementById(`my_modal_${item.id}`).showModal()}>
                            <div className="flex items-center justify-between my-1">
                                <div className="w-[250px] flex flex-col justify-between">
                                    <h2 className="font-bold text-2xl">{item.name}</h2>
                                    <p className="line-clamp-1 my-2 text-lg w-full">{item.description}</p>
                                    <h3 className="font-semibold text-xl">Prezzo: {item.price}€</h3>
                                </div>
                                <div className="flex justify-center items-center w-[250px] h-[200px]">
                                    <img className="rounded-lg mx-auto" src={item.image} alt={item.name} 
                                    />
                                </div>
                            </div>
                            <dialog key={item.id} id={`my_modal_${item.id}`} className="modal">
                                <div className="modal-box bg-modal txt-sec">
                                    <form method="dialog">
                                        <button className="btn text-3xl btn-sm btn-ghost absolute right-1 top-3"><IoMdClose /></button>
                                    </form>
                                    <h3 className="font-bold text-4xl">{item.name}</h3>
                                    <div className="my-4">
                                        <h2 className="text-xl font-semibold">Descrizione</h2>
                                        <p className="text-lg">{item.description}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">Ingredienti</h2>
                                        <p className="text-lg">{item.ingredients}</p>
                                    </div>
                                    <div className="my-4">
                                        <h2 className="text-xl font-semibold">Prezzo</h2>
                                        <p className="text-lg">{item.price}€</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <button onClick={() => addToCart(category, item.id)} className="btn w-32 text-xl font-semibold btn-modal border-none">Aggiungi</button>
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