import lanzamientos from "../../assets/menu/lanzamientos.webp"
import promociones from "../../assets/menu/promociones.webp"
import calentado from "../../assets/menu/calentado.webp"
import chocolate from "../../assets/menu/chocolate.webp"
import bruschetta from "../../assets/menu/bruschetta.webp"
import bunuelo from "../../assets/menu/bunuelo.webp"
import corazoncitos from "../../assets/menu/corazoncitos.webp"
import torta from "../../assets/menu/torta.webp"
import pan from "../../assets/menu/pan.webp"
import pan2 from "../../assets/menu/pan2.webp"
import milhoja from "../../assets/menu/milhoja.webp"
import granola from "../../assets/menu/granola.webp"

import { Link } from "react-router-dom"
import { act } from "react"

function MenuSection() {

    const menuItems = [
        { name: "Lanzamientos", url: lanzamientos, activeElement: true },
        { name: "Promociones", url: promociones, activeElement: true },
        { name: "Desayunos", url: calentado, activeElement: false },
        { name: "Tardes Santafereñas", url: chocolate, activeElement: false },
        { name: "Para seguir el día", url: bruschetta, activeElement: false },
        { name: "Acompañamientos", url: bunuelo, activeElement: false },
        { name: "Antojos", url: corazoncitos, activeElement: false },
        { name: "Tortas y Ponqués", url: torta, activeElement: false },
        { name: "Panes para la mesa", url: pan, activeElement: false },
        { name: "Panes para ensamble", url: pan2, activeElement: false },
        { name: "Repostería", url: milhoja, activeElement: false },
        { name: "La alacena", url: granola, activeElement: false },
    ]

    return (
        <section id="menu" className="flex flex-col items-center px-3">
            <div className="max-w-7xl">
                <h1 className="text-[clamp(2rem,4vw,3rem)] flex items-center justify-center md:justify-start w-full pt-5 pb-10 md:pt-20 md:pb-10 uppercase text-(--orange-dark) font-cinzel">Nuestro Menú</h1>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-3 md:gap-3">
                    {menuItems.map((item, index) => (
                        <div className="overflow-hidden">
                            <Link
                                to={'/menu/' + item.name.toLowerCase()}
                                key={index}
                                className={`relative w-full cursor-pointer rounded-sm opacity-90 hover:opacity-100 transition-opacity duration-300
                                    ${item.activeElement ? '' : 'grayscale-90 pointer-events-none hover:cursor-not-allowed'}`}
                                onClick={() => {
                                    setTimeout(() => {
                                        window.scrollTo({
                                            top: 0,
                                        });
                                    }, 5);
                                }}
                            >

                                <img
                                    className="w-fit h-50 sm:h-fit object-contain rounded hover:scale-105 transition-transform duration-300"
                                    src={item.url}
                                    alt={item.name}
                                />
                                <footer className="bg-(--brown)/90 h-10 sm:h-15 flex items-center justify-center rounded-b text-white font-semibold tracking-wider uppercase absolute bottom-0 w-full">
                                    <span className="text-xs md:text-lg text-center">{item.name}</span>
                                </footer>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MenuSection