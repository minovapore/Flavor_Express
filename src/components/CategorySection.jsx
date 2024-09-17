export default function CategorySection({category, items, addToCart}){
    return(
        <div>
            <h2 id={category} className="text-3xl p-4 w-full text-start font-archivio">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="grid xl:grid-cols-3 place-items-center gap-6">
                {items.map(item => (
                    <div key={item.id} className="w-[475px] h-[300px] p-2 bg-det txt-sec rounded-lg transition-all duration-200 hover:scale-110">
                        <img className="rounded-lg w-[400px] h-[220px] object-cover" src={item.image} alt={item.name} />
                        <div className="flex flex-row justify-center items-center mt-3">
                            <h2 className="font-semibold text-xl">{item.name}</h2>
                            <h3 className="font-semibold text-lg mx-20">{item.price}€</h3>
                            <button onClick={() => addToCart(category, item.id)} className="p-2 text-xl w-32 rounded-xl bg-primary">Aggiungi</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}