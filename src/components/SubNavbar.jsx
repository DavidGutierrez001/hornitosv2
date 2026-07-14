import Motorbike01Icon from '@iconify-react/hugeicons/motorbike-01';
import StoreLocation01Icon from '@iconify-react/hugeicons/store-location-01';

function SubNavbar() {
    return (
        <nav className="flex h-17 w-full justify-center bg-(--yellow-light) text-[0.8rem] font-semibold px-3">
            <div className="flex w-full max-w-7xl">
                <ul className='flex items-center gap-3'>
                    <li><a className='hover:text-(--orange) text-center' href="">Iniciar orden</a></li>
                    <div className="flex gap-1 items-center h-10 rounded-2xl">
                        <a className="flex h-full w-full items-center px-4 rounded-full gap-2 hover:bg-black/10" href="">
                            <Motorbike01Icon height="1.7em" />
                            Domicilio
                        </a>

                        <a className="flex h-full w-full items-center px-4 selected-order rounded-full gap-2" href="">
                            <StoreLocation01Icon height="1.7em" />
                            Recoger/Consumir
                        </a>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default SubNavbar