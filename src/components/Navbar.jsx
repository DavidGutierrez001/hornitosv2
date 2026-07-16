import logo from '../assets/logo.svg'
import Search01Icon from '@iconify-react/hugeicons/search-01';
import ShoppingBasket01Icon from '@iconify-react/hugeicons/shopping-basket-01';
import UserCircleIcon from '@iconify-react/hugeicons/user-circle';
import Menu01Icon from '@iconify-react/hugeicons/menu-01';

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex h-25 w-full navbar-bg justify-center bg-(--brown) px-3 z-100">
            <div className='flex items-center w-full max-w-7xl gap-3'>
                <section className='flex flex-1 md:flex-3 xl:flex-2 items-center justify-between gap-5'>
                    <button className='visible lg:hidden! rounded-md! p-2 text-white btn-navbar'>
                        <Menu01Icon height="2.3em" />
                    </button>
                    <Link to="/" className='md:me-10 m-0'>
                        <img className="min-w-25 h-15" src={logo} alt="logo" />
                    </Link>
                    <ul className='flex-1 text-white hidden md:text-xs lg:text-sm lg:flex justify-between md:justify-center md:gap-5 lg:gap-10 items-center'>
                        <Link className='relative overflow-hidden py-1' to="/menu">
                            <a className='items-navbar'>Menú</a>
                        </Link>
                        <Link className='relative overflow-hidden py-1' to="/panaderias">
                            <a className='items-navbar'>Panaderías</a>
                        </Link>
                        <Link className='relative overflow-hidden py-1' to="/visitanos">
                            <a className='items-navbar'>Visítanos</a>
                        </Link>
                        <Link className='relative overflow-hidden py-1' to="/contactanos">
                            <a className='items-navbar'>Contáctanos</a>
                        </Link>
                    </ul>
                </section>

                <section className='flex-2 flex items-center justify-end gap-2'>
                    <div className='md:flex w-full lg:max-w-70 xl:max-w-100 relative hidden focus-within:outline-3 focus-within:outline-(--orange-dark) focus-within:outline-solid rounded-full focus-within:text-(--orange-dark) transition-all duration-200'>
                        <Search01Icon
                            height="1.4em"
                            className='absolute top-1/2 left-5 -translate-y-1/2 pointer-events-none'
                        />
                        <input
                            type="text"
                            placeholder='Buscar'
                            className='flex w-full text-(--brown) text-xs ps-14 h-10 max-w-100 rounded-full bg-(--yellow-light) uppercase placeholder:text-xs placeholder:text-(--brown)/80'
                        />
                    </div>
                    <ul className='flex text-white justify-end gap-1'>
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