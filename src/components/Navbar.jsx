import logo from '../assets/logo.svg'
import Search01Icon from '@iconify-react/hugeicons/search-01';
import ShoppingBasket01Icon from '@iconify-react/hugeicons/shopping-basket-01';
import UserCircleIcon from '@iconify-react/hugeicons/user-circle';
import Menu01Icon from '@iconify-react/hugeicons/menu-01';

function Navbar() {
    return (
        <nav className="flex h-25 w-full navbar-bg justify-center bg-(--brown) px-3 z-100">
            <div className='flex items-center w-full max-w-7xl gap-3'>
                <section className='flex flex-1 md:flex-2 items-center gap-3'>
                    <button className='visible md:hidden! p-2 text-white btn-navbar'>
                        <Menu01Icon height="2.4em" />
                    </button>
                    <a href="/">
                        <img className="h-15 md:h-15 object-cover w-auto" src={logo} alt="logo" />
                    </a>
                    <ul className='flex-1 text-white hidden uppercase text-xs md:flex justify-between tracking-wide md:justify-center md:gap-5 lg:gap-10 items-center'>
                        <li className='relative overflow-hidden py-2'><a className='items-navbar' href="#menu">Ir al Menú</a></li>
                        <li className='relative overflow-hidden py-2'><a className='items-navbar' href="">Panaderías</a></li>
                        <li className='relative overflow-hidden py-2'><a className='items-navbar' href="">Visítanos</a></li>
                        <li className='relative overflow-hidden py-2'><a className='items-navbar' href="">Contáctanos</a></li>
                    </ul>
                </section>

                <section className='flex-1 flex items-center justify-end gap-2'>
                    <div className='md:flex flex-2 w-full max-w-100 relative hidden'>
                        <Search01Icon
                            height="1.5em"
                            className='absolute top-1/2 left-5 -translate-y-1/2 text-white/50'
                        />
                        <input
                            type="text"
                            placeholder='Buscar'
                            className='flex w-full text-white text-xs ps-14 h-11 max-w-100 rounded-full bg-(--brown-light) uppercase placeholder:text-xs placeholder:text-white/50'
                        />
                    </div>
                    <ul className='flex flex-1 text-white w-full justify-end gap-2'>
                        <button className='btn-navbar visible md:hidden!'>
                            <Search01Icon
                                height="1.6em"
                            />
                        </button>

                        <button className='btn-navbar'>
                            <UserCircleIcon height="1.6em" />
                        </button>
                        <button className='btn-navbar'>
                            <ShoppingBasket01Icon height="1.6em" />
                        </button>
                    </ul>
                </section>
            </div>
        </nav>
    )
}

export default Navbar