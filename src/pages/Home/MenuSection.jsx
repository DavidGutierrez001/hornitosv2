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
                <h1 className="text-[clamp(2rem,4vw,3.2rem)] border-b-2 flex border-b-(--orange)/50 items-center justify-center md:justify-start w-full py-3 mt-10 md:mt-20 md:mb-15 uppercase text-(--orange-dark) font-cinzel">
                    Nuestro Menú
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full gap-3 md:gap-3 mt-10">
                    {menuItems.map((item, index) => (
                        <div className="overflow-hidden" key={index}>
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
                                <div className="flex flex-col gap-0">
                                    <img
                                        className="w-fit h-60 sm:h-fit object-cover rounded hover:scale-105 transition-transform duration-300"
                                        src={item.url}
                                        alt={item.name}
                                        loading="lazy"
                                        decoding="async"
                                    >
                                    </img>
                                    <span className="bg-(--brown) w-full flex h-12 text-white items-center justify-center z-50">
                                        {item.name}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MenuSection