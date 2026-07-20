import logo from '../assets/logo.svg'
import logoDark from '../assets/logo-dark.svg'
import Search01Icon from '@iconify-react/hugeicons/search-01';
import ShoppingBasket01Icon from '@iconify-react/hugeicons/shopping-basket-01';
import UserCircleIcon from '@iconify-react/hugeicons/user-circle';
import Menu01Icon from '@iconify-react/hugeicons/menu-01';

import { RiCloseLargeLine } from '@remixicon/react';

import { Link } from 'react-router-dom'

import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: "Inicio", to: "/" },
        { label: "Menú", to: "/menu" },
        { label: "Visítanos", to: "/visitanos" },
        { label: "Contáctanos", to: "/contactanos" },
    ];

    return (
        <nav className="flex h-25 w-full navbar-bg justify-center bg-(--brown) px-3 z-80">
            <div className='flex items-center w-full max-w-7xl gap-3'>
                <section className='flex flex-1 md:flex-2 xl:flex-2 items-center md:justify-around lg:justify-between gap-5'>
                    <button
                        className='visible lg:hidden! rounded-md! p-2 text-white btn-navbar'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu01Icon height="2.3em" />
                    </button>
                    <Link to="/" className='m-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0'>
                        <img className="min-w-25 h-15" src={logo} alt="logo" />
                    </Link>

                    <ul className='flex-1 text-white hidden md:text-xs lg:text-[1rem] lg:flex justify-between md:justify-center md:gap-5 lg:gap-10 items-center'>
                        <Link className='relative overflow-hidden py-1 items-navbar' to="/menu">
                            Menú
                        </Link>
                        <Link className='relative overflow-hidden py-1 items-navbar' to="/visitanos">
                            Visítanos
                        </Link>
                        <Link className='relative overflow-hidden py-1 items-navbar' to="/contactanos">
                            Contáctanos
                        </Link>
                    </ul>
                    <aside className={`md:hidden bg-white fixed inset-0 h-screen p-5 w-full max-w-120 flex flex-col transition-transform duration-300 z-50
                        ${isOpen ? "translate-x-0" : "-translate-x-full"}
                        `}>
                        <div className='flex w-full justify-between h-12'>
                            <img className="min-w-25 h-15" src={logoDark} alt="logo" />
                            <button onClick={() => setIsOpen(false)}>
                                <RiCloseLargeLine height={50} />
                            </button>
                        </div>
                        <ul className='flex flex-col gap-5 py-10'>
                            {links.map((link) => (
                                <Link
                                    key={link.to}
                                    className="relative overflow-hidden py-1 items-navbar text-2xl"
                                    to={link.to}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </ul>
                    </aside>
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
                            className='flex w-full text-black text-sm ps-14 h-10 max-w-100 rounded-full bg-white uppercase placeholder:text-xs placeholder:text-black/60'
                        />
                    </div>
                    <ul className='flex text-white justify-end gap-1'>
                        <button className='btn-navbar visible md:hidden!'>
                            <Search01Icon
                                height="1.6em"
                            />
                        </button>

                        <button className='btn-navbar hidden! md:flex!'>
                            <UserCircleIcon height="1.6em" />
                        </button>
                        <button className='btn-navbar hidden! md:flex!'>
                            <ShoppingBasket01Icon height="1.6em" />
                        </button>
                    </ul>
                </section>
            </div>
        </nav>
    )
}

export default Navbar