import logo from '../assets/logo-light.svg'
import logoSIC from '../assets/industria-comercio.svg'
import crediBanco from '../assets/credibanco.svg'
import goDaddy from '../assets/godaddy.svg'

import {
    RiFacebookBoxFill, RiPinterestFill, RiInstagramFill, RiTiktokFill
} from '@remixicon/react';

function Footer() {

    return (
        <>
            <footer className="flex flex-col min-h-[50svh] w-full bg-(--brown) pt-10 pb-5 md:pt-20 md:pb-10 px-3 items-center gap-10">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
                    <section className="flex-1 gap-7 md:gap-6 flex flex-col text-white items-start">
                        <img
                            src={logo}
                            alt="Logo"
                            className='h-15'
                        />
                        <p className='max-w-100 text-md text-white/80 leading-none'>
                            Contiene sustancias o productos que pueden causar alergias o intolerancias.
                        </p>

                        <div>
                            <ul className='flex gap-5'>
                                <li><RiFacebookBoxFill size={32} /></li>
                                <li><RiPinterestFill size={32} /></li>
                                <li><RiInstagramFill size={32} /></li>
                                <li><RiTiktokFill size={32} /></li>
                            </ul>
                        </div>

                        <p className='text-sm text-white/80'>
                            ¿Problemas con tu domicilio? <br />
                            Llamános al <a href="tel:6017561515" className="hover:underline hover:text-white">60(1) 756 1515</a>
                        </p>
                    </section>

                    <section className="grid grid-cols-3 w-full gap-10 md:gap-20">
                        <div>
                            <h2 className="text-md text-white mb-5">Servicios</h2>
                            <ul className="gap-8 flex flex-col text-md text-white/70 leading-none">
                                <li><a href="#" className="hover:underline hover:text-white">Nuestra Historia</a></li>
                                <li><a href="#" className="hover:underline hover:text-white">Contacto</a></li>
                                <li><a href="#" className="hover:underline hover:text-white">Cobertura</a></li>
                                <li><a href="#" className="hover:underline hover:text-white">Sostenibilidad</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-md text-white mb-5">Legal</h2>
                            <ul className="gap-8 flex flex-col text-md text-white/70 leading-none">
                                <li><a href="#" className="hover:underline hover:text-white">Política de Privacidad</a></li>
                                <li><a href="#" className="hover:underline hover:text-white">Política de Tratamiento de Datos</a></li>
                                <li><a href="#" className="hover:underline hover:text-white">Términos y Condiciones</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-md text-white mb-5">Empresa</h2>
                            <ul className="gap-8 flex flex-col text-md text-white/70 leading-none">
                                <li><a href="#" className="hover:underline hover:text-white">Facturación Electrónica</a></li>
                                <li><a href="#" className="hover:underline hover:text-white">Sistema de Pagos e Impuestos</a></li>
                                <li><a href="#" className="hover:underline hover:text-white">Términos Dinámicas Digitales</a></li>
                                <li><a href="#" className="hover:underline hover:text-white">Términos Alianzas Comerciales</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
                <section className='border-t border-t-white/20 w-full h-30 flex justify-between md:justify-around items-center max-w-7xl relative gap-5'>
                    <img src={logoSIC} alt="Logo SIC" className='h-13 sm:h-17' />
                    <img src={crediBanco} alt="Logo CrediBanco" className='h-7 sm:h-10' />
                    <img src={goDaddy} alt="Logo GoDaddy" className='h-5 sm:h-7' />
                </section>
                <span className='text-white/40 text-sm'>© {new Date().getFullYear()} Todos los derechos reservados.</span>
            </footer>
        </>
    )

}

export default Footer