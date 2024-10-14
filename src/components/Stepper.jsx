export default function Stepper(){
    return (
        <div className="max-w-2xl mx-auto p-4">
            <ul className="space-y-20">
                <li className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 text-2xl rounded-full bg-sec txt-acc font-oddval">1</div>
                    <div className="ml-4">
                        <h3 className="text-3xl font-oddval txt-acc">Indica la posizione</h3>
                        <p className="text-white text-xl font-archivio max-w-md">Indica la tua posizione per aver in modo sicuro il tuo ordine</p>
                    </div>
                </li>
                <li className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 text-2xl rounded-full bg-sec txt-acc font-oddval">2</div>
                    <div className="ml-4">
                        <h3 className="text-3xl font-oddval txt-acc">Trova ciò che desideri</h3>
                        <p className="text-white text-xl font-archivio max-w-md">Indica la tua posizione per aver in modo sicuro il tuo ordine</p>
                    </div>
                </li>
                <li className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 text-2xl rounded-full bg-sec txt-acc font-oddval">3</div>
                    <div className="ml-4">
                        <h3 className="text-3xl font-oddval txt-acc">Consegna rapida</h3>
                        <p className="text-white text-xl font-archivio max-w-md">Indica la tua posizione per aver in modo sicuro il tuo ordine</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}