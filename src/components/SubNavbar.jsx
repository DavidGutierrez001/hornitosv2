import Motorbike01Icon from '@iconify-react/hugeicons/motorbike-01';
import StoreLocation01Icon from '@iconify-react/hugeicons/store-location-01';

function SubNavbar() {
    return (
        <nav className="flex h-17 w-full justify-center bg-(--yellow-light) text-[0.8rem] font-semibold px-3 shadow-xl/10 z-50">
            <div className="flex w-full max-w-7xl">
                <ul className='flex items-center gap-0 md:gap-3 uppercase'>
                    <li><a className='hover:text-(--orange) text-center hidden md:flex! text-xs' href="">Iniciar orden</a></li>

                    <div className="flex items-center h-10 rounded-2xl bg-black/5">
                        <button className="flex h-full w-full items-center px-4 rounded-s-full uppercase text-xs gap-2 bg-black/5 hover:bg-black/10 cursor-pointer" href="">
                            <Motorbike01Icon height="1.7em" />
                            Domicilio
                        </button>
                        <button className="flex h-full w-full items-center px-4 rounded-r-full selected-order uppercase text-xs gap-2 cursor-pointer" href="">
                            <StoreLocation01Icon height="1.7em" />
                            Recoger/Consumir
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default SubNavbar