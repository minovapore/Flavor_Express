import logo from '../assets/img/logo.png'
import '../style/Form.css'

export default function Form({getTotalAmount}){
    return(
        <div className="bg-det w-full h-full txt-sec">
            <div className='flex justify-center'>
                <img src={logo} alt="" className='my-10'/>
            </div>
            <div className="flex justify-center">
                <h2 className='text-4xl font-archivio'>Completa il tuo ordine</h2>
            </div>
            <div className="flex justify-center my-5">
                <div className="w-[500px] h-[600px] bord-form rounded-2xl">
                    <div>
                        <h3>Inseris</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}